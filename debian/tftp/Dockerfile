FROM debian:stretch

# Configure access to other microservices and hostname
ENV KERNEL_SERVER_IP=192.168.178.44:8000
ENV INITRD_SERVER_IP=192.168.178.44:8100
ENV PXELINUX_SERVER_IP=192.168.178.44:8200

# Update the system
RUN apt update
RUN apt -y upgrade

# Get dependencies
RUN apt install -y wget iptables tftpd-hpa tftp

# Get pipework
RUN wget https://raw.github.com/jpetazzo/pipework/master/pipework
RUN chmod +x pipework

# Setup enviromnent
RUN mkdir /tftp
WORKDIR /tftp

# Get kernel, intitrd and pxelinux
RUN wget $KERNEL_SERVER_IP/opensdcp/debian/9/kernel/linux
RUN wget $PXELINUX_SERVER_IP/opensdcp/debian/9/pxelinux/pxelinux.0
RUN wget $INITRD_SERVER_IP/opensdcp/debian/9/initrd/initrd.gz
RUN wget $PXELINUX_SERVER_IP/opensdcp/debian/9/pxelinux/bootnetx64.efi
RUN wget -r -nH --no-parent --cut-dirs=5 --reject="index.html*" $PXELINUX_SERVER_IP/opensdcp/debian/9/pxelinux/grub
RUN wget -r -nH --no-parent --cut-dirs=5 --reject="index.html*" $PXELINUX_SERVER_IP/opensdcp/debian/9/pxelinux/boot-screens

# Setup tftp-hpa
RUN echo 'TFTP_USERNAME="root" \n\
    TFTP_DIRECTORY="/tftp" \n\
    TFTP_ADDRESS=":69" \n\
    TFTP_OPTIONS="-s"' > /etc/default/tftpd-hpa
RUN echo 'asdf is great' >> test.txt

# Run dnsmasq
CMD \
    iptables -t nat -A POSTROUTING -j MASQUERADE && \
    /pipework --wait && \
    service tftpd-hpa start && \
    tail -f /tftp/test.txt

# Serve dnsmasq
EXPOSE 69