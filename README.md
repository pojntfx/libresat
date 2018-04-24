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
| opensdcp-identity | Single sign-on server for all services (OAuth)                                                 |
| opensdcp-status   | Status page that shows each service's status info                                              |

### Our setup

We test our services in our local docker swarm (see [Usage](#usage)) and then deploy them to our public production swarm.
Our domains are from [Gandi](https://www.gandi.net/) and our docker swarm nodes run on [OVH](https://www.ovh.com) VPSs.

## Demo

Visit [opensdcp.org](https://opensdcp.org/) and take a look all our instances.

## Usage

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
docker swarm init --advertise-addr youripaddress
# Join the swarm (use your token and ip address from the command above) (run this on all nodes you want to use)
docker swarm join \
    --token yourtoken \
    youripaddress:2377
# Now follow the individual instructions in the services' repositories (look for "Deployment to swarm")!
# It makes sense to install the `opensdcp-swarm-manager` first and then deploy the services as stacks
# using it's GUI (which is especially helpful for settings the environment variables)
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
