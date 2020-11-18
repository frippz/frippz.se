---
title: Labs
permalink: /labs/
---

This is where I collect all my experimental stuff, either from earlier posts or from whatever my brain once wrought upon the world.

If you find something interesting and you want to use it, feel free! Everything is contained within the same file, so all you have to do is check the source.

{% for lab in site.labs %}
  * [{{ lab.title }}]({{ lab.url }})
{% endfor %}
