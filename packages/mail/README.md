# LibreSat Mail

![Home Page Banner](screenshots/banner.png)

The [LibreSat](https://libresat.space/) distribution of [Rainloop](https://www.rainloop.net/).

[![Demo Site](https://img.shields.io/badge/Demo%20Site-webmail.libresat.space-blue.svg)](https://webmail.libresat.space)
[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://libresat.space)

## Deployment

Edit [src/chart/values.yaml](src/chart/values.yaml) according to your needs.

```bash
# Deploy to Kubernetes
helm install --values src/chart/values.yaml --namespace forum src/chart
```

## Screenshots

![Login](screenshots/login.png)

![Dashboard](screenshots/dashboard.png)

![Composer](screenshots/composer.png)

![Settings](screenshots/settings.png)

![Mobile Dashboard](screenshots/dashboard-mobile.png)
