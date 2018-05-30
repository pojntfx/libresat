FROM httpd:alpine

# Update the system
RUN apk update
RUN apk upgrade

# Setup the environment
RUN mkdir /usr/local/apache2/htdocs/opensdcp/
RUN mkdir /usr/local/apache2/htdocs/opensdcp/debian-9/
WORKDIR /usr/local/apache2/htdocs/opensdcp/debian-9/

# Add the preseed file
COPY preseed.cfg .
# Add the post-installation script
COPY post-install.sh .

# Serve the preseed file
EXPOSE 80