# OpenSDCP Website

Main website for all the OpenSDCP projects.

## Demo

Try out an [up-to-date instance](https://opensdcp.now.sh/) hosted on Zeit Now.

## Usage

```bash
# Install dependencies
npm install
# Build and serve development version on http://localhost:3000/
npm run dev
# Build and serve development version on http://localhost:3000 using docker-compose
npm run dev-docker
```

## Screenshots

![Mockup of the landing page](/screenshots/landing-page.png)

## Documentation

> TODO: Add docs

## Deployment

```bash
# Build a production ready version in the build/ folder
npm run build
# Serve production ready version on http://localhost:5000/
npm run start
# Build and serve production ready version on https://localhost using docker-compose
npm run start-docker
# If you want to share it with the world, deploy to Zeit Now
npm run deploy
# Deploy a demo instance on https://opensdcp.now.sh (if alias is not already taken)
npm run deploy-demo
# Deploy an instance on your docker swarm
npm run deploy-docker
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
