# LibreSat Site

The [LibreSat](https://libresat.space/) website.

![Home Page Banner](screenshots/banner.png)

[![Demo Site](https://img.shields.io/badge/Demo%20Site-libresat.space-blue.svg)](https://libresat.space)
[![Code License AGPL-3.0](https://img.shields.io/badge/Code%20License-AGPL--3.0-brightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/Media%20License-CC--BY--SA--4.0-brightgreen.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://gitlab.com/libresat/libresat)
[![Infrastructure Overview](https://img.shields.io/badge/Support-Infrastructure%20Overview-blue.svg)](https://libresat.space/docs/infrastructure)

## Usage

```bash
# Install dependencies
npm install
# Build and serve development version on http://localhost:8000
npm run dev
# Build and serve production version on http://localhost:9000
npm run build
npm start
```

## Deployment

Edit [src/chart/values.yaml](src/chart/values.yaml) according to your needs.

```bash
# Build image
docker build . -t pojntfx/libresat-site
# Deploy to Kubernetes
helm install --values src/chart/values.yaml src/chart
```

## Screenshots

![Home Page](screenshots/home.png)

![Blog](screenshots/blog.png)

![Search](screenshots/search.png)

![License Modal](screenshots/license-modal.png)
