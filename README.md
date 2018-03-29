# OpenSDCP Forum

Discourse instance for the OpenSDCP project.

## Demo

> TODO: Add demo

## Usage

First, create a `.env` file in this directory with the following content (or, if your hosting provider supports it, set them in your web console). Change usernames, passwords etc. to credentials of your liking:

```bash
# Database setup
POSTGRES_PW=opensdcp_forum_postgres_password
REDIS_PW=opensdcp_forum_redis_password
# Discourse admin credentials
DISCOURSE_USERNAME=opensdcp_forum_admin_username
DISCOURSE_PASSWORD=opensdcp_forum_admin_password
DISCOURSE_EMAIL=admin@opensdcp.org
# Discourse preferences
DISCOURSE_SITENAME=OpenSDCP
# Discourse email (notifications etc.)
SMTP_HOST=smtp.opensdcp.org
SMTP_PORT=587
SMTP_USERNAME=forum@opensdcp.org
SMTP_PASSWORD=opensdcp_forum_smtp_password
```

Now, source the environment variables:

```bash
source .env
```

After that, start the server (make sure you have the `docker.io` and `docker-compose` packages installed):

```bash
docker-compose up
```

This may take quite some time, especially when connecting to the Postgresql server. When it has been finished, open up `localhost:3000` and continue the setup there! If you need OpenSDCP branding etc., be sure to check out the [OpenSDCP design repository](https://github.com/opensdcp/opensdcp-design).

All the data will be saved in `discourse/`, `postgresql/`, `redis` and `sidekiq` in case you want to create backups. If your hosting provider supports it, those will be `persistentVolumeClaims` that you can download.

## Screenshots

> TODO: Add screenshots

## Documentation

> TODO: Add docs

## Deployment

> TODO: Add deployment

## License

OpenSDCP Discourse Instance (C) 2018 Felix Pojtinger

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
