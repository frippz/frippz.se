#!/bin/sh

mkdir /srv/jekyll/.yarn-cache
yarn install --production --frozen-lockfile --cache-folder /srv/jekyll/.yarn-cache
yarn run deploy
jekyll build --config "_config.yml,_config.prod.yml"
