# Containerized Automatic Debian 9 PXE Installation

## Build and Serve the OpenSDCP Distribution of Debian 9 as an ISO

```bash
# Build the container
docker build iso-server -t iso-server
# Run the container
docker run -d -p 8080:80 iso-server
# Save the ISO to `assets/`
wget -P assets localhost:8080/opensdcp/debian-9/opensdcp-debian-9.iso
```

## Extract and Serve the OpenSDCP Distribution of Debian 9 as `linux`, `initrd.gz` and `pxelinux.0` for PXEBoot

> TODO: Add server
