FROM httpd:alpine

# Configure access to other microservices
ENV PRESEED_SERVER_IP=192.168.242.2

# Update the system
RUN apk update
RUN apk upgrade

# Setup the environment
RUN mkdir /usr/local/apache2/htdocs/opensdcp/
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian/9
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian/9/preseed
WORKDIR /usr/local/apache2/htdocs/opensdcp/debian/9/preseed

# Add and setup the preseed file
COPY assets/preseed.cfg .
RUN sed -i s/PRESEED_SERVER_IP/$PRESEED_SERVER_IP/g preseed.cfg

# Add the post-installation script
COPY assets/post-install.sh .

# Serve the files
EXPOSE 80