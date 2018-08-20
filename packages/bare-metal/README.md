# Create a Bare-Metal Kubernetes Cluster with Typhoon

## Install Dependencies

```bash
sudo apt install virt-manager virtinst qemu-kvm docker.io
```

## Get Matchbox

```bash
mkdir clones
cd clones
git clone https://github.com/coreos/matchbox.git
cd matchbox
```

## Add Node Hostnames

```bash
sudo su
echo \
"172.18.0.1 matchbox.example.com
172.17.0.21 cluster.example.com
172.17.0.21 node1.example.com
172.17.0.22 node2.example.com
172.17.0.23 node3.example.com
172.17.0.24 node4.example.com" \
>> /etc/hosts
exit
```

## Generate TLS Certificates

```bash
export SAN=DNS.1:matchbox.example.com,IP.1:172.18.0.1
cd scripts/tls/
./cert-gen
cp ca.crt server.crt server.key ../../examples/etc/matchbox
mkdir ~/.config/matchbox
cp ca.crt client.crt client.key ~/.config/matchbox/
cd ../../
```

## Run `matchbox` Container

```bash
docker run \
--name matchbox \
-p 8080:8080 \
-p 8081:8081 \
-d \
--rm -v $PWD/examples:/var/lib/matchbox:Z \
-v $PWD/examples/etc/matchbox:/etc/matchbox:Z,ro \
-v $PWD/examples/groups/etcd3:/var/lib/matchbox/groups:Z \
quay.io/coreos/matchbox:v0.7.0 \
-address=0.0.0.0:8080 \
-rpc-address=0.0.0.0:8081 \
-log-level=debug \
-assets-path=""
```

## Test if `matchbox` is container working

```bash
curl http://matchbox.example.com:8080 # should return "matchbox"
openssl s_client -connect matchbox.example.com:8081 \
  -CAfile ~/.config/matchbox/ca.crt \
  -cert ~/.config/matchbox/client.crt \
  -key ~/.config/matchbox/client.key
```

## Run `dnsmsq` Container

```bash
docker run \
--name dnsmasq \
-d \
--cap-add=NET_ADMIN \
-v $PWD/contrib/dnsmasq/docker0.conf:/etc/dnsmasq.conf:Z \
quay.io/coreos/dnsmasq:v0.5.0
```

## Install `terraform`

```bash
wget -P /tmp https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_linux_amd64.zip
unzip /tmp/terraform_0.11.7_linux_amd64.zip -d /tmp
chmod +x /tmp/terraform
sudo mv /tmp/terraform /usr/local/bin
```

## Install `terraform-provider-matchbox`

```bash
wget -P /tmp https://github.com/coreos/terraform-provider-matchbox/releases/download/v0.2.2/terraform-provider-matchbox-v0.2.2-linux-amd64.tar.gz
tar xzf /tmp/terraform-provider-matchbox-v0.2.2-linux-amd64.tar.gz
sudo mv terraform-provider-matchbox-v0.2.2-linux-amd64/terraform-provider-matchbox /usr/local/bin/
```

## Setup `terraform-provider-matchbox`-provider

```bash
touch ~/.terraformrc
echo \
'providers {
  matchbox = "/usr/local/bin/terraform-provider-matchbox"
}' \
>> ~/.terraformrc
```

## Get SSH Public Key

Running the script below should return something like `ssh-rsa AAAAB3NzaC1yc2EAAAA(...)== you@example.com`.

```bash
cat ~/.ssh/id_rsa.pub
```

## Set Variables

Add your SSH Public Key to `../../infra/terraform.tfvars` at the `ssh_authorized_key` key.

## Add SSH Identity

```bash
ssh-add ~/.ssh/id_rsa
ssh-add -L
```

## Init `terraform`

This only has the be run when this is the first use with Terraform. Otherwise, still `cd`.

```bash
cd ../../infra/
terraform init
```

## Plan and Create the Cluster

Continue to the next step after running `terraform apply`, even if there still is output

```bash
terraform get --update
terraform plan
terraform apply # enter "yes"
```

## Create 3 Nodes

These nodes will PXEBoot into Container Linux via the `matchbox` and `dnsmsq` containers.
This will take about 6-10 minutes.

```bash
# First node
virt-install \
--name node1 \
--network=bridge:docker0,mac=52:54:00:a1:9c:ae \
--memory=2048 \
--vcpus=1 \
--disk pool=default,size=8 \
--os-type=linux \
--os-variant=generic \
--noautoconsole \
--events on_poweroff=preserve \
--boot=hd,network
# Second node
virt-install \
--name node2 \
--network=bridge:docker0,mac=52:54:00:b2:2f:86 \
--memory=1024 \
--vcpus=1 \
--disk pool=default,size=4 \
--os-type=linux \
--os-variant=generic \
--noautoconsole \
--events on_poweroff=preserve \
--boot=hd,network
# Third node
virt-install \
--name node3 \
--network=bridge:docker0,mac=52:54:00:c3:61:77 \
--memory=1024 \
--vcpus=1 \
--disk pool=default,size=4 \
--os-type=linux \
--os-variant=generic \
--noautoconsole \
--events on_poweroff=preserve \
--boot=hd,network
```

## Check the Status

This can take a long time. In my case (i5 4690k, HDD) it took ~25 Minutes. Make sure you have enough free disk space!

```bash
docker logs -f matchbox
```
