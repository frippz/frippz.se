---
title: Killing both fixed and sticky headers
description: A quick post on a wonderful bookmarklet for removing sticky and fixed elements
tags:
  - css
  - javascript
  - usability
---

Last year someone linked to [an article by Alisdair McDiarmid](https://alisdair.mcdiarmid.org/kill-sticky-headers/) containing a bookmarklet that killed any element on a page that had the property `position: fixed;`. Or rather, it removed the styling in question so the element wasn’t fixed to the viewport anymore.

Knowing how the modern web sometimes might look, this type of bookmarklet is easy to love. However, with the advent of more modern solutions in CSS such as `position: sticky;`, the bookmarklet is in need of some updating. What better way than to do it yourself, then?

## Here’s the code

There’s just a few minor additions needed to the original code. In addition to checking for `position: fixed;`, we also need to check for `position: sticky;`. There’s one caveat, though. Safari still uses a vendor prefix for sticky positioning, so we need to make sure to look for `-webkit-sticky` as well.

```javascript
(function () {
  var i, elements = document.querySelectorAll('body *');

  for (i = 0; i < elements.length; i++) {
    if (["-webkit-sticky", "sticky", "fixed"].includes(getComputedStyle(elements[i]).position)) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
})();
```

All done! But this won’t do us any good unless it comes in the form of a handy bookmarklet, so here’s that as well. Drag this link to the bookmark bar of your browser of choice (or just save it).

<a class="bookmarklet" href="javascript:(function()%7B(function%20()%20%7Bvar%20i%2C%20elements%20%3D%20document.querySelectorAll('body%20*')%3Bfor%20(i%20%3D%200%3B%20i%20%3C%20elements.length%3B%20i%2B%2B)%20%7Bif%20(%5B%22-webkit-sticky%22%2C%20%22sticky%22%2C%20%22fixed%22%5D.includes(getComputedStyle(elements%5Bi%5D).position))%20%7Belements%5Bi%5D.parentNode.removeChild(elements%5Bi%5D)%3B%7D%7D%7D)()%7D)()">Kill fixed/sticky</a>

There's a [public gist](https://gist.github.com/frippz/7f9d008f386f55829967cce7609f5969) up if you want to fork the code and play around with it yourself. There's also a really neat [online tool for generating bookmarklets](https://mrcoles.com/bookmarklet/) of your own.

That’s it! Enjoy!
