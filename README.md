# OpenSDCP Website

Main website for all the OpenSDCP projects.

> Consider reading the [infrastructure overview](https://github.com/opensdcp/opensdcp-infrastructure#overview) before continuing.

## Demo

Try out an [up-to-date instance](https://opensdcp.now.sh/) hosted on Zeit Now.

## Usage

### Preparation

```bash
# Install dependencies
npm install
# ALTERNATIVE: If you want to use docker (Ubuntu and Debian):
sudo apt install docker.io docker-compose
```

### Startup

```bash
# Build and serve development version on http://YOUR_IP:3000/
npm run dev
# Build a production ready version in the build/ folder
npm run build
# Serve production ready version on http://YOUR_IP:5000/
npm run start
# ALTERNATIVE: If you want to use docker, serve development version on http://YOUR_IP:8100
docker-compose -f opensdcp-website-dev.yml up
# ALTERNATIVE: If you want to use docker, serve production version on http://YOUR_IP:80
docker-compose -f opensdcp-website-prod.yml up
```

## Screenshots

![Mockup of the landing page](/screenshots/landing-page.png)

## Documentation

> TODO: Add docs

## Deployment

### Kubernetes

```bash
# Create the web server's deployment
kubectl create -f deployments/web.yml
# Create the web server's service
kubectl create -f services/web.yml
```

### Docker Swarm

```bash
# Deploy production version to your docker swarm on http://YOUR_IP:80
# If you want to see your changes from the dev version reflected here, build a new image of the "web" container and
# use it in `opensdcp-website-prod.yml` instead of `pojntfx/opensdcp-website:latest`
docker stack deploy -c opensdcp-website-prod.yml opensdcp-website
```

### Zeit Now

```bash
# If you want to quickly share it with the world, deploy to Zeit Now
npm run deploy
# Deploy a demo instance on https://opensdcp.now.sh (if alias is not already taken)
npm run deploy-demo
```

## License

OpenSDCP Website Copyright (C) 2018 Felix Pojtinger

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
