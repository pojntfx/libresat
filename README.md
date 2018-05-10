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

### Kubernetes/OpenShift

> This is still WIP and does not work for all services yet, so we do not recommend using it right now.

```bash
# Install admin-user addon
minishift addons install --defaults
minishift addons enable admin-user
# Start minishift cluster
minishift start
# Now open up the URL that you see in the console and login with
# username: "admin"
# password: "developer"
# Login
oc login -u system:admin -n default
# Create your first project
oc new-project opensdcp-forum
# Get root privileges on the project
oc adm policy add-scc-to-user anyuid -z default -n opensdcp-forum
# Now deploy your first project! We recommend deploying `opensdcp-forum` first.
# After you've deployed your first project, expose the `opensdcp-forum-web` service
# by clicking on "Create Route" in the web console and then "Create"!
```

## Screenshots

> TODO: Add screenshots

## Documentation

> TODO: Add docs

## Deployment

> TODO: Add deployment

## License

OpenSDCP Infrastructure (C) 2018 Felicitas Pojtinger

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
