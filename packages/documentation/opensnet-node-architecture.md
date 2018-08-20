# OpenSNET Node Architecture

## Overview

In order to develop an OpenSNET node module, you'll need to engineer the following:

* Driver (this may already be done for you; if not, it's a Linux kernel module written in C)
* Pod

An OpenSNET node runs a minimal GNU/Linux distribution running your drivers and containerized collection of services in pods. As the developer, you will not have to worry about this, but in case you are interested, it looks as follows:

```yaml
linux-kernel (hardware access; operating system):
    - name: kernel-modules (drivers)
      modules:
        - name: Your modules driver
          source: ~/your-modules-driver
    - name: systemd (init system)
      services:
        - name: snapd (applications)
          snaps:
              - name: Kubernetes
                interfaces: /dev
                pods:
                - name: Your Modules Pod
                    services:
                        - name: API Server (NodeJS)
                          devices: /dev/usb1
                          image: you/your-modules-pod-api-server
                          ports: 3000
                          priviledged: true
                        - name: Database Server (Redis)
                          image: you/your-modules-pod-database-server
                          ports: 3001
                          priviledged: false
                - name: Your Nodes Meta API
                    services:
                        - name: API Server (NodeJS)
                          image: you/your-nodes-meta-api-pod-api-server
                          ports: 3002
                          priviledged: false
                        - name: Database Server (Redis)
                          image: you/your-nodes-meta-api-pod-database-server
                          ports: 3003
                          priviledged: false
```

As the developer, you will only have to touch the following 2 namespaces:

* linux-kernel.modules
* linux-kernel.systemd.services.snapd.snaps.kubernetes.pods

In order to define them, you will use a `module.yaml` file as follows:

```yaml
name: Your module
description: A quick test module
contributors: github.com/you/module-repository/contributors.md
license: GPL-3.0
drivers:
  - name: Your modules first driver
    source: drivers/my-modules-first-driver # or git.your-domain.com/you/module-repository/contributors.md
services:
  - name: Your Modules Pod
      services:
          - name: API Server (NodeJS)
              devices: /dev/usb1
              image: you/your-modules-pod-api-server
              ports: 3000
              priviledged: true
          - name: Database Server (Redis)
              image: you/your-modules-pod-database-server
              ports: 3001
              priviledged: false
  - name: Your Nodes Meta API
      services:
          - name: API Server (NodeJS)
              image: you/your-nodes-meta-api-pod-api-server
              ports: 3002
              priviledged: false
          - name: Database Server (Redis)
              image: you/your-nodes-meta-api-pod-database-server
              ports: 3003
              priviledged: false
```

You define the `linux-kernel.modules.your-modules-driver` namespace with our own `yaml` format, while the `linux-kernel.systemd.services.snapd.snaps.kubernetes.pods.your-modules-pod` namespace is formatted using standard Kubernetes YAML. You may import those different namespaces from external files as well.