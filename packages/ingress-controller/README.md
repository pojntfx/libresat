# LibreSat Ingress Controller

The [LibreSat](https://libresat.space/) distribution of [Traefik](https://traefik.io/).

[![Demo Site](https://img.shields.io/badge/Demo%20Site-traefik--ui.libresat.space-blue.svg)](https://traefik-ui.libresat.space)
[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://libresat.space)

## Usage

```bash
# Deploy to Kubernetes
$ helm install --values src/chart/values.yaml --namespace kube-system src/chart
```
