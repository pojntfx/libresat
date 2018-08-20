FROM alpine:latest

# Configure access to other microservices and hostname
ENV KERNEL_SERVER_IP=192.168.178.44:8000
ENV INITRD_SERVER_IP=192.168.178.44:8100
ENV PXELINUX_SERVER_IP=192.168.178.44:8200
ENV PRESEED_SERVER_IP=192.168.242.2
ENV NODE_HOSTNAME=node1

# Update the system
RUN apk update
RUN apk upgrade

# Get dependencies
RUN apk add wget dnsmasq iptables --no-cache

# Get pipework
RUN wget https://raw.github.com/jpetazzo/pipework/master/pipework
RUN chmod +x pipework

# Setup enviromnent
RUN mkdir /tftp
WORKDIR /tftp

# Get kernel, intitrd and pxelinux
RUN wget $KERNEL_SERVER_IP/opensdcp/debian/9/kernel/linux
RUN wget $INITRD_SERVER_IP/opensdcp/debian/9/initrd/initrd.gz
RUN wget $PXELINUX_SERVER_IP/opensdcp/debian/9/pxelinux/pxelinux.0
RUN wget $PXELINUX_SERVER_IP/opensdcp/debian/9/pxelinux/bootnetx64.efi
RUN wget -r -nH --no-parent --cut-dirs=5 --reject="index.html*" $PXELINUX_SERVER_IP/opensdcp/debian/9/pxelinux/grub
RUN wget -r -nH --no-parent --cut-dirs=5 --reject="index.html*" $PXELINUX_SERVER_IP/opensdcp/debian/9/pxelinux/boot-screens

# Setup syslinux
RUN mkdir pxelinux.cfg
COPY assets/default pxelinux.cfg
RUN sed -i s/PRESEED_SERVER_IP/$PRESEED_SERVER_IP/g pxelinux.cfg/default
RUN sed -i s/NODE_HOSTNAME/$NODE_HOSTNAME/g pxelinux.cfg/default

# Run dnsmasq
CMD \
    iptables -t nat -A POSTROUTING -j MASQUERADE && \
    /pipework --wait && \
    CONTAINER_IP=$(ip addr show dev eth1 | awk -F '[ /]+' '/global/ {print $3}') && \
    CONTAINER_SUBNET=$(echo $CONTAINER_IP | cut -d '.' -f 1,2,3) && \
    dnsmasq --interface=eth1 \
    --dhcp-range=$CONTAINER_SUBNET.101,$CONTAINER_SUBNET.199,255.255.255.0,1h \
    --dhcp-boot=pxelinux.0,pxeserver,$CONTAINER_IP \
    --pxe-service=x86PC,"Automatically install the OpenSDCP Distribution of Debian 9",pxelinux \    
    --enable-tftp --tftp-root=/tftp/ --no-daemon

# Serve dnsmasq
EXPOSE 69