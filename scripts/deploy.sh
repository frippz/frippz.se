#!/bin/sh

yarn install --production --pure-lockfile
yarn deploy
jekyll build --config "_config.yml,_config.prod.yml"
