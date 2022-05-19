FROM ruby:3.0.3-alpine3.13

RUN apk add --no-cache \
  g++ \
  make \
  nodejs \
  npm

RUN npm install -g npm
RUN gem install bundler

WORKDIR /jekyll

COPY Gemfile* /jekyll/

RUN bundle install

COPY package.json package-lock.json /jekyll/

RUN npm ci
