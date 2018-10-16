---
title: Fixing blurry text on hardware accelerated elements
description: A quick fix to prevent blurry text when applying translate3d on elements
tags:
  - css3
  - html5
  - animation 
published: 2016-02-04
---

A customer project I was working on had the need for animated bubbles with text in them. They were used as information overlays and needed to move around smoothly. To accomplish this, all you need to do is apply `transform: translate3d(0,0,0);` to the element in question to enable hardware acceleration in most modern browsers. This, however, caused another issue; blurry text.

Doing a little bit of research revealed that for example Chrome and Safari transforms vector based text into textures when you apply `translate3d`, which in turn risks causing blurry text on the elements in question. The fix seems suspiciously simple.

~~~css
.element-with-blurry-text {
  filter: blur(0);
}
~~~

This has appeared to have worked nicely in at least Safari 9 and Chrome 48. Some people have recommended to also add `transform: translateY(0);` as well, but I have been unable to confirm that this has any effect whatsoever. Your mileage may vary.
