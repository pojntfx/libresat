FROM httpd:alpine

# Configure access to other microservices and configure the node
ENV PRESEED_SERVER_IP=192.168.242.2
ENV APT_MIRROR=http.us.debian.org
ENV ROOT_PASSWORD=changeme1
ENV FULL_USERNAME=Administrator
ENV SHORT_USERNAME=debian
ENV USER_PASSWORD=changeme2
ENV TIMEZONE=Europe/Berlin

# Update the system
RUN apk update
RUN apk upgrade

# Setup the environment
RUN mkdir /usr/local/apache2/htdocs/opensdcp/
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian/9
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian/9/preseed
WORKDIR /usr/local/apache2/htdocs/opensdcp/debian/9/preseed

# Add the preseed file
COPY assets/preseed.cfg .
# Set variables in preseed files from env variables
RUN sed -i s/PRESEED_SERVER_IP/$PRESEED_SERVER_IP/g preseed.cfg
RUN sed -i s/APT_MIRROR/$APT_MIRROR/g preseed.cfg
RUN sed -i s/ROOT_PASSWORD/$ROOT_PASSWORD/g preseed.cfg
RUN sed -i s/FULL_USERNAME/$FULL_USERNAME/g preseed.cfg
RUN sed -i s/SHORT_USERNAME/$SHORT_USERNAME/g preseed.cfg
RUN sed -i s/USER_PASSWORD/$USER_PASSWORD/g preseed.cfg
RUN sed -i s@TIMEZONE@$TIMEZONE@g preseed.cfg

# Add the post-installation script
COPY assets/post-install.sh .

# Serve the files
EXPOSE 80