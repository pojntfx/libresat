# OpenSDCP Wiki

MediaWiki service configuration for the OpenSDCP project.

> Consider reading the [infrastructure overview](https://github.com/opensdcp/opensdcp-infrastructure#overview) before continuing.

## Demo

Visit [wiki.opensdcp.org](https://wiki.opensdcp.org/) and take a look at our instance.

## Usage

### Preparation

```bash
# Install dependencies (Ubuntu and Debian)
sudo apt install docker.io docker-compose
# Set password and username of the database (change 4000 to 4100 when using the development instance)
echo \
"MYSQL_ROOT_PASSWORD=YOUR_PASSWORD_HERE
WIKI_URL=//YOUR_IP:4000
WIKI_NAME=YOUR_WIKI_NAME_HERE
WIKI_ADMIN_USER=YOUR_NAME_HERE
WIKI_ADMIN_PASSWORD=YOUR_PASSWORD_HERE
WIKI_DB_USER=ANOTHER_NAME_HERE
WIKI_DB_USER_PASSWORD=ANOTHER_PASSWORD_HERE
RENDERER_ACCESS_KEY=A_SECURE_TOKEN_HERE"\
>> .env
# Read in the env variables
source .env
```

### Startup

```bash
# Serve development version on http://YOUR_IP:4100
docker-compose -f opensdcp-wiki-dev.yml up --build
# ALTERNATIVE: Serve production version on http://YOUR_IP:4000
# If you want to see your changes from the dev version reflected here, build a new image of the "web" container and
# use it in `opensdcp-wiki-prod.yml` instead of `pojntfx/opensdcp-wiki-web:latest`
docker-compose -f opensdcp-wiki-prod.yml up
```

### Setup

Wait until the web service is online (this may take some time), visit `http://YOUR_IP:YOUR_PORT_FROM_ABOVE` and sign in with the data from above to test whether everything works!

> If you chose the development version, all the data will be saved in `./opensdcp-wiki-web-data/`, `./opensdcp-wiki-web-images-data/`, `./opensdcp-wiki-db-data/`, `./opensdcp-wiki-restbase-data/` and `./opensdcp-wiki-elasticsearch-data/` in case you want to create backups. If you used the production version, it will be saved in the `opensdcp-wiki-web-data`, `opensdcp-wiki-web-images-data`, `opensdcp-wiki-db-data`, `opensdcp-wiki-restbase-data` and `opensdcp-wiki-elasticsearch-data` docker volumes.

## Screenshots

![Main page in MediaWiki instance](screenshots/mainpage.png)

## Documentation

Visit the [official MediaWiki wiki](https://www.mediawiki.org/wiki/MediaWiki) to learn more about MediaWiki.

## Deployment

### Kubernetes

> This is not working currently. Please help us debug and fix it!

```bash
# Set env variables
kubectl create configmap opensdcp-wiki-config \
--from-literal=db_root_password=YOUR_PASSWORD_HERE \
--from-literal=wiki_url=//YOUR_IP:4000 \
--from-literal=wiki_name=YOUR_WIKI_NAME_HERE \
--from-literal=wiki_admin_user=YOUR_NAME_HERE \
--from-literal=wiki_admin_password=YOUR_PASSWORD_HERE \
--from-literal=wiki_db_user=ANOTHER_NAME_HERE \
--from-literal=wiki_db_user_password=ANOTHER_PASSWORD_HERE \
--from-literal=renderer_access_key=A_SECURE_TOKEN_HERE

# Create the db's persistent volume
kubectl create -f persistentvolumes/db.yml
# Create the db's persistent volume claim
kubectl create -f persistentvolumeclaims/db.yml
# Create the db's deployment
kubectl create -f deployments/db.yml
# Create the db's service
kubectl create -f services/db.yml

# Create the elasticsearch's persistent volume
kubectl create -f persistentvolumes/elasticsearch.yml
# Create the elasticsearch's persistent volume claim
kubectl create -f persistentvolumeclaims/elasticsearch.yml
# Create the elasticsearch's deployment
kubectl create -f deployments/elasticsearch.yml
# Create the elasticsearch's service
kubectl create -f services/elasticsearch.yml

# Create the memcached's deployment
kubectl create -f deployments/memcached.yml
# Create the memcached's service
kubectl create -f services/memcached.yml

# Create the parsoid's deployment
kubectl create -f deployments/parsoid.yml
# Create the parsoid's service
kubectl create -f services/parsoid.yml

# Create the pdf renderer's deployment
kubectl create -f deployments/pdf.yml
# Create the pdf renderer's service
kubectl create -f services/pdf.yml

# Create the restbase's persistent volume
kubectl create -f persistentvolumes/restbase.yml
# Create the restbase's persistent volume claim
kubectl create -f persistentvolumeclaims/restbase.yml
# Create the restbase's deployment
kubectl create -f deployments/restbase.yml
# Create the restbase's service
kubectl create -f services/restbase.yml

# Create the web server's persistent volumes
kubectl create -f persistentvolumes/web.yml
kubectl create -f persistentvolumes/web-images.yml
# Create the web server's persistent volume claim
kubectl create -f persistentvolumeclaims/web.yml
kubectl create -f persistentvolumeclaims/web-images.yml
# Create the web server's deployment
kubectl create -f deployments/web.yml
# Create the web server's service
kubectl create -f services/web.yml

# Create the proxy's deployment
kubectl create -f deployments/proxy.yml
# Create the proxy renderer's service
kubectl create -f services/proxy.yml

# Now open up the web server's endpoint and test it!
# This can take a LONG time. There will be no logs in the web container at first, especially
# when using Minikube; just wait.
```

### Docker Swarm

> Use the Portainer GUI (opensdcp-swarm-manager) to set the env variables by creating the stack there or hard-code them into the opensdcp-wiki-prod.yml file. They are NOT being read in by docker stack deploy, which will result in various errors upon setup because the web server container can't connect to the database.

```bash
# Deploy production version to your docker swarm on http://YOUR_IP:4000
# If you want to see your changes from the dev version reflected here, build a new image of the "web" container and
# use it in `opensdcp-wiki-prod.yml` instead of `pojntfx/opensdcp-wiki-web:latest`
docker stack deploy -c opensdcp-wiki-prod.yml opensdcp-git
```

## License

OpenSDCP MediaWiki Service Configuration (C) 2018 Felix Pojtinger

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
