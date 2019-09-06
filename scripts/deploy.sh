#!/bin/sh

yarn install --production --frozen-lockfile
yarn run deploy
JEKYLL_ENV=production jekyll build --config "_config.yml,_config.prod.yml"
