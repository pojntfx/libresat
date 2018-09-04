# LibreSat Ingress Controller

The [LibreSat](https://libresat.space/) distribution of [Traefik](https://traefik.io/).

[![Demo Site](https://img.shields.io/badge/Demo%20Site-traefik--ui.libresat.space-blue.svg)](https://traefik-ui.libresat.space)
[![Code License AGPL-3.0](https://img.shields.io/badge/Code%20License-AGPL--3.0-brightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/Media%20License-CC--BY--SA--4.0-brightgreen.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://gitlab.com/libresat/libresat)
[![Infrastructure Overview](https://img.shields.io/badge/Support-Infrastructure%20Overview-blue.svg)](https://libresat.space/docs/infrastructure)

## Usage

```bash
# Deploy to Kubernetes
$ helm install --values src/chart/values.yaml --namespace kube-system src/chart
```
