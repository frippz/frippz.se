---
title: Thoughts on a modern CSS reset
description: A modern CSS reset? Was the old one, old? I think it looks interesting in any way.
date: 2019-10-09 10:45
tags:
  - css
---

I never was a fan of using someone elses CSS reset, like Normalize or even Eric Meyer’s reset.css, but this [modern take of a CSS reset](https://hankchizljaw.com/wrote/a-modern-css-reset/) caught my eye for several reasons.

> In this modern era of web development, we don’t really need a heavy-handed reset, or even a reset at all, because CSS browser compatibility issues are much less likely than they were in the old IE 6 days. That era was when resets such as [normalize.css](https://github.com/necolas/normalize.css/) came about and saved us all heaps of hell. Those days are gone now and we can trust our browsers to behave more, so I think resets like that are probably mostly redundant.

The reset for lists is frickin’ genius!

~~~css
/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}
~~~

Why didn't I think of that?

Extra bonus points for the piece by piece explanations for each section. 