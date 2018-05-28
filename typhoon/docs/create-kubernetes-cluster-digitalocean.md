# Deploy Kubernetes Cluster on DigitalOcean

## Install `terraform`

```bash
wget -P /tmp https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_linux_amd64.zip
unzip /tmp/terraform_0.11.7_linux_amd64.zip -d /tmp
chmod +x /tmp/terraform
sudo mv /tmp/terraform /usr/local/bin
```

## Install `terraform-provider-ct`

```bash
wget -P /tmp https://github.com/coreos/terraform-provider-ct/releases/download/v0.2.1/terraform-provider-ct-v0.2.1-linux-amd64.tar.gz
tar xzf /tmp/terraform-provider-ct-v0.2.1-linux-amd64.tar.gz
sudo mv /tmp/terraform-provider-ct-v0.2.1-linux-amd64/terraform-provider-ct /usr/local/bin/
```

## Setup DigitalOcean Authentication

Replace `your-token` with your DigitalOcean API token, which will look something like `038casdf7407astw534dsd4b789wqerf892391ertyf9asdf34409ce3bc90`.

```bash
mkdir -p ~/.config/digital-ocean
echo "your-token" > ~/.config/digital-ocean/token
```

## Get SSH MD5 Fingerprint

Running the script below should return something like `7b:05:c2:f7:50:5c:a3:b0:eb:a7:09:c6:f1:53:04:a6`.

```bash
fingerprint_full=$($(echo ssh-add -l -E md5))
IFS=' ' read -ra ADDR <<< "$fingerprint_full"
index=0
for i in "${ADDR[@]}"; do
    if [ "$index" -eq 1 ]; then
        fingerprint_1=$i
        echo ${fingerprint_1//MD5:/}
        break
    fi
    ((index++))
done
```

## Set Variables

Running the commands below will set the variables for the new cluster. Replace `here` with the appropriate values.
You may adjust more values by editing `typhoon/terraform/cluster.tf` manually.

```bash
sed -i -e 's/yourclustername/here/g' typhoon/terraform/cluster.tf # i.e. opensdcp-cluster1
sed -i -e 's/yourdnszone/here/g' typhoon/terraform/cluster.tf # i.e. opensdcp.org
sed -i -e 's/yourfingerprint/here/g' typhoon/terraform/cluster.tf # i.e. 7b:05:c2:f7:50:5c:a3:b0:eb:a7:09:c6:f1:53:04:a6
sed -i -e 's/yourusername/here/g' typhoon/terraform/cluster.tf # i.e. pojntfx
```

## Add SSH Identity

```bash
ssh-add ~/.ssh/id_rsa
ssh-add -L
```

## Init `terraform`

This only has the be run when this is the first use with Terraform.

```bash
cd typhoon/terraform
terraform init
```

## Plan and Create the Cluster

This will take about 3-6 minutes.

```bash
cd typhoon/terraform
terraform plan
terraform apply
```

## Install `kubectl`

```bash
wget -O kubectl https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

## Setup `kubectl` and test cluster

If this returns a list of nodes, the deployment has worked.

```bash
export KUBECONFIG=/home/yourusername/.secrets/clusters/yourclustername/auth/kubeconfig
kubectl get nodes
```

## Install `kubernetes-dashboard`

```bash
kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
```

## Access the `kubernetes-dashboard`

```bash
# Get all secrets, select the one starting with `namespace-controller-xxxxx`
kubectl -n kube-system get secret
# Get token for namespace-controller
kubectl -n kube-system describe secret namespace-controller-token-vp7qp
# Proxy to localhost
kubectl proxy
# Now open http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/ and login with the token!
```

## Install `cluo`

This will coordinate reboots of the hosts.

```bash
cd typhoon/
git clone https://github.com/poseidon/typhoon.git
cd typhoon/
kubectl apply -f addons/cluo -R
```

## Install `nginx-ingress`

This will enable resolving to the deployments.

```bash
cd typhoon/typhoon
kubectl apply -R -f addons/nginx-ingress/digital-ocean
```

## Install `heapster`

This will enable monitoring in `kubernetes-dashboard` and `kubectl top`.

```bash
cd typhoon/typhoon
kubectl apply -f addons/heapster -R
```

## Install `prometheus`

This will enable metrics.

```bash
cd typhoon/typhoon
kubectl apply -f addons/prometheus -R
```

## Install `grafana`

This will provide a nice dashboard with visualizations.

```bash
cd typhoon/typhoon
kubectl apply -f addons/grafana -R
# Get the pod with grafan
kubectl -n monitoring get pods | grep grafana
# Proxy the dashboard to localhost
kubectl port-forward grafana-PPOD_ID_HERE 8080 -n monitoring
# Now open http://localhost:8080
```

## Install helm

```bash
wget -P /tmp https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get
chmod +x /tmp/get
/tmp/get
helm init
```

## Setup Load Balancer (not working yet)

```bash
git clone https://github.com/digitalocean/digitalocean-cloud-controller-manager.git
cd digitalocean-cloud-controller-manager
export DIGITALOCEAN_ACCESS_TOKEN=abc123abc123abc123
scripts/generate-secret.sh # answer with "y"
kubectl -n kube-system get secrets
kubectl apply -f releases/v0.1.5.yml
kubectl apply -f examples/loadbalancers/http-nginx.yml
```
