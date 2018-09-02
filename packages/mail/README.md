# LibreSat Mail

The [LibreSat](https://libresat.space/) distribution of [Rainloop](https://www.rainloop.net/).

![Home Page Banner](screenshots/banner.png)

[![Demo Site](https://img.shields.io/badge/demo%20site-webmail.libresat.space-blue.svg)](https://webmail.libresat.space)
[![Code License AGPL-3.0](https://img.shields.io/badge/code%20license-AGPL--3.0-blue.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/media%20license-CC--BY--SA--4.0-blue.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Part of LibreSat](https://img.shields.io/badge/part%20of-libresat-blue.svg)](https://gitlab.com/libresat/libresat)
[![Infrastructure Overview](https://img.shields.io/badge/support-infrastructure%20overview-blue.svg)](https://libresat.space/docs/infrastructure)

## Deployment

Edit [src/chart/values.yaml](src/chart/values.yaml) according to your needs.

```bash
# Deploy to Kubernetes
helm install --values src/chart/values.yaml src/chart
```

## Screenshots

![Login](screenshots/login.png)

![Dashboard](screenshots/dashboard.png)

![Composer](screenshots/composer.png)

![Settings](screenshots/settings.png)

![Mobile Dashboard](screenshots/dashboard-mobile.png)
