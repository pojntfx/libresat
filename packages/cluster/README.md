# LibreSat Cluster

The [LibreSat](https://libresat.space/) distribution of [Kubernetes](https://kubernetes.io/).

[![Demo Site](https://img.shields.io/badge/Demo%20Site-traefik--ui.libresat.space-blue.svg)](https://traefik-ui.libresat.space)
[![Code License AGPL-3.0](https://img.shields.io/badge/Code%20License-AGPL--3.0-brightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/Media%20License-CC--BY--SA--4.0-brightgreen.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Part of LibreSat](https://img.shields.io/badge/Part%20Of-LibreSat-blue.svg)](https://gitlab.com/libresat/libresat)
[![Infrastructure Overview](https://img.shields.io/badge/Support-Infrastructure%20Overview-blue.svg)](https://libresat.space/docs/infrastructure)

## Dependencies

### DNS

| Type  | Hostname | Value           |
| ----- | -------- | --------------- |
| A     | @        | 206.189.226.226 |
| CNAME | \*       | libresat.space. |

Or, if you only want to use subdomains suffixed with `stg1.libresat.space` (i.e. to prevent accidental Let's Encrypt rate limiting):

| Type  | Hostname | Value                |
| ----- | -------- | -------------------- |
| A     | stg1     | 206.189.226.226      |
| CNAME | \*.stg1  | stg1.libresat.space. |

### Node

| Propery    | Value           |
| ---------- | --------------- |
| Cores      | 1+              |
| RAM        | 2GB+            |
| Disk space | 10GB+           |
| IPv4       | 206.189.226.226 |

## Usage

### Get Data

| Name                   | Example                     |
| ---------------------- | --------------------------- |
| IPv4                   | 206.189.226.226             |
| DigitalOcean API Token | 9aa81                       |
| Gandi V5 Token         | 24jksdf83                   |
| S3 Access Key ID       | asdfw43                     |
| S3 Secret Access Key   | sdf9234ij3                  |
| S3 Endpoint            | nyc3.digitaloceanspaces.com |
| S3 Bucket              | libresat-cluster1           |

### Create Cluster

```bash
$ ssh root@206.189.226.226 "wget -q -O - https://gitlab.com/snippets/1741965/raw | bash"
(...)
LibreSat Platform Setup v.0.0.1-0 finished successfully.
Have a nice day!
```

### Setup Kubectl

```bash
# Get the kubeconfig file
$ scp root@206.189.226.226:/etc/kubernetes/admin.conf ${HOME}/.kube/config-206.189.226.226.conf
admin.conf  100% 5455    53.8KB/s   00:00

# Load it into the current bash instance
$ export KUBECONFIG=${HOME}/.kube/config-206.189.226.226.conf
```

### Setup Helm

```bash
# Setup RBAC
$ kubectl -n kube-system create serviceaccount tiller
serviceaccount "tiller" created

$ kubectl create clusterrolebinding tiller \
  --clusterrole cluster-admin \
  --serviceaccount=kube-system:tiller
clusterrolebinding.rbac.authorization.k8s.io "tiller" created

# Install Helm
$ helm init --service-account=tiller
(...)
Tiller (the Helm server-side component) has been installed into your Kubernetes Cluster.
(...)
```

### Enable Persistent Volumes

> You can use any block storage provider (i.e. Ceph) here.

```bash
# Install DigitalOcean's CSI
$ kubectl apply -f https://raw.githubusercontent.com/digitalocean/csi-digitalocean/master/deploy/kubernetes/releases/csi-digitalocean-v0.1.5.yaml
storageclass.storage.k8s.io "do-block-storage" created
serviceaccount "csi-attacher" created
clusterrole.rbac.authorization.k8s.io "external-attacher-runner" created
clusterrolebinding.rbac.authorization.k8s.io "csi-attacher-role" created
service "csi-attacher-doplugin" created
statefulset.apps "csi-attacher-doplugin" created
serviceaccount "csi-provisioner" created
clusterrole.rbac.authorization.k8s.io "external-provisioner-runner" created
clusterrolebinding.rbac.authorization.k8s.io "csi-provisioner-role" created
service "csi-provisioner-doplugin" created
statefulset.apps "csi-provisioner-doplugin" created
serviceaccount "csi-doplugin" created
clusterrole.rbac.authorization.k8s.io "csi-doplugin" created
clusterrolebinding.rbac.authorization.k8s.io "csi-doplugin" created
daemonset.apps "csi-doplugin" create

# Add the access token
$ kubectl apply -f src/storage.yaml
secret "digitalocean" created

# Check if it worked
$ kubectl --namespace=kube-system get pods -w
NAME                                      READY     STATUS    RESTARTS   AGE
csi-attacher-doplugin-0                   2/2       Running   0          1m
csi-doplugin-9dcb2                        2/2       Running   0          59s
csi-provisioner-doplugin-0                2/2       Running   0          1m
```

### Enable Backups

> You can use any object storage provider (i.e. Swift) here.

```bash
# Install onessl
$ curl -fsSL -o onessl https://github.com/kubepack/onessl/releases/download/0.3.0/onessl-linux-amd64 \
  && chmod +x onessl \
  && sudo mv onessl /usr/local/bin/
[sudo] password for pojntfx: (...)

# Create namespace for stash
$ kubectl apply -f src/backups-namespace.yaml
namespace "backups" created

# Add appscode repo for stash
$ helm repo add appscode https://charts.appscode.com/stable/
"appscode" has been added to your repositories

$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...Skip local chart repository
...Successfully got an update from the "appscode" chart repository
Update Complete. ⎈ Happy Helming!⎈

# Install stash
$ helm install appscode/stash --version 0.7.0 \
  --set apiserver.ca="$(onessl get kube-ca)" \
  --set apiserver.enableValidatingWebhook=true \
  --set apiserver.enableMutatingWebhook=true \
  --set rbac.create=true \
  --namespace backups
(...)
NOTES:
To verify that Stash has started, run:

  kubectl --namespace=backups get deployments -l "release=foiled-flee, app=stash"

# Create a test deployment and restic for it
$ kubectl apply -f src/backups.yaml
namespace "stash-demo" created
deployment.apps "stash-demo" created
secret "stash-demo" created
restic.stash.appscode.com "stash-demo" created

# Check if the repository for the snapshots has been created
$ kubectl get repository -l workload-name=stash-demo -n stash-demo
NAME                    AGE
deployment.stash-demo   7s

# (After waiting for ~1 1/2 minutes) Check if the snapshots has been created in the repository (and using your S3 interface)
$ kubectl get snapshots -l repository=deployment.stash-demo -n stash-demo
NAME                             AGE
deployment.stash-demo-b3341f81   18s
```

### Enable Ingress

> You may use either a HTTP or DNS challenge to receive the ACME certs. Check out [src/traefik.yaml](src/traefik.yaml) for more info; use your own API key if you want to use the DNS challenge.

```bash
# Install Traefik as ingress controller
$ kubectl apply -f src/traefik.yaml
serviceaccount "traefik-ingress-controller" unchanged
clusterrolebinding.rbac.authorization.k8s.io "traefik-ingress-controller" configured
clusterrole.rbac.authorization.k8s.io "traefik-ingress-controller" configured
persistentvolumeclaim "certificates-claim" unchanged
deployment.extensions "traefik-ingress-controller" created
service "traefik-ingress-service" created

# Check if it worked
$ kubectl --namespace=kube-system get pods -w
NAME                                         READY     STATUS    RESTARTS   AGE
traefik-ingress-controller-cc5d8b7cc-vxlfw   1/1       Running   0          30s
```

### Test Ingress Controller

> Use [onlinecurl](https://onlinecurl.com/) if your ISP's DNS is slow.

```bash
$ curl http://whatever.stg1.libresat.space -I
HTTP/1.1 404 Not Found
Content-Type: text/plain; charset=utf-8
X-Content-Type-Options: nosniff
Date: Mon, 03 Sep 2018 16:40:21 GMT
Content-Length: 19
```

### Test Ingress

```bash
# Deploy example services
$ kubectl apply -f src/examples.yaml
deployment.extensions "stilton" created
deployment.extensions "cheddar" created
deployment.extensions "wensleydale" created
deployment.extensions "homepage" created
service "stilton" created
service "cheddar" created
service "wensleydale" created
service "homepage" created
service "traefik-web-ui" created
ingress.extensions "example" created
ingress.extensions "traefik-web-ui" created

# Check if they (and thus the ingress controller) work
$ curl http://stg1.libresat.space -I
HTTP/1.1 302 Found
Location: https://stg1.libresat.space:443/
Date: Mon, 03 Sep 2018 16:39:54 GMT
Content-Length: 5
Content-Type: text/plain; charset=utf-8

$ curl https://stg1.libresat.space -I
HTTP/1.1 200 OK
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Content-Type: text/html; charset=utf-8
Date: Mon, 03 Sep 2018 16:41:14 GMT
Etag: W/"837-162e8e6c688"
Last-Modified: Sat, 21 Apr 2018 15:51:01 GMT
Vary: Accept-Encoding
Transfer-Encoding: chunked

$ curl https://traefik-ui.stg1.libresat.space -I
HTTP/1.1 302 Found
Content-Length: 34
Content-Type: text/html; charset=utf-8
Date: Mon, 03 Sep 2018 16:41:59 GMT
Location: /dashboard/

$ curl https://cheddar.stg1.libresat.space -I
HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 517
Content-Type: text/html
Date: Mon, 03 Sep 2018 16:42:19 GMT
Etag: "5784f6e1-205"
Last-Modified: Tue, 12 Jul 2016 13:55:45 GMT
Server: nginx/1.11.1

$ curl https://stilton.stg1.libresat.space -I
HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 517
Content-Type: text/html
Date: Mon, 03 Sep 2018 16:42:29 GMT
Etag: "5784f6c9-205"
Last-Modified: Tue, 12 Jul 2016 13:55:21 GMT
Server: nginx/1.11.1

$ curl https://wensleydale.stg1.libresat.space -I
HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 521
Content-Type: text/html
Date: Mon, 03 Sep 2018 16:42:39 GMT
Etag: "5784f6fb-209"
Last-Modified: Tue, 12 Jul 2016 13:56:11 GMT
Server: nginx/1.11.1
```

> You now have a full-featured Kubernetes cluster!
