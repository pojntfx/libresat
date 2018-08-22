FROM jekyll/jekyll:latest
LABEL maintainer="Felicitas Pojtinger <felicitas@pojtinger.com> @pojntfx"

# Update the system
RUN apk update
RUN apk upgrade

# Install dependencies
RUN apk add caddy
RUN gem install bundler

# Setup environment
RUN mkdir -p /opt/website
WORKDIR /opt/website

# Add assets
COPY . /opt/website

# Install dependencies
RUN bundle install

# Compile the site
RUN chmod -R 777 .
RUN bundle exec jekyll build

# Serve the site
CMD cd _site && caddy

# Expose the site
EXPOSE 2015