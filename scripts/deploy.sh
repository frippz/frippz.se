#!/bin/sh

# bundle install
yarn --production --frozen-lockfile --no-cache
yarn run deploy
JEKYLL_ENV=production jekyll build --config "_config.yml,_config.prod.yml"
