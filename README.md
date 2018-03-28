# OpenSDCP Wiki

MediaWiki instance for the OpenSDCP project.

## Demo

> TODO: Add demo

## Usage

First, create a `.env` file in this directory with the following content. Change `YOUR_PASSWORD_HERE`, `YOUR_SECOND_PASSWORD_HERE` and `YOUR_USERNAME_HERE` to credentials of your liking:

```bash
MYSQL_DATABASE_NAME=opensdcp_mediawiki
MYSQL_USERNAME=YOUR_USERNAME_HERE
MYSQL_PASSWORD=YOUR_PASSWORD_HERE
MYSQL_ROOT_PASSWORD=YOUR_SECOND_PASSWORD_HERE
```

Then, install dependencies and run the instance:

```bash
# Install dependencies using apt (Ubuntu and Debian)
npm run apt-install
# Build and serve development version on http://localhost:3000/
npm start
```

Now open up your browser at `http://localhost:3000/` and continue with the installation by clicking on "set up the wiki".

First, select your language. Click "continue" until you're at "Connect to database".

Enter the following:

* `db:3306` as the database host
* `opensdcp_mediawiki` as the database name
* `YOUR_USERNAME_HERE` as the database username
* `YOUR_PASSWORD_HERE` as the database password

Use the defaults for the rest. Click continue and select

* `UTF-8` as the database character set

Use the defaults for the rest. Click continue and enter the following (adjusting the credentials, of course):

* `My OpenSDCP MediaWiki` (or what ever you want to use) as the name of the wiki
* `ANOTHER_USERNAME_HERE` as the administrator account
* `ANOTHER_PASSWORD_HERE` as the administator password
* `YOUR_EMAIL` as the email address

Use the defaults for the rest. Either select "I'm bored already, just install the wiki." and click continue or tweak more options. MediaWiki is now generating the configuration file.

Your browser should have downloaded a "LocalSettings.php" file. Copy this file into the same directory as the `.env` file.

Restart the server now by hitting `CTRL-C` in the terminal from before. Now read the configuration file:

```bash
npm run inject-config-file
```

and restart the server by running `npm start` again. The wiki should now be accessible at `localhost:3000`!

After it has completed, login with the admin account or register. All the data will be saved in `mediawiki/` and `mariadb/` in case you want to create backups.

## Screenshots

> TODO: Add screenshots

## Documentation

> TODO: Add docs

## Deployment

> TODO: Add deployment

## License

OpenSDCP WikiMedia Instance (C) 2018 Felix Pojtinger

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
