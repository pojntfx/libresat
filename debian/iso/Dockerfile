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

# TODO: Add more sane config for grub and syslinux (branding, automatic boot)

# Overwrite contents of boot/grub/grub.cfg
RUN echo $'if loadfont /boot/grub/font.pf2 ; then \n\
    set gfxmode=auto \n\
    insmod efi_gop \n\
    insmod efi_uga \n\
    insmod gfxterm \n\
    terminal_output gfxterm \n\
    fi \n\
    set default=1 \n\
    set timeout=1 \n\
    set menu_color_normal=white/black \n\
    set menu_color_highlight=black/light-gray \n\
    menuentry "Install the OpenSDCP Distribution of Debian 9" { \n\
    set gfxpayload=keep \n\
    linux /install.amd/vmlinuz gfxpayload=800x600x16,800x600 --- auto=true priority=critical initrd=/install.amd/initrd.gz hostname='$NODE_HOSTNAME$' preseed/url=http://'$PRESEED_SERVER_IP$'/opensdcp/debian/9/preseed/preseed.cfg preseed/locale=en_US kbd-chooser/method=us netcfg/choose_interface=auto\n\
    initrd  /install.amd/initrd.gz \n\
    }' > boot/grub/grub.cfg

# Overwrite /isolinux/txt.cfg
RUN echo $'GRUB_DEFAULT=1 \n\
    GRUB_HIDDEN_TIMEOUT=0 \n\
    GRUB_HIDDEN_TIMEOUT_QUIET=true \n\
    GRUB_TIMEOUT=1 \n\
    default install \n\
    label install \n\
    menu label ^Install the OpenSDCP Distribution of Debian 9\n\
    kernel /install.amd/vmlinuz \n\
    append auto=true priority=critical initrd=/install.amd/initrd.gz hostname='$NODE_HOSTNAME$' preseed/url=http://'$PRESEED_SERVER_IP$'/opensdcp/debian/9/preseed/preseed.cfg preseed/locale=en_US kbd-chooser/method=us netcfg/choose_interface=auto' > isolinux/txt.cfg

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