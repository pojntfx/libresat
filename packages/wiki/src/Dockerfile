FROM debian:stretch
LABEL maintainer="Felicitas Pojtinger <felicitas@pojtinger.com> @pojntfx"

# Update the system
RUN apt update
RUN apt upgrade -y

# Install dependencies
RUN apt install -y wget git gitit openssh-server sendmail sendmail-bin sensible-mda sasl2-bin cron

# Setup environment
RUN mkdir /opt/assets
WORKDIR /opt/assets

# Get SSH keys, templates and static files (will use configMap/secrets later on)
COPY assets/ssh/id_rsa_container .
COPY assets/ssh/id_rsa_container.pub .
COPY assets/ssh/id_rsa_repo_access.pub .
COPY assets/pre-commit .
COPY assets/post-commit .
COPY assets/gitit.conf .
COPY assets/templates ./templates
COPY assets/static ./static

# Expose the web interface and SSH server
EXPOSE 5001 22

# Set env variables
ENV GIT_BOT_EMAIL="gitit-bot@libresat.space"
ENV GIT_BOT_NAME="LibreSat Gitit Bot"
ENV GIT_REMOTE="git@gitlab.com:pojntfx/git-wikidata-test.git"
ENV EXTERNAL_SMTP_DOMAIN="mail.gandi.net"
ENV EXTERNAL_SMTP_USERNAME="noreply@libresat.space"
ENV EXTERNAL_SMTP_PASSWORD="249j89aSf8234ns@#234"

# Setup environment
WORKDIR /opt
COPY assets/run.sh .
RUN chmod +x run.sh
RUN mkdir /opt/gitit
WORKDIR /opt/gitit

# Start everything
CMD bash -c "/opt/run.sh"