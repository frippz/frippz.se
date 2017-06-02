---
layout: page
title: Stuff for the CSS Grid Layout lab
menutitle: Grid
permalink: /grid/
---

A collection of links for the competence day at Jayway Malmö office as well as instructions for the lab.

### Really nice resources

* [CodePen.io](https://codepen.io) – excellent sandbox for labs
* [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) – a complete guide detailing all the properties covering CSS Grid Layout
* [Grid by Example](https://gridbyexample.com) – Rachel Andrew’s excellent collection of CSS Grid Layout examples
* [Firefox Developer Edition](https://www.mozilla.org/sv-SE/firefox/developer/) – Currently the only browser with specific tools for displaying a grid layout via the devtools

### Lab 1

Achieve the following layout:

[![](http://i.imgur.com/y2Swf6D.png)](http://i.imgur.com/y2Swf6D.png)

Use the following markup as a basis on CodePen. No need to wrap stuff in additional elements.

{% raw %}
~~~html
<header>header/banner</header>
<main>main</main>
<nav>navigation</nav>
<aside>complementary/aside</aside>
<footer>footer/contentinfo</footer>
~~~

If you want to run it locally, go ahead and use this instead:

~~~html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Lab</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>header/banner</header>
  <main>main</main>
  <nav>navigation</nav>
  <aside>complementary/aside</aside>
  <footer>footer/contentinfo</footer>
</body>
</html>
~~~
{% endraw %}

* Mobile first is preferable
* No need to worry about legacy browsers (yet…)
* Choose a suitable break point between larger and smaller viewports
* Avoid height properties on elements (`<body>` is exempt from this)
* The layout should cover *at least* the height of the browser viewport, but also allow for it to grow with content

### Lab 2

Based on the previous lab, add a photo grid in the `<main>` element. Use the following code if you like. The important part is that you mix landscape and portrait photos.

{% raw %}
~~~html
<div class="cards">
  <div class="card landscape">
    <h2>1</h2>
    <img src="http://frodlund.se/i/photo-2.jpg" alt="">
  </div>
  <div class="card">
    <h2>2</h2>
    <img src="http://frodlund.se/i/photo-1.jpg" alt="">
  </div>
  <div class="card">
    <h2>3</h2>
    <img src="http://frodlund.se/i/photo-1.jpg" alt="">
  </div>
  <div class="card landscape">
    <h2>4</h2>
    <img src="http://frodlund.se/i/photo-2.jpg" alt="">
  </div>
  <div class="card">
    <h2>5</h2>
    <img src="http://frodlund.se/i/photo-1.jpg" alt="">
  </div>
  <div class="card landscape">
    <h2>6</h2>
    <img src="http://frodlund.se/i/photo-2.jpg" alt="">
  </div>
  <div class="card">
    <h2>7</h2>
    <img src="http://frodlund.se/i/photo-1.jpg" alt="">
  </div>
  <div class="card">
    <h2>8</h2>
    <img src="http://frodlund.se/i/photo-1.jpg" alt="">
  </div>
  <div class="card">
    <h2>9</h2>
    <img src="http://frodlund.se/i/photo-1.jpg" alt="">
  </div>
  <div class="card landscape">
    <h2>10</h2>
    <img src="http://frodlund.se/i/photo-2.jpg" alt="">
  </div>
  <div class="card landscape">
    <h2>11</h2>
    <img src="http://frodlund.se/i/photo-2.jpg" alt="">
  </div>
  <div class="card">
    <h2>12</h2>
    <img src="http://frodlund.se/i/photo-1.jpg" alt="">
  </div>
  <div class="card landscape">
    <h2>13</h2>
    <img src="http://frodlund.se/i/photo-2.jpg" alt="">
  </div>
  <div class="card">
    <h2>14</h2>
    <img src="http://frodlund.se/i/photo-1.jpg" alt="">
  </div>
  <div class="card landscape">
    <h2>15</h2>
    <img src="http://frodlund.se/i/photo-2.jpg" alt="">
  </div>
</div>
~~~
{% endraw %}

Use spans on grid items and try to get your grid to place your photos in a masonry grid (hint: experiment with `grid-auto-flow` and see what you get).

### Lab 3

Use `@supports` to handle legacy browser support.
