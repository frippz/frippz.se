#!/bin/sh

mkdir /srv/jekyll/.yarn
yarn install --production --frozen-lockfile --prefix /srv/jekyll/.yarn
yarn run deploy
jekyll build --config "_config.yml,_config.prod.yml"
