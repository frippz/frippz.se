#!/bin/sh

yarn install --production --pure-lockfile
yarn run deploy
jekyll build --config "_config.yml,_config.prod.yml"
