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

## Kernel-, Initrd and PXEBoot-Server (`opensdcp-infrastructure-pxe`)

> TODO: More decomposition (into kernel, initrd, pxelinux, preseed) is necessary as `opensdcp-infrastructure-iso` will be deprecated.

```bash
# Build the container
docker build opensdcp-infrastructure-pxe -t opensdcp-infrastructure-pxe
# Run the container
PXECID=$(docker run --cap-add NET_ADMIN -p 69:69 -d opensdcp-infrastructure-pxe)
# Configure the bridge to the host
sudo opensdcp-infrastructure-pxe/pipework br0 $PXECID 192.168.242.1/24
# Add the bridge
sudo brctl addif br0 enp3s0
```

> FIXME: Currently outputs `Failed to load ldlinux.c32`

## Preseed- and Post-Install-Script-Server (`opensdcp-infrastructure-preseed`)

Add the ip of your `opensdcp-infrastructure-preseed`-server to the last line of `opensdcp-infrastructure-preseed/preseed.cfg`.

```bash
# Build the container
docker build opensdcp-infrastructure-preseed -t opensdcp-infrastructure-preseed
# Run the container
docker run -d -p 8200:80 opensdcp-infrastructure-preseed
```
