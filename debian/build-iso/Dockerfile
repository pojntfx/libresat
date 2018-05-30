FROM debian:stretch

# Update the system
RUN apt update
RUN apt upgrade -y

# Install dependencies
RUN apt install -y xorriso wget apache2

# Setup the environment
RUN mkdir /tmp/opensdcp-debian/
RUN mkdir /var/www/html/opensdcp/
RUN mkdir /var/www/html/opensdcp/debian-9/
WORKDIR /tmp/opensdcp-debian/

# Get the official ISO
# TODO: Get the mirror and debian version from an env variable
RUN wget https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-9.4.0-amd64-netinst.iso

# Extract the official ISO
RUN xorriso -osirrox on -indev debian-9.4.0-amd64-netinst.iso -extract / .

# Overwrite contents of boot/grub/grub.cfg
# TODO: Get hostname and preseed URL from an env variable
RUN echo $'if loadfont /boot/grub/font.pf2 ; then \n\
    set gfxmode=auto \n\
    insmod efi_gop \n\
    insmod efi_uga \n\
    insmod gfxterm \n\
    terminal_output gfxterm \n\
    fi \n\
    set default=0 \n\
    set timeout=1 \n\
    set menu_color_normal=white/black \n\
    set menu_color_highlight=black/light-gray \n\
    menuentry "Install the OpenSDCP Distribution of Debian 9" { \n\
    set gfxpayload=keep \n\
    linux /install/vmlinuz gfxpayload=800x600x16,800x600 hostname=ubuntu16-04 --- auto=true url=http://192.168.178.44/opensdcp/debian-9/preseed.cfg quiet \n\
    initrd  /install/initrd.gz \n\
    }' > boot/grub/grub.cfg

# Overwrite /isolinux/txt.cfg
# TODO: Get preseed URL from an env variable
RUN echo $'GRUB_DEFAULT=0 \n\
    GRUB_HIDDEN_TIMEOUT=0 \n\
    GRUB_HIDDEN_TIMEOUT_QUIET=true \n\
    GRUB_TIMEOUT=1 \n\
    default install \n\
    label install \n\
    menu label ^Install the OpenSDCP Distribution of Debian 9\n\
    kernel /install/vmlinuz \n\
    append preseed/url=http://192.168.178.44/opensdcp/debian-9/preseed.cfg bga=788 netcfg/choose_interface=auto initrd=/install/initrd.gz priority=critical --' > isolinux/txt.cfg

# Prepare the ISO
RUN dd \
    if=debian-9.4.0-amd64-netinst.iso \
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
    -o /var/www/html/opensdcp/debian-9/opensdcp-debian.iso .

# Start httpd
CMD apache2ctl -D FOREGROUND

# Expose the server
EXPOSE 80