# Containerized Automatic Debian PXE Installation

## Build the Debian ISO with with path to preseed location

```bash
# Build the container
docker build build-iso -t build-iso
# Run the container
docker run -d -p 8080:80 build-iso
# Save the ISO to `assets/`
wget -P assets localhost:8080/opensdcp/debian-9/opensdcp-debian.iso
```
