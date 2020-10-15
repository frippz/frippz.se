---
title: Considering viewports
description: Apple releases new iPhones and the rest is history
date: 2020-10-14 07:00
tags:
  - css
  - mobile
  - iphone
---

Following yesterdays [Apple event](https://www.apple.com/apple-events/october-2020/), I spent the morning perusing my RSS feed, as I do most mornings. One of the [articles from developer Michael Tsai](https://mjtsai.com/blog/2020/10/13/iphone-12-and-iphone-12-pro/) pondered the screen sizes of the new iPhone models. He compiled a list of most available models (including the older 5s/SE that’s no longer as easy to buy) and their viewport sizes in CSS pixels, or the unit he chose to describe them with; points.

<table>
  <thead>
    <tr>
      <th scope="col">iPhone Model</th>
      <th scope="col">Width</th>
      <th scope="col">Height</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5s/SE</td>
      <td>320 pts</td>
      <td>568 pts</td>
    </tr>
    <tr>
      <td>12 mini</td>
      <td>360 pts</td>
      <td>780 pts</td>
    </tr>
    <tr>
      <td>8/SE 2</td>
      <td>375 pts</td>
      <td>667 pts</td>
    </tr>
    <tr>
      <td>11 Pro</td>
      <td>375 pts</td>
      <td>812 pts</td>
    </tr>
    <tr>
      <td>12/12 Pro</td>
      <td>390 pts</td>
      <td>844 pts</td>
    </tr>
    <tr>
      <td>XR/11/11 Pro Max</td>
      <td>414 pts</td>
      <td>896 pts</td>
    </tr>
    <tr>
      <td>12 Pro Max</td>
      <td>428 pts</td>
      <td>926 pts</td>
    </tr>
  </tbody>
</table>
The iPhone 12 Mini is the model that I believe will be the "people’s iPhone". That is to say, it’ll most likely be the top seller. With that in mind, it’s interesting to note the width of the device. 360 CSS pixels. I’ve noticed in my day job that our designers have designed with the iPhone 8/SE 2 in mind, that is to say that they make their most narrow designs 375 CSS pixels. While that might be a problem in and of itself since there’s still plenty of devices out there that is reporting 320 CSS pixels and you should cater to these too, it’s interesting to note that our designers will _at least_ have to shave off 15 CSS pixels in their future designs, since this will very likely be the majority for the future.

Then again, if we all just built stuff fully flexible and did not cater to a specific minimum viewport, this wouldn’t be a problem at all.
