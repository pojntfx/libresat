# Automated, Containerized Debian Installation over the Network

## Overview

This setup uses a microservice-like architecture to install Debian over PXE. It does so by using Docker containers and Preseed files, which means that there is no need for any supervision.

```text
Kernel Server    Initrd Server    PXELINUX Server    Preseed Server

      +                 +                 +                +
      |                 |                 |                |
      |                 |                 |                |
      |                 |                 |                |
      |                 |                 |                |
      |                 |                 |                |
      |                 |                 |                |
      |                 |                 |                |
      |                 |                 |                |
      |                 v                 |                v
      +--------->DNSMasq Server<----------+               Host
                        +                                  ^
                        |                                  |
                        +----------------------------------+
```

Alternatively, if you do not want to set up a the PXELINUX, Kernel and Initrd Servers, consider using the ISO Server, manually flashing the ISO to a USB stick and then booting from it.

## Roadmap

This is still a work-in-progress! The following features are currently planned to be implemented as well:

* `apt-mirror` for much faster installations in mass deployments
* Installation and setup of SSH and Ansible dependencies so that the nodes, once Debian has been deployed, can be provisioned using Ansible (i.e. for Kubernetes deployments)
* An IP scanner and IP registry REST API server
* React Frontend and NodeJS/Go CLI with common Ansible scripts (apt update, apt install, reboot etc.) and an infrastructure overview (`nmap -sP iface`)

## Configuration

Configure the environment variables in the Dockerfiles to match your configuration (mostly IP addresses).

## Kernel Server

```bash
# Build the container
docker build kernel/ -t opensdcp-debian-kernel
# Run the container
docker run -d -p 8000:80 opensdcp-debian-kernel
# Test if the container works
curl localhost:8000/opensdcp/debian/9/kernel/ | grep linux
```

## Initrd Server

```bash
# Build the container
docker build initrd/ -t opensdcp-debian-initrd
# Run the container
docker run -d -p 8100:80 opensdcp-debian-initrd
# Test if the container works
curl localhost:8100/opensdcp/debian/9/initrd/ | grep initrd.gz
```

## PXELINUX Server

```bash
# Build the container
docker build pxelinux/ -t opensdcp-debian-pxelinux
# Run the container
docker run -d -p 8200:80 opensdcp-debian-pxelinux
# Test if the container works
curl localhost:8200/opensdcp/debian/9/pxelinux/ | grep -e pxelinux.0 -e bootnetx64.efi -e boot-screens -e grub
```

## Preseed Server

```bash
# Get pipework (we need to access this container from within the host)
wget -P scripts https://raw.github.com/jpetazzo/pipework/master/pipework
chmod +x scripts/pipework
# Build the container
docker build preseed/ -t opensdcp-debian-preseed
# Run the container
PRESEED_CONTAINER_ID=$(docker run -d -p 8300:80 opensdcp-debian-preseed)
# Add extra network interface
sudo scripts/pipework br0 $PRESEED_CONTAINER_ID 192.168.242.2/24
# Test if the container works
curl localhost:8300/opensdcp/debian/9/preseed/ | grep -e preseed.cfg -e post-install.sh
```

## DNSMasq Server

```bash
# Build the container
docker build dnsmasq/ -t opensdcp-debian-dnsmasq
# Run the container
DNSMASQ_CONTAINER_ID=$(docker run --cap-add NET_ADMIN --cap-add=NET_RAW -d -p 69:69 opensdcp-debian-dnsmasq)
# Add extra network interface
sudo scripts/pipework br0 $DNSMASQ_CONTAINER_ID 192.168.242.1/24
```

Now connect machines to the `br0` bridge and set them to PXEBoot. If you want to use your normal network card, bridge it (replace `enp2s0` with your actual network card) by running the following:

```bash
sudo ip link set br0 up # Not necessary if this is the first time
sudo brctl addif br0 enp2s0
```

This might prevent you from connecting to the internet. Stop it with the following:

```bash
sudo ip link set br0 down
sudo brctl delbr br0
```

## Alternative: ISO Server

Alternatively, if you do not want to set up a the PXELINUX, Kernel and Initrd Servers, consider using this ISO Server, manually flashing the ISO to a USB stick and then booting from it. It requires a running Preseed Server. You will need to be connected to the `br0` bridge like with the DNSMasq Server.

```bash
# Build the container
docker build iso/ -t opensdcp-debian-iso
# Run the container
docker run -d -p 8400:80 opensdcp-debian-iso
# Download the ISO into the `output` directory
wget -P output localhost:8400/opensdcp/debian/9/opensdcp-debian-9.iso
```
