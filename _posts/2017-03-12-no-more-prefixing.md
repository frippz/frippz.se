---
title: No more prefixing
description: Time to drop all these vendor prefixes in my CSS
tags:
  - css
  - browser support
  - progressive enhancement 
published: 2017-03-12
---

As I was tinkering with the code for this site, as one does on a Sunday afternoon, I came to realise that I hadn't done some proper, old-school browser testing in Internet Explorer for a while. I had been doing a lot of refactoring in my `gulpfile.js` and exchanged some packages for others, most notably the package for minifying my CSS. I had been using [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano) for quite a while without giving it any thought (I can’t even remember which package I had use prior to that one).

Opening the site up in Internet Explorer 9 on Windows 7 revealed that a few things like font declarations didn't work at all and after some debugging it turned out that cssnano was indeed the culprit. I didn't delve too deeply into the cause of the issue, but instead ended up switching to [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css), since it did the same thing without breaking IE compatibility. Good enough!

While debugging in IE, something else did catch my eye, though. Man, there sure is a lot of prefixed properties in here! Most of them was for flexbox, which I'm only using on a few places like the footer and the main layout to get a sticky footer on pages with less content. Dropping these would mean that IE 10, to name one, would not get the same slick layout (well, slick-<em>ish</em>, you know…) as modern browsers. And you know what? _That’s just fine._ The upside was that I got to trim away a few packages in my `node_modules` folder, not to mention that I got to delete a few extra lines in my `gulpfile.js`. That felt really good!

I did some checking and since I use `display: inline-block;` on elements that normally would be flex-items in supporting browsers to at least get them to appear next to each other, things looked pretty ok. Nothing looked too broken and all the content was fully accessible.

So what am I getting at with all this rambling, then? Well, most vendor prefixes are on their way out the door and to my knowledge, new prefixes are not coming in anymore. If we just apply some progressive enhancement thinking to our CSS as well, we can cut down on complexity in our tool stacks (and you _know_ that’s normally not a thing these days!), plus we're also cutting down on the amount of code our users are downloading.

Almost all major browsers are evergreen today and feature support is rapidly progressing across the board. Vendor prefixes was an unfortunate hiccup along the way, that got picked up by developers and misused. It’s time we left that stuff behind us.
