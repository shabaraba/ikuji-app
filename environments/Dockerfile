FROM ubuntu:20.04

RUN apt update -y && apt upgrade -y && \
    apt install -y  tzdata && \
    apt install -y\
        nodejs \
        npm \
        curl \
        git

RUN npm install -g n && \
    n 16.0.0

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
RUN . $HOME/.nvm/nvm.sh && \
    nvm install --lts && \
    nvm use --lts && \
    node -v && npm -v && \
    npm i -g yarn
RUN npm install -y expo-cli -g

WORKDIR /var/www/html
