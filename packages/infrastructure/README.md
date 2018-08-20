# OpenSDCP Infrastructure

Shared configuration files, scripts and documentation for the OpenSDCP project's infrastructure.

## Overview

The OpenSDCP project provides public services to it's users. The infrastructure that they run on is documented here. In case you want to host the services yourself, this is your starting point.

The infrastrucure is completely containerized and thus quite portable. Each service is a collection of containers.

### Working services

| Name                                                                         | Description                                                      | Port | URL                                                |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---- | -------------------------------------------------- |
| [opensdcp-website](https://github.com/opensdcp/opensdcp-website)             | Main website for navigation and official documentation (NextJS)  | 80   | [opensdcp.org](https://opensdcp.org)               |
| [opensdcp-swarm-manager](https://github.com/opensdcp/opensdcp-swarm-manager) | Docker swarm management GUI (Portainer)                          | 1000 | [cpanel.opensdcp.org](https://cpanel.opensdcp.org) |
| [opensdcp-git](https://github.com/opensdcp/opensdcp-git)                     | Git service for version control and collaboration (Gitea)        | 2000 | [git.opensdcp.org](https://git.opensdcp.org)       |
| [opensdcp-forum](https://github.com/opensdcp/opensdcp-forum)                 | Discussion and support platform (Flarum)                         | 3000 | [forum.opensdcp.org](https://forum.opensdcp.org)   |
| [opensdcp-wiki](https://github.com/opensdcp/opensdcp-wiki)                   | Documentation and detailed guides from the community (MediaWiki) | 4000 | [wiki.opensdcp.org](https://wiki.opensdcp.org)     |

### Planned services

| Name              | Description                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| opensdcp-demo     | Live demo of an OpenSNET Bridge (NodeJS)                                                       |
| opensdcp-chat     | Slack-like chat area for quick (and non-persistent) help and discussion (Mattermost)           |
| opensdcp-irc      | Simple and lightweight chat area for quick (and non-persistent) help and discussion (InspIRCd) |
| opensdcp-call     | Video and voice calls for contributors (Jitsi)                                                 |
| opensdcp-mail     | Mail server for contributors (Mailu)                                                           |
| opensdcp-kanban   | Kanban boards for contributors to better coordinate the project (Wekan)                        |
| opensdcp-identity | Single sign-on server for all services (OAuth and/or LDAP)                                     |
| opensdcp-status   | Status page that shows each service's status info                                              |

### Our setup

We test our services in our local docker swarm (see [Usage](#usage)) and then deploy them to our public production docker swarm.
Our domains are from [Gandi](https://www.gandi.net/), our certificates and CDN from [Cloudflare](https://www.cloudflare.com/) and our docker swarm nodes run on [DigitalOcean](https://www.digitalocean.com/) Droplets.
We are planning to move to Kubernetes and will update the documentation accordingly.

## Demo

Visit [opensdcp.org](https://opensdcp.org/) and take a look all our instances.

## Usage

### Docker Swarm

```bash
# Install dependencies (Debian/Ubuntu)
sudo apt install git docker.io docker-compose
# Clone all repositories
git clone https://github.com/opensdcp/opensdcp-website.git
git clone https://github.com/opensdcp/opensdcp-swarm-manager.git
git clone https://github.com/opensdcp/opensdcp-git.git
git clone https://github.com/opensdcp/opensdcp-forum.git
git clone https://github.com/opensdcp/opensdcp-wiki.git
# Create your local docker swarm (use your IP address here)
docker swarm init --advertise-addr YOUR_PUBLIC_IP
# Join the swarm (use your token and ip address from the command above) (run this on all nodes you want to use)
docker swarm join \
    --token yourtoken \
    YOUR_PUBLIC_IP:2377
# Now follow the individual instructions in the services' repositories (look for "Deployment to swarm")!
# It makes sense to install the `opensdcp-swarm-manager` first and then deploy the services as stacks
# using it's GUI (which is especially helpful for settings the environment variables)
```

### Kubernetes

> This is still WIP and does not work for all services yet, so we do not recommend using it right now.

#### Single Machine (Minishift)

> TODO: Add Minishift installation

#### DIY Cloud (Kubeadm)

> TODO: Add Kubeadm installation

#### Cloud Providers (Kops)

##### Create Cluster

```bash
# Install kops
cd /tmp
wget -O kops https://github.com/kubernetes/kops/releases/download/$(curl -s https://api.github.com/repos/kubernetes/kops/releases/latest | grep tag_name | cut -d '"' -f 4)/kops-linux-amd64
chmod +x ./kops
sudo mv ./kops /usr/local/bin/

# Install kubectl
wget -O kubectl https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

# Setup a DigitalOcean account, access token, space with api keys and domain now and then continue here

# Add your DigitalOcean space info
export KOPS_STATE_STORE=do://<space-name> # i.e. opensdcp-space1
export S3_ENDPOINT=<space-endpoint> # ie. nyc3.digitaloceanspaces.com
export S3_ACCESS_KEY_ID=<space-key> # i.e. NKIRASDF(...)
export S3_SECRET_ACCESS_KEY=<space-secret-key> # i.e. 2B85VG(...)

# Add your DigitalOcean access token
export DIGITALOCEAN_ACCESS_TOKEN=<access-token> # i.e. 4bds5dh7(...)

# Enable kops' alpha features (to enable DigitalOcean)
export KOPS_FEATURE_FLAGS="AlphaAllowDO"

# Configure the cluster
kops create cluster --cloud=digitalocean --name=opensdcp-cluster1.opensdcp.org --networking=flannel --zones=nyc3 --ssh-public-key=~/.ssh/id_rsa.pub
# Take a look at the console output. It shows you how to configure the cluster further.
# Create the cluster
kops update cluster opensdcp-cluster1.opensdcp.org --yes
# Now wait a little bit (~10 minutes), this can take some time. You can check whether it is done by typing either:
kops validate cluster
# Or:
kubectl get nodes
```

##### Configure Cluster

```bash
# Install the Kubernetes dashboard
# Create a service account
kubectl create -f clusterrolebindings/kubernetes-dashboard.yml
kubectl create -f serviceaccounts/kubernetes-dashboard.yml
# Deploy the dashboard
kubectl create -f https://raw.githubusercontent.com/kubernetes/kops/master/addons/kubernetes-dashboard/v1.8.1.yaml
# Get the dashboard access token
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk '{print $1}')
# Create secure channel to the Kubernetes dashboard
kubectl proxy
# Now open `127.0.0.1:8001/ui` and sign in with the token from above!

# Install Heapster (Monitoring)
kubectl create -f https://raw.githubusercontent.com/kubernetes/kops/master/addons/monitoring-standalone/v1.7.0.yaml

# # WIP (not working correctly yet) Install Prometheus (monitoring)
# git clone -b master https://github.com/coreos/prometheus-operator.git
# cd prometheus-operator/contrib/kube-prometheus
# kubectl apply -f manifests/
# # Create secure channel to grafana dashboard
# kubectl proxy
# # Now open `http://localhost:8001/api/v1/proxy/namespaces/monitoring/services/grafana:http` and sign in with
# # `admin` as both the username and password
```

##### Delete Cluster

```bash
kops delete cluster opensdcp-cluster1.opensdcp.org --yes
```

## Screenshots

> TODO: Add screenshots

## Documentation

> TODO: Add docs

## Deployment

> TODO: Add deployment

## License

OpenSDCP Infrastructure (C) 2018 Felix Pojtinger

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
