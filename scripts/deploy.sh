#!/bin/sh

# bundle install
yarn install
yarn deploy
JEKYLL_ENV=production jekyll build --config "_config.yml,_config.prod.yml"
