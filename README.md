# LibreSat

The Free/Libre and Open Source Satellite Development and Control Platform, since 2014.

[![Website](https://img.shields.io/badge/Website-libresat.space-blue.svg)](https://libresat.space)
[![Demo Site](https://img.shields.io/badge/Demo-demo.libresat.space-blue.svg)](https://demo.libresat.space)
[![Wiki](https://img.shields.io/badge/Wiki-wiki.libresat.space-blue.svg)](https://wiki.libresat.space)
[![Forum](https://img.shields.io/badge/Forum-forum.libresat.space-blue.svg)](https://forum.libresat.space/forum)
[![Chat](https://img.shields.io/badge/Chat-chat.libresat.space-blue.svg)](https://chat.libresat.space)

![LibreSat Logo](https://gitlab.com/libresat/design/raw/master/packages/logos/logo--no-padding.png)

[![Mastodon](https://img.shields.io/badge/Mastodon-%40libresat-3088D4.svg?logo=mastodon&style=social)](https://mastodon.cloud/@libresat)
[![Twitter](https://img.shields.io/badge/Twitter-%40libresat-1DA1F2.svg?logo=twitter&style=social)](https://twitter.com/libresat)
[![Reddit](https://img.shields.io/badge/reddit-r%2Flibresat-FF4500.svg?logo=reddit&style=social)](https://www.reddit.com/r/libresat/)
[![Instagram](https://img.shields.io/badge/Instagram-%40libresat-E4405F.svg?logo=instagram&style=social)](https://www.instagram.com/libresat/)

[![GitLab](https://img.shields.io/badge/GitLab-%40libresat-fc6d26.svg?logo=gitlab)](https://gitlab.com/libresat)
[![GitHub](https://img.shields.io/badge/GitHub-%40libresat-181717.svg?logo=github&logoColor=ffffff)](https://github.com/libresat)
[![NPM](https://img.shields.io/badge/npm-%7elibresat-CB3837.svg?logo=npm)](https://www.npmjs.com/~libresat)

[![Code License AGPL-3.0](https://img.shields.io/badge/Code%20License-AGPL--3.0-brightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/Media%20License-CC--BY--SA--4.0-brightgreen.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

---

## Usage

```bash
# Install dependencies
npm install
# Start development version of inidividual package
npm run dev -- --scope @libresat/identity-backend
# Start development version of and debugger for inidividual package
npm run dev:debug -- --scope @libresat/identity-backend
# Now, connect using the "Attach" configuration in the VSCode Debugger (press "F5")!
# Start development versions of all packages
npm run dev
```

## Deployment

```bash
# Build production version of inidividual package
npm run build -- --scope @libresat/identity-backend
# Build production versions of all packages
npm run build
# Start production version of inidividual package
npm run start -- --scope @libresat/identity-backend
# Start production versions of all packages
npm run start
# Publish packages to npm
npm run publish
```

## Screenshots

![Site](packages/site/screenshots/home.png)

![Wiki](packages/wiki/screenshots/home.png)

![Forum](packages/forum/screenshots/hyperkitty-overview.png)

![Mail](packages/mail/screenshots/dashboard.png)

## License

These licenses do, if not otherwise specified, apply to all packages in this repository.

### Code

[![AGPL-3.0 License](https://www.gnu.org/graphics/agplv3-155x51.png)](https://www.gnu.org/licenses/agpl.html)

LibreSat
Copyright (C) 2018 Felicitas Pojtinger

SPDX-License-Identifier: AGPL-3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).

### Media

[![CC-BY-4.0 License](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

Media of LibreSat
Copyright (C) 2018 Felicitas Pojtinger

SPDX-License-Identifier: CC-BY-SA-4.0

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
