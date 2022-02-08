FROM ruby:2.6.6-alpine3.13

RUN apk add --no-cache \
  g++ \
  make \
  nodejs \
  npm

RUN npm install -g npm
RUN gem install bundler

# Install PhantomJS manually
RUN apk --update add ttf-ubuntu-font-family fontconfig && rm -rf /var/cache/apk/*

# if ever you need to change phantom js version number in future ENV comes handy as it can be used as a dynamic variable
ENV PHANTOMJS_VERSION=2.1.1

# magic command
RUN apk add --no-cache curl && \
    cd /tmp && curl -Ls https://github.com/dustinblackman/phantomized/releases/download/${PHANTOMJS_VERSION}/dockerized-phantomjs.tar.gz | tar xz && \
    cp -R lib lib64 / && \
    cp -R usr/lib/x86_64-linux-gnu /usr/lib && \
    cp -R usr/share /usr/share && \
    cp -R etc/fonts /etc && \
    curl -k -Ls https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-${PHANTOMJS_VERSION}-linux-x86_64.tar.bz2 | tar -jxf - && \
    cp phantomjs-${PHANTOMJS_VERSION}-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs && \
    rm -fR phantomjs-${PHANTOMJS_VERSION}-linux-x86_64 && \
    apk del curl

WORKDIR /jekyll

COPY Gemfile* /jekyll/

RUN bundle install

COPY package.json package-lock.json /jekyll/

RUN npm ci
