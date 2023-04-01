FROM debian:buster-slim

RUN apt-get update && apt-get install -y \
    curl \
    git \
    locales \
    sudo \
    zsh

ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=$USER_UID
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME
ENV LANG=en_US.UTF-8
ENV LC_ALL=$LANG
RUN sudo locale-gen $LANG \
    && sudo update-locale LANG=$LANG LC_ALL=$LANG

ARG HUGO_VERSION=0.89.4
RUN curl -L -o hugo.deb "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.deb" \
    && sudo dpkg -i hugo.deb \
    && rm hugo.deb

# 1313 is default hugo port
EXPOSE 1313