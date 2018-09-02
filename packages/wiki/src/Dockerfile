FROM debian:stretch
LABEL maintainer="Felix Pojtinger <felix@pojtinger.com> @pojntfx"

# Update the system
RUN apt update
RUN apt upgrade -y

# Install dependencies
RUN apt install -y wget git gitit openssh-server sendmail sendmail-bin sensible-mda sasl2-bin cron texlive-latex-base xzdec pandoc latex-beamer texlive-latex-extra s5

# Setup environment
RUN mkdir -p /opt/libresat/assets
WORKDIR /opt/libresat/assets

# Get SSH keys, templates and static files (will use configMap/secrets later on)
COPY assets/ssh/id_rsa_container .
COPY assets/ssh/id_rsa_container.pub .
COPY assets/ssh/id_rsa_repo_access.pub .
COPY assets/pre-commit .
COPY assets/post-commit .
COPY assets/gitit.conf .
COPY assets/templates ./templates
COPY assets/static ./static

# Get remote assets
RUN git clone https://github.com/jgm/gitit
RUN cp -r gitit/data/markupHelp ./markupHelp
RUN cp -r gitit/data/s5 ./s5

# Expose the web interface and SSH server
EXPOSE 5001 22

# Set env variables
ENV GIT_BOT_EMAIL="gitit-bot@libresat.space"
ENV GIT_BOT_NAME="LibreSat Gitit Bot"
ENV GIT_REMOTE="git@gitlab.com:pojntfx/git-wikidata-test.git"
ENV EXTERNAL_SMTP_DOMAIN="mail.gandi.net"
ENV EXTERNAL_SMTP_USERNAME="noreply@libresat.space"
ENV EXTERNAL_SMTP_PASSWORD="249j89aSf8234ns@#234"

# Enable PDF exports
RUN tlmgr init-usertree
RUN tlmgr install ec --repository http://mirror.ctan.org/systems/texlive/tlnet

# Setup environment
WORKDIR /opt/libresat
COPY assets/run.sh .
RUN chmod +x run.sh
RUN mkdir /opt/libresat/gitit
WORKDIR /opt/libresat/gitit

# Start everything
CMD bash -c "/opt/libresat/run.sh"