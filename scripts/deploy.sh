#!/bin/sh

bundle install
yarn install
yarn deploy
jekyll build --config "_config.yml,_config.prod.yml"
