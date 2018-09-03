# LibreSat Backups

The [LibreSat](https://libresat.space/) distribution of [Stash](https://github.com/appscode/stash).

[![Code License AGPL-3.0](https://img.shields.io/badge/Code%20License-AGPL--3.0-brightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/Media%20License-CC--BY--SA--4.0-brightgreen.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://gitlab.com/libresat/libresat)
[![Infrastructure Overview](https://img.shields.io/badge/Support-Infrastructure%20Overview-blue.svg)](https://libresat.space/docs/infrastructure)

## Usage

```bash
# Install onessl
$ curl -fsSL -o onessl https://github.com/kubepack/onessl/releases/download/0.3.0/onessl-linux-amd64 \
  && chmod +x onessl \
  && sudo mv onessl /usr/local/bin/
[sudo] password for pojntfx: (...)

# Deploy to Kubernetes
$ helm install \
  --values src/chart/values.yaml \
  --set stash.apiserver.ca="$(onessl get kube-ca)" \
  --namespace backups \
  src/chart
(...)
To delete looming-snake, run:

  $ helm delete looming-snake
  $ kubectl -n backups delete validatingwebhookconfiguration -l app=stash || true
  $ kubectl -n backups delete mutatingwebhookconfiguration -l app=stash || true
  $ kubectl -n backups delete apiservice -l app=stash

For more, check out libresat-backups's documentation: https://libresat.space/docs/services/backups.html
```
