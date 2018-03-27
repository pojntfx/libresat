# OpenSNET Bridge Client Web

This fast and minimal copyleft program enables you to manage a satellite with a graphical user interface. If used together with an [OpenSNET Bridge Server](https://opensdcp.github.io/network/bridge/server) it forms an access point ("[OpenSNET Bridge](https://opensdcp.github.io/network/bridge/)") to the [Open Satellite Network (OpenSNET)](https://opensdcp.github.io/network).

## Usage

First [download](https://github.com/opensdcp/opensnet-bridge-client/releases) or [clone](https://help.github.com/articles/cloning-a-repository/) this program. Then, run the following commands in your terminal to install and start it:

```bash
# Install dependencies
npm install
# Build and serve development version on http://localhost:3000/
npm run dev
```

> If you want to use this program in production, see [Deployment](#deployment).

## Screenshots

> TODO: Add screenshots

## Documentation

You may either view the docs by running the commands below or by visiting [the OpenSDCP documentation](https://opensdcp.github.io/network/docs).

```bash
# Generate and serve jsdoc documentation on http://localhost:3001/
npm run docs
# Generate and serve annnotated source documentation on http://localhost:3002/
npm run annotated-source
```

## Deployment

```bash
# Build a production ready version in the build/ folder
npm run build
# Serve production ready version on http://localhost:5000/
npm run start
# If you want to share it with the world, deploy to Zeit Now
npm run deploy
```

## License

OpenSNET Bridge Client Copyright (C) 2018 Felix Pojtinger

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
