FROM ruby:2.6.5-alpine3.11

RUN apk add --no-cache \
  g++ \
  make \
  nodejs \
  yarn

RUN gem install bundler

WORKDIR /srv/jekyll

COPY Gemfile* /srv/jekyll/

RUN bundle install

COPY package.json yarn.lock /srv/jekyll/

RUN yarn install --pure-lockfile
