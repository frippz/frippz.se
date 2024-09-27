---
title: Further sticky bookmarklet fun
description: I just couldn’t leave that poor bookmarklet alone and now it has turned into some kind of benevolent monster
date: 2019-09-23 11:37
updated: 2019-09-23 13:06
tags:
  - css
  - javascript
  - usability
---

I just couldn’t leave that poor bookmarklet alone, could I? Using the [previous version]({% post_url 2019-08-27-improving-the-fixed-sticky-bookmarklet %}) in the wild, I noticed some use cases where there was room for improvement. Right now my bookmarklet does two things:

* It checks the `<body>` for any scroll disabling styling and tries to unset it
* It finds any element with either `position: fixed` or `position: sticky` and deletes them

Sounds good enough, right? Well, not quite. I found one big glaring issue with this; headers. Many times, modern websites use `position: sticky` for headers. If I delete them — well, then I've broken the site a little too much.

Based on my *very* scientific research following this, by visiting as many as *ten websites*, I could conclude the following:

1. Most annoying overlays and modals is positioned using `position: fixed` — these we can safely destroy with fire
2. Most functional elements of a page, such as the header, uses `position: fixed` — these we want to keep, but away from scrolling view

These assumptions (dangerous as assumptions may be), lead me to modify the script accordingly.

```javascript
const elements = document.querySelectorAll('body *');
const body = document.querySelector('body');

if (getComputedStyle(body).overflow === 'hidden') {
  body.style.overflow = 'unset';
}

elements.forEach(function (element) {
  if (['-webkit-sticky', 'sticky'].includes(getComputedStyle(element).position)) {
    element.style.position = 'unset';
  }
  else if(['fixed'].includes(getComputedStyle(element).position)) {
    element.parentNode.removeChild(element);
  }
});
```

I first check for `position: sticky` styled elements, and instead of removing them, I force the inline style to `position: unset`. This will reset to the initial value of `position: static` and so "un-sticky" any such elements on the page. Everything else that has `position: fixed` will instead just get deleted.

There are of course some caveats with this approach, mostly that older sites might still have sticky-ish headers that are positioned with the `fixed` property. I believe this is fine. Compared to the previous version, that just killed everything in sight, regardless of `fixed` or `sticky`, we now get something a bit more precise.

I'm beginning to have trouble coming up with good names for these bookmarklets, so this time around I'm just calling it "unSticky". Besides, you’re completely free to name it whatever you wish.

<a href="javascript:void%20function(){const%20e=document.querySelectorAll(%22body%20*%22),t=document.querySelector(%22body%22);%22hidden%22===getComputedStyle(t).overflow%26%26(t.style.overflow=%22unset%22),e.forEach(function(e){[%22-webkit-sticky%22,%22sticky%22].includes(getComputedStyle(e).position)%3Fe.style.position=%22unset%22:[%22fixed%22].includes(getComputedStyle(e).position)%26%26e.parentNode.removeChild(e)})}();" class="bookmarklet">unSticky</a>

Ok, that’s it for now. Let’s see how long I can leave this one alone.

**Updated:** Well that didn't take long. My friend, [Joacim de la Motte](https://joacimlowgren.com/), decided to do some optimization for me. Apparently the <abbr title="Immediately invoked function expression">IIFE</abbr> is not really necessary, so I’ve removed it. The bookmarklet will still run without it.
