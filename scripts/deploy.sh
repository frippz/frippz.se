#!/bin/sh

# bundle install
# yarn --frozen-lockfile --no-cache
yarn deploy
JEKYLL_ENV=production jekyll build --config "_config.yml,_config.prod.yml"
