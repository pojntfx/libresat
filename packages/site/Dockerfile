FROM alpine
LABEL maintainer="Felicitas Pojtinger <felicitas@pojtinger.com> @pojntfx"

# Update the system
RUN apk update
RUN apk upgrade

# Install dependencies
RUN apk add npm build-base
RUN apk add vips-dev fftw-dev --update-cache --repository https://dl-3.alpinelinux.org/alpine/edge/testing/

# Setup environment
RUN mkdir -p /opt/libresat/site
WORKDIR /opt/libresat

# Get source code
COPY package.json package-lock.json gatsby-config.js gatsby-node.js ./
COPY src/ src/
COPY static/ static/

# Install dependecies
RUN npm install

# Build the site
RUN npm run build

# Expose the site
EXPOSE 9000

# Serve the site
CMD npm start