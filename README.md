# Gitit Docker

A Docker container with Gitit, a Haskell-based wiki that uses Git as it's VCS. Also includes an SSH server so that you can clone the Git repo locally.

## Demo

> TODO: Add demo

## Usage

First, copy your public SSH key into `./assets/id_rsa.pub`. On UNIX-like systems (GNU/Linux or macOS), just run the following to do so:

```bash
# Read the public SSH key and overwrite the contents of assets/id_rsa.pub with it
echo $(<~/.ssh/id_rsa.pub) > assets/id_rsa.pub
```

Then, continue with the normal build process:

```bash
# Install dependencies
npm install
# Compile CSS and JS
npm run build-semantic
# Build the container
docker build . -t gitit-with-ssh
# Run the container
docker run -d -p 5001:5001 -p 22:22 gitit-with-ssh
# Test if the container works
curl localhost:5001
git clone ssh://git@localhost:/gitit/wikidata
```

## Screenshots

> TODO: Add screenshots

## Documentation

> TODO: Add docs

## Deployment

> TODO: Add deployment

## License

Gitit Docker
Copyright (C) 2018 Felicitas Pojtinger

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
