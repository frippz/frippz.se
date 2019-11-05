---
title: Tags in JSON Feed
description: I felt the need to tinker even more with my JSON Feed and so I added support for tags
date: 2019-09-05 11:55
tags:
  - jekyll
  - json feed
---

It seems I just can’t stop tinkering with my site. I was doing some optimizing of my deploy scripts (which now runs via Docker, because why the hell not), when I out of the blue re-read the JSON Feed spec and saw that there was an optional support for tags.

From the [JSON Feed spec](https://jsonfeed.org/version/1):

> `tags` (optional, array of strings) can have any plain text values you want. Tags tend to be just one word, but they may be anything. Note: they are not the equivalent of Twitter hashtags. Some blogging systems and other feed formats call these categories.

An array in JSON is pretty much just this:

~~~json
[ "item-1", "item-2", "item-3" ]
~~~

In context, according to the spec, each item in the items array would need the following (assuming our post has the tags "css" and "html"):

~~~json
"tags": [
  "css",
  "html"
]
~~~

### Getting things done in Jekyll

So this whole exercise revolves around you putting an array of tags in your front matter for each post. I’m pretty much assuming that this is something that you’ve already done, but just in case, here’s a sample post:

~~~markdown
---
title: My blog post
tags:
  - css
  - html
---

Some thoughtful content…
~~~

Considering [my previous post about getting JSON Feed in Jekyll]({% post_url 2017-05-18-getting-json-feed-in-jekyll %}), here’s the additional Liquid we need to get these tags in the JSON Feed code:

~~~liquid
{% raw %}{% if post.tags %}
"tags": [
{% for tag in post.tags %}
  "{{ tag }}"{% if forloop.last == false %},{% endif %}
{% endfor %}
],
{% endif %}{% endraw %}
~~~

Since JSON is picky with trailing commas, we need to utilize `foorlop.last` in order to keep tabs on whether we’re at the last item in the loop or not. Also note the trailing comma after the last bracket on the sixth row. Depending on where you put this snippet in your JSON Feed template, you may or may not need it.

### Putting it all together

Here’s the full code for my own `feed.json` template, complete with the new section for tags.

~~~liquid
{% raw %}---
layout: null
sitemap:
  priority: 0.7
  changefreq: weekly
---
{
  "version" : "https://jsonfeed.org/version/1",
  "title" : "{{ site.title }}",
  "home_page_url" : "{{ site.url }}",
  "feed_url" : "{{ "/feed.json" | absolute_url }}",
  "author" : {
    "url" : "{{ site.url }}",
    "name" : "{{ site.author }}"
  },
  "icon" : "{{ "/apple-touch-icon.png" | absolute_url }}",
  "favicon" : "{{ "/favicon-32x32.png" | absolute_url }}",
  "items" : [
  {% for post in site.posts %}
    {
      "title" : {{ post.title | jsonify }},
      "date_published" : "{{ post.date | date_to_xmlschema }}",
      {% if post.updated %}
      "date_modified": "{{ post.updated | date_to_xmlschema }}",
      {% else %}
      "date_modified": "{{ post.date | date_to_xmlschema }}",
      {% endif %}
      "id" : "{{ post.url | absolute_url }}",
      "url" : "{{ post.url | absolute_url }}",
      "author" : {
        "name" : "{{ site.author }}"
      },
      "summary": {{ post.description | jsonify }},
      {% if post.tags %}
      "tags": [
      {% for tag in post.tags %}
        "{{ tag }}"{% if forloop.last == false %},{% endif %}
      {% endfor %}
      ],
      {% endif %}
      "content_text": {{ post.content | strip_html | strip_newlines | jsonify }},
      "content_html": {{ post.content | strip_newlines | jsonify }}
    }{% if forloop.last == false %},{% endif %}
  {% endfor %}
  ]
}{% endraw %}
~~~

There we go! We now have tags from each post in our JSON Feed.
