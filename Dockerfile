FROM ruby:2.4.7-alpine3.10

RUN apk add --no-cache \
  g++ \
  libc-dev \
  make \
  nodejs \
  yarn

RUN gem install bundler

WORKDIR /srv/jekyll

COPY Gemfile* /srv/jekyll/

RUN bundle install
