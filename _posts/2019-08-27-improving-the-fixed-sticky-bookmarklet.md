---
title: Improving the fixed/sticky bookmarklet
description: A follow-up post on a wonderful bookmarklet for removing sticky and fixed elements, this time improved a bit further
tags:
  - css
  - javascript
  - usability
---

Last week [I wrote about a bookmarklet I found online]({% post_url 2019-08-20-killing-sticky-headers %}). I found that there was some room for improvement since the bookmarklet didn't handle the more modern variant of `position: sticky;`.

While using my new and (sort of) improved bookmarklet, I noticed that on some sites, annoying overlays not only covered the content, but also disabled scrolling of the entire page. So if you were to remove all elements that were either fixed or sticky, you still couldn’t scroll the page. Normally, I would often reach for the built-in reader mode of Safari to get to the content. However, this might not always be possible or applicable, depending on the site’s content.

Most sites disable scrolling by simply setting `overflow: hidden;` on the `<body>`. So all we have to do is look for this property and then unset it.

## The code – improved

I took the liberty of adopting more modern ES6 syntax this time. This of course limits the browser support, but if you’re using something older, like Internet Explorer – well, sucks to be you, my friend. 😉

```javascript
(function () {
  const elements = document.querySelectorAll('body *');
  const body = document.querySelector('body');

  if (getComputedStyle(body).overflow === 'hidden') {
    body.style.overflow = "unset";
  }

  elements.forEach(function (element) {
    if (["-webkit-sticky", "sticky", "fixed"].includes(getComputedStyle(element).position)) {
      element.parentNode.removeChild(element);
    }
  });
})();
```

It’s important to use the `unset` property for `overflow`, since any CSS we’re setting via JavaScript in this manner becomes a `style` attribute on the target element. So this means that we have to override any styling set via an external stylesheet.

## Improved, but not perfect

So this improvement might handle _most_ cases, but not all of them. There’s almost as many ways to mess with the user experience as there are websites. I’d be happy for any feedback and suggestions to improve this bookmarklet. The easiest way is of course via the [public Gist I’ve set up for the bookmarklet code](https://gist.github.com/frippz/7f9d008f386f55829967cce7609f5969). [There’s also a CodePen](https://codepen.io/frippz/pen/oNvBxXo) if you want to fork and play around easily.

Finally, here’s the updated bookmarklet, for your convenience.

<a class="bookmarklet" href="javascript:(function()%7B(function%20()%20%7Bconst%20elements%20%3D%20document.querySelectorAll('body%20*')%3Bconst%20body%20%3D%20document.querySelector('body')%3Bif%20(getComputedStyle(body).overflow%20%3D%3D%3D%20'hidden')%20%7Bbody.style.overflow%20%3D%20%22unset%22%3B%7Delements.forEach(function%20(element)%20%7Bif%20(%5B%22-webkit-sticky%22%2C%20%22sticky%22%2C%20%22fixed%22%5D.includes(getComputedStyle(element).position))%20%7Belement.parentNode.removeChild(element)%3B%7D%7D)%3B%7D)()%7D)()">Kill sticky/fixed</a>

Happy browsing!
