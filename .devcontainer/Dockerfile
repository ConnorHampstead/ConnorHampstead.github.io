FROM debian:buster-slim

RUN apt-get update && apt-get install -y \
    curl \
    git \
    locales \
    sudo \
    zsh

ARG HUGO_VERSION=0.111.3
RUN curl -L -o hugo.deb "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-amd64.deb" \
    && sudo dpkg -i hugo.deb \
    && rm hugo.deb

EXPOSE 1313

ENTRYPOINT ["/bin/bash"]