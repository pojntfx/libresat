FROM debian:stretch

# Set env variables (config the server here)
ENV DEBIAN_MIRROR=https://cdimage.debian.org
ENV DEBIAN_VERSION=stretch
ENV DEBIAN_ARCH=amd64
ENV PRESEED_URL=http://192.168.178.44:8200/opensdcp/debian-9/preseed.cfg
ENV NODE_HOSTNAME=node1

# Update the system
RUN apt update
RUN apt upgrade -y
RUN apt install -y dnsmasq wget iptables

# Get and setup pipework
COPY pipework .
RUN chmod +x pipework

# Setup the environment
RUN mkdir /tftp
WORKDIR /tftp

# Get kernel
RUN wget $DEBIAN_MIRROR/debian/dists/stretch/main/installer-$DEBIAN_ARCH/current/images/netboot/debian-installer/$DEBIAN_ARCH/linux
# Get initrd
RUN wget $DEBIAN_MIRROR/debian/dists/stretch/main/installer-$DEBIAN_ARCH/current/images/netboot/debian-installer/$DEBIAN_ARCH/initrd.gz
# Get pxelinux
RUN wget $DEBIAN_MIRROR/debian/dists/stretch/main/installer-$DEBIAN_ARCH/current/images/netboot/debian-installer/$DEBIAN_ARCH/pxelinux.0

# Setup pxelinux
RUN mkdir pxelinux.cfg
RUN echo $'default opensdcp-debian-9 \n\
    label opensdcp-debian-9 \n\
    menu label ^Install the OpenSDCP Distribution of Debian 9\n\
    kernel linux \n\
    append preseed/url='${PRESEED_URL} $'hostname='${NODE_HOSTNAME} $'bga=788 auto=true priority=critical preseed/locale=en_US kbd-chooser/method=us netcfg/choose_interface=auto initrd=initrd.gz priority=critical --' \n\
    > pxelinux.cfg/default

# Start dnsmasq and pipework
CMD iptables -t nat -A POSTROUTING -j MASQUERADE &&\
    /pipework --wait &&\
    myIP=$(ip addr show dev eth1 | awk -F '[ /]+' '/global/ {print $3}') &&\
    mySUBNET=$(echo $myIP | cut -d '.' -f 1,2,3) &&\
    dnsmasq \
    --interface=eth1 \
    --dhcp-range=$mySUBNET.101,$mySUBNET.199,255.255.255.0,1h \
    --dhcp-boot=pxelinux.0,pxeserver,$myIP \
    --pxe-service=x86PC,"Install the OpenSDCP Distribution of Debian 9",pxelinux \
    --enable-tftp \
    --tftp-root=/tftp/ \
    --no-daemon

# Serve the kernel, initrd and pxelinux
EXPOSE 69