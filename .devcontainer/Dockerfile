FROM klakegg/hugo

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

# 1313 is default hugo port
EXPOSE 1313