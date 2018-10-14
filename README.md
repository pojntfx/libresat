# LibreSat

![LibreSat Logo](https://gitlab.com/libresat/design/raw/master/packages/logos/logo--no-padding--no-lines.png)

The Free/Libre and Open Source Satellite Development and Control Platform, since 2014.

## Usage

[![Website](https://img.shields.io/badge/Website-libresat.space-black.svg)](https://libresat.space)
[![Demo Site](https://img.shields.io/badge/Demo-demo.libresat.space-black.svg)](https://demo.libresat.space)
[![Built for GNU/Linux](https://img.shields.io/badge/built%20for-GNU/Linux%20and%20BSD-D2AA30.svg?logo=linux)](https://getfedora.org/)

```bash
# Install dependencies
npm install
```

```bash
# Start development versions of all packages
npm run dev
# Start development versions of and debugger for all packages (connect by pressing F5 in VSCode)
npm run dev:debug
```

```bash
# Start development version of inidividual package
npm run dev -- --scope @libresat/identity-frontend
# Start development version of and debugger for individual package (connect by pressing F5 in VSCode)
npm run dev:debug -- --scope @libresat/identity-frontend
```

## Deployment

[![Built for GNU/Linux](https://img.shields.io/badge/built%20for-GNU/Linux%20and%20BSD-D2AA30.svg?logo=linux)](https://getfedora.org/)
[![Built for Docker](https://img.shields.io/badge/built%20for-Docker-34A0EF.svg?logo=docker)](https://www.docker.com/)
[![Built for Kubernetes](https://img.shields.io/badge/built%20for-Kubernetes-326DE6.svg?logo=cloud)](https://kubernetes.io/)

```bash
# Build production versions of all packages
npm run build
# Start production versions of all packages
npm run start
```

```bash
# Build production version of inidividual package
npm run build -- --scope @libresat/identity-frontend
# Start production version of inidividual package
npm run start -- --scope @libresat/identity-frontend
```

```bash
# Publish all packages to npm
npm run publish
```

## Contributing

[![GitLab](https://img.shields.io/badge/GitLab-%40libresat-fc6d26.svg?logo=gitlab)](https://gitlab.com/libresat)
[![GitHub](https://img.shields.io/badge/GitHub-%40libresat-181717.svg?logo=github&logoColor=ffffff)](https://github.com/libresat)
[![NPM](https://img.shields.io/badge/npm-%7elibresat-CB3837.svg?logo=npm)](https://www.npmjs.com/~libresat)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

We develop in a [Lerna](https://lernajs.io/) monorepo using [Commitizen](http://commitizen.github.io/cz-cli/).

```bash
# Don't do this!
git add . && git commit -m "Added new features"
# Instead, commit using Commitizen
npm run commit
```

## Community

[![Wiki](https://img.shields.io/badge/Wiki-wiki.libresat.space-black.svg)](https://wiki.libresat.space)
[![Forum](https://img.shields.io/badge/Forum-forum.libresat.space-black.svg)](https://forum.libresat.space/forum)
[![Chat](https://img.shields.io/badge/Chat-chat.libresat.space-black.svg)](https://chat.libresat.space)

This is a Free/Libre and Open Source Software project. Be part the community!

[![Mastodon](https://img.shields.io/badge/Mastodon-%40libresat-3088D4.svg?logo=mastodon&style=social)](https://mastodon.cloud/@libresat)
[![Twitter](https://img.shields.io/badge/Twitter-%40libresat-1DA1F2.svg?logo=twitter&style=social)](https://twitter.com/@libresat)
[![Reddit](https://img.shields.io/badge/reddit-r%2Flibresat-FF4500.svg?logo=reddit&style=social)](https://www.reddit.com/r/libresat/)
[![Instagram](https://img.shields.io/badge/Instagram-%40libresat-E4405F.svg?logo=instagram&style=social)](https://www.instagram.com/libresat/)

## Screenshots

<!-- TODO: Update screenshots -->

![Site](packages/site/screenshots/home.png)

![Wiki](packages/wiki/screenshots/home.png)

## Licenses

[![Code License AGPL-3.0](https://img.shields.io/badge/Code%20License-AGPL--3.0-brightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/Media%20License-CC--BY--SA--4.0-brightgreen.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

These licenses do, if not otherwise specified, apply to all packages in this repository.

### Code

[![AGPL-3.0 License](https://www.gnu.org/graphics/agplv3-155x51.png)](https://www.gnu.org/licenses/agpl.html)

LibreSat
Copyright (C) 2018 Felix Pojtinger

SPDX-License-Identifier: AGPL-3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU/Linux Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU/Linux Affero General Public License for more details.

You should have received a copy of the GNU/Linux Affero General Public License along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).

### Media

[![CC-BY-SA-4.0 License](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

Media of LibreSat
Copyright (C) 2018 Felix Pojtinger

SPDX-License-Identifier: CC-BY-SA-4.0

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
