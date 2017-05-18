---
title: Getting JSON Feed in Jekyll
description: How to create a Liquid template for JSON Feed
tags:
  - web
  - tech
  - jekyll
layout: post
published: 2017-05-18 09:30:00 +0100
date: 2017-05-18 09:30:00 +0100
---

[With regard to the previous post](/2017/05/18/json-feed/), here’s how I cooked up a Jekyll template for JSON Feed:

{% raw %}

~~~liquid
---
layout: null
sitemap:
  priority: 0.7
  changefreq: weekly
---
{
  "version" : "https://jsonfeed.org/version/1",
  "title" : "frippz.se",
  "home_page_url" : "https://frippz.se/",
  "feed_url" : "https://frippz.se/feed.json",
  "author" : {
    "url" : "https://twitter.com/frippz",
    "name" : "Fredrik Frodlund"
  },
  "icon" : "https://frippz.se/apple-touch-icon.png",
  "favicon" : "https://frippz.se/favicon-32x32.png",
  "items" : [
  {% for post in site.posts limit:100 %}
    {
      "title" : {{ post.title | jsonify }},
      "date_published" : "{{ post.date | date_to_rfc822 }}",
      "id" : "{{ post.url | prepend: site.baseurl | prepend: site.url }}",
      "url" : "{{ post.url | prepend: site.baseurl | prepend: site.url }}",
      {% if post.external-link %}
      "external_url" : "{{ post.external-link }}",
      {% endif %}
      "author" : {
        "name" : "Fredrik Frodlund"
      },
      "content_html": {{ post.content | xml_escape | jsonify }}
    }{% if forloop.last == false %},{% endif %}
  {% endfor %}
  ]
}
~~~

{% endraw %}

It’s a pretty quick and dirty port of my [feed.xml template](https://github.com/frippz/frippz.se/blob/master/feed.xml), but it seems to work. You can get the above [code snippet directly on Github](https://github.com/frippz/frippz.se/blob/master/feed.json) as well, but the syntax highlighter doesn’t like the YAML front matter and Liquid template tags too much, so it looks a bit ugly.