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

> Use the Portainer GUI (opensdcp-swarm-manager) to set the env variables by creating the stack there or hard-code them into the opensdcp-wiki-prod.yml file. They are NOT being read in by docker stack deploy, which will result in various errors upon setup because the web server container can't connect to the database.

```bash
# Deploy production version to your docker swarm on http://YOUR_IP:4000
# If you want to see your changes from the dev version reflected here, build a new image of the "web" container and
# use it in `opensdcp-wiki-prod.yml` instead of `pojntfx/opensdcp-wiki-web:latest`
docker stack deploy -c opensdcp-wiki-prod.yml opensdcp-git
```

## License

OpenSDCP MediaWiki Service Configuration (C) 2018 Felicitas Pojtinger

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
