#!/bin/sh

yarn install --production --frozen-lockfile --cache-folder /srv/jekyll/.yarn-cache
yarn run deploy
JEKYLL_ENV=production jekyll build --config "_config.yml,_config.prod.yml"
