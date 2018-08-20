FROM httpd:alpine

# Set env variables (config the server here)
ENV DEBIAN_MIRROR=https://cdimage.debian.org
ENV DEBIAN_VERSION=debian-9.4.0
ENV DEBIAN_ARCH=amd64
ENV PRESEED_SERVER_IP=192.168.242.2
ENV ISO_URL=opensdcp/debian/9/opensdcp-debian-9.iso
ENV NODE_HOSTNAME=node1

# Update the system
RUN apk update
RUN apk upgrade

# Install dependencies
RUN apk add --node-cache xorriso wget

# Setup the environment
RUN mkdir /tmp/opensdcp-debian
RUN mkdir /usr/local/apache2/htdocs/opensdcp
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian/9
WORKDIR /tmp/opensdcp-debian/

# Get the official ISO
RUN wget $DEBIAN_MIRROR/debian-cd/current/$DEBIAN_ARCH/iso-cd/$DEBIAN_VERSION-$DEBIAN_ARCH-netinst.iso

# Extract the official ISO
RUN xorriso -osirrox on -indev $DEBIAN_VERSION-$DEBIAN_ARCH-netinst.iso -extract / .

# Setup syslinux
COPY assets/isolinux.cfg isolinux/
RUN sed -i s/PRESEED_SERVER_IP/$PRESEED_SERVER_IP/g isolinux/isolinux.cfg
RUN sed -i s/NODE_HOSTNAME/$NODE_HOSTNAME/g isolinux/isolinux.cfg

# Setup GRUB
COPY assets/grub.cfg boot/grub/
RUN sed -i s/PRESEED_SERVER_IP/$PRESEED_SERVER_IP/g boot/grub/grub.cfg
RUN sed -i s/NODE_HOSTNAME/$NODE_HOSTNAME/g boot/grub/grub.cfg

# Prepare the ISO
RUN dd \
    if=$DEBIAN_VERSION-$DEBIAN_ARCH-netinst.iso \
    bs=512 \
    count=1 \
    of=isolinux/isohdpfx.bin

# Create the ISO
RUN xorriso \
    -as mkisofs \
    -isohybrid-mbr isolinux/isohdpfx.bin \
    -c isolinux/boot.cat \
    -b isolinux/isolinux.bin \
    -no-emul-boot \
    -boot-load-size 4 \
    -boot-info-table \
    -eltorito-alt-boot \
    -e boot/grub/efi.img \
    -no-emul-boot \
    -isohybrid-gpt-basdat \
    -o /usr/local/apache2/htdocs/$ISO_URL .

# Serve the ISO
EXPOSE 80