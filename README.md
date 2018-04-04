# OpenSDCP Git

Gitea instance for the OpenSDCP project.

## Demo

> TODO: Add demo

## Usage

First, create a `.env` file in this directory with the following content. Change `YOUR_PASSWORD_HERE` and `YOUR_USERNAME_HERE` to credentials of your liking:

```bash
POSTGRES_USER=YOUR_USERNAME_HERE
POSTGRES_PASSWORD=YOUR_PASSWORD_HERE
```

Then, install dependencies and run the instance:

```bash
# Install dependencies using apt (Ubuntu and Debian)
npm run apt-install
# Build and serve development version on http://localhost:3000/
npm start
```

Now open up your browser at `http://localhost:3000/` and continue with the installation. Select the following:

* `PostgreSQL` as the database type
* `database:5432` as the database host
* `YOUR_USERNAME_HERE` as the database user
* `YOUR_PASSWORD_HERE` as the database password
* `My OpenSDCP Gitea` as the application name (use whatever you want here)

Use the defaults for the rest. You may set your domain later using

```bash
npm run set-domain YOUR_DOMAIN_OR_IP
```

if you want to deploy.

Now check the terminal output, look for whether the PostgreSQL database server has started up (it might take some time) and start the installation!

After it has completed, register. The first user will be the admin. All the data will be saved in `gitea/` and `postgres/` in case you want to create backups.

## Screenshots

> TODO: Add screenshots

## Documentation

> TODO: Add docs

## Deployment

> TODO: Add deployment

## License

OpenSDCP Gitea Instance (C) 2018 Felicitas Pojtinger

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
