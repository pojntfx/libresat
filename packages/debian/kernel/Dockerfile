FROM httpd:alpine

# Configure Debian version and architecture
ENV DEBIAN_MIRROR=https://cdimage.debian.org
ENV DEBIAN_VERSION=stretch
ENV DEBIAN_ARCH=amd64

# Update the system
RUN apk update
RUN apk upgrade

# Get dependencies
RUN apk add --no-cache wget

# Setup the environment
RUN mkdir /usr/local/apache2/htdocs/opensdcp
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian/9
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian/9/kernel
WORKDIR /usr/local/apache2/htdocs/opensdcp/debian/9/kernel

# Get the kernel
RUN wget $DEBIAN_MIRROR/debian/dists/$DEBIAN_VERSION/main/installer-$DEBIAN_ARCH/current/images/netboot/debian-installer/$DEBIAN_ARCH/linux

# Serve the kernel
EXPOSE 80