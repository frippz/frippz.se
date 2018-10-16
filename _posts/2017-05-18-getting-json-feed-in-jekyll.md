---
title: Getting JSON Feed in Jekyll
description: How to create a Liquid template for JSON Feed
tags:
  - web
  - tech
  - jekyll 
published: 2017-05-18 09:30:00 +0100
date: 2017-05-18 09:30:00 +0100
---

[With regard to the previous post](/2017/05/18/json-feed/), here’s how I cooked up a Jekyll template for JSON Feed:

{% raw %}
~~~liquid
---
layout: null
---
{
  "version" : "https://jsonfeed.org/version/1",
  "title" : "{{ site.title }}",
  "home_page_url" : "{{ site.url }}",
  "feed_url" : "{{ "/feed.json" | prepend: site.baseurl | prepend: site.url }}",
  "author" : {
    "url" : "https://twitter.com/frippz",
    "name" : "Fredrik Frodlund"
  },
  "icon" : "{{ "/apple-touch-icon.png" | prepend: site.baseurl | prepend: site.url }}",
  "favicon" : "{{ "/favicon-32x32.png" | prepend: site.baseurl | prepend: site.url }}",
  "items" : [
  {% for post in site.posts limit:10 %}
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
      "content_html": {{ post.content | jsonify }}
    }{% if forloop.last == false %},{% endif %}
  {% endfor %}
  ]
}
~~~
{% endraw %}

It’s a pretty quick and dirty port of my [feed.xml template](https://github.com/frippz/frippz.se/blob/master/feed.xml), but it seems to work. You can get the above [code snippet directly on Github](https://github.com/frippz/frippz.se/blob/master/feed.json) as well, but the syntax highlighter doesn’t like the YAML front matter and Liquid template tags too much, so it looks a bit ugly.

**_Update (2017-05-19):_** I’ve updated the code snippet a bit with more Jekyll tags for a more dynamic solution (like `site.url` and so on). Liquid template offers a great filter called `jsonify` that I’m using wherever applicable.
