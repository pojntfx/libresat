# LibreSat Site

![Home Page Banner](screenshots/banner.png)

The [LibreSat](https://libresat.space/) website.

[![Demo Site](https://img.shields.io/badge/Demo%20Site-libresat.space-blue.svg)](https://libresat.space)
[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://libresat.space)

## Usage

See [global README](../../README.md).

## Deployment

Edit [src/chart/values.yaml](src/chart/values.yaml) according to your needs.

```bash
# Build image
docker build . -t pojntfx/libresat-site
# Deploy to Kubernetes
helm install --values src/chart/values.yaml --namespace site src/chart
```

## Screenshots

![Home Page](screenshots/home.png)

![Blog](screenshots/blog.png)

![Search](screenshots/search.png)

![License Modal](screenshots/license-modal.png)
