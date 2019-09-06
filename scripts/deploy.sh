#!/bin/sh

mkdir /.yarn
yarn install --production --frozen-lockfile
yarn run deploy
jekyll build --config "_config.yml,_config.prod.yml"
