---
title: The war against sticky toolbars continue
description: My anti-sticky bookmarklet get a much needed update
date: 2020-09-08 09:00
tags:
  - css
  - javascript
  - usability
---

The wars against sticky toolbars, annoying overlays, unwarranted modals and scroll-locking continues. It’s a never-ending war of attrition. It’s been close to a year since [I last updated my bookmarklet and since]({% post_url 2019-09-23-further-sticky-bookmarklet-fun %}), I’ve come across more annoying ways to mess with the user experience on different websites.

Scenarios that my bookmarklet didn’t handle:

* Setting `overflow: hidden !important` thus escalating the specificity wars further (my original script just set `overflow: unset;` which didn’t override `!important` styles)
* The above styling was not just set on the `<body>` element, but also the `<html>` element, sometimes at the same time to really make sure that the poor user can’t scroll

No need to beat around the bush, this is the updated script.

```javascript
const elements = document.querySelectorAll('body *');
const containers = document.querySelectorAll('html, body');

containers.forEach(el => {
  if (getComputedStyle(el).overflow === 'hidden') {
    el.style.setProperty ('overflow', 'unset', 'important');
  }
});

elements.forEach(function (element) {
  if (["-webkit-sticky", "sticky"].includes(getComputedStyle(element).position)) {
    element.style.position = "unset";
  }
  else if(["fixed"].includes(getComputedStyle(element).position)) {
    element.parentNode.removeChild(element);
  }
});
```

The biggest changes are that I had to use `body.style.setProperty` instead of `body.style.overflow` in order to also set `!important`. In addition, I’m also checking for that styling on the `<html>` element and unset it there if needed.

As always, below is the packaged bookmarklet for you to drag into your own bookmarks. This time featuring a cool emoji, fitting the situation.

<a href="javascript:void%20function(){const%20e=document.querySelectorAll(%22body%20*%22),t=document.querySelector(%22body%22);%22hidden%22===getComputedStyle(t).overflow%26%26(t.style.overflow=%22unset%22),e.forEach(function(e){[%22-webkit-sticky%22,%22sticky%22].includes(getComputedStyle(e).position)%3Fe.style.position=%22unset%22:[%22fixed%22].includes(getComputedStyle(e).position)%26%26e.parentNode.removeChild(e)})}();" class="bookmarklet">☠️ unSticky</a>

Big thanks to [Joacim de la Motte](https://joacimlowgren.com/) for providing valuable feedback and helping me improve the script.
