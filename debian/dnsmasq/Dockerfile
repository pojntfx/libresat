FROM debian:stretch

# Configure access to other microservices and hostname
ENV PRESEED_SERVER_IP=192.168.242.2
ENV NODE_HOSTNAME=node1

# Update the system
RUN apt update
RUN apt -y upgrade

# Get dependencies
RUN apt install -y wget dnsmasq iptables

# Get pipework
RUN wget https://raw.github.com/jpetazzo/pipework/master/pipework
RUN chmod +x pipework

# Setup enviromnent
RUN mkdir /tftp
WORKDIR /tftp

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
    --dhcp-boot=pxelinux.0,pxeserver,192.168.178.44 \
    --pxe-service=x86PC,"Automatically install the OpenSDCP Distribution of Debian 9",pxelinux,192.168.178.44 \    
    --no-daemon

# Serve dnsmasq
EXPOSE 53

