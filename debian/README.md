# Containerized Automatic Debian 9 PXE Installation

> TODO: Push example images to Docker Hub

## ISO-Build- and ISO-Serve-Server (`opensdcp-infrastructure-iso`)

Add your configuration options to the environment variables in `opensdcp-infrastructure-iso/Dockerfile`!

```bash
# Build the container
docker build opensdcp-infrastructure-iso -t opensdcp-infrastructure-iso
# Run the container
docker run -d -p 8000:80 opensdcp-infrastructure-iso
# Save the ISO to `assets/`
wget -P assets localhost:8000/opensdcp/debian-9/opensdcp-debian-9.iso
# You may now install the ISO by flashing it to a USB stick and booting your machine from it,
# or continue to automate this step.
```

## ISO-Extraction- and PXEBoot-Server (`opensdcp-infrastructure-pxe`)

> TODO: Add server

## Preseed- and Post-Install-Script-Server (`opensdcp-infrastructure-preseed`)

Add the ip of your `opensdcp-infrastructure-preseed`-server to the last line of `opensdcp-infrastructure-preseed/preseed.cfg`.

```bash
# Build the container
docker build opensdcp-infrastructure-preseed -t opensdcp-infrastructure-preseed
# Run the container
docker run -d -p 8200:80 opensdcp-infrastructure-preseed
```
