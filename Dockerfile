FROM jekyll/jekyll:4.0

RUN npm install -g yarn@1.17.3

WORKDIR /srv/jekyll

COPY Gemfile* /srv/jekyll/

RUN bundle install
