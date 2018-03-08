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
* [Box Alignment Cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment) – this cheatsheet compares alignment in CSS Grid Layout and Flexbox

### About the labs

Each lab shows a suggested markup. They’re there for your convenience, and you are totally free to do your own thing. Go nuts! 🤪

_Don’t forget to do a fallback solution for each lab as well! (hint: float and flexbox are nice fallbacks_ 😉_)_

### Lab 1 - Header, two columns and a footer

{% include image.html url="https://i.imgur.com/IjsrMdp.png" caption="Figure 1 - header, two columns and a footer" %}

#### Suggested markup

~~~html
<div class="wrapper">
  <header class="header">My header</header>
  <aside class="sidebar">Sidebar</aside>
  <article class="content">
    <h1>2 column, header and footer</h1>
    <p>This example uses line-based positioning, to position the header and footer, stretching them across the grid.</p>
  </article>
  <footer class="footer">My footer</footer>
</div>
~~~

### Lab 2 - Responsive header, two columns and a footer

This is example shows a two column pattern, with header and footer. Use media queries to move between a single and two column version.

{% include image.html url="https://i.imgur.com/IjsrMdp.png" caption="Figure 2.1 - Responsive header, two columns and a footer" %}

{% include image.html url="https://i.imgur.com/La3ofkI.png" caption="Figure 2.2 - Narrow viewport, single column" %}

#### Suggested markup

See [lab 1](#lab-1---header-two-columns-and-a-footer)

### Lab 3 - Using negative space

This example uses line-based positioning, to position the header and footer, stretching them across the grid.

By making the content span a number of rows, we can then space the blocks out next to that content. Each in their own row.

{% include image.html url="https://i.imgur.com/9Wp9lbU.png" caption="Header, 2 columns, footer using negative space" %}

#### Suggested markup

~~~html
<div class="wrapper">
  <header class="header">My header</header>

  <article class="content">
    <h1>Using negative space</h1>
    <p>This example uses line-based positioning, to position the header and footer, stretching them across the grid.</p>

    <p>By making the content span a number of rows, we can then space the blocks out next to that content. Each in their own row.</p>
  </article>

  <div class="block-a">Block A</div>
  <div class="block-b">Block B</div>
  <div class="block-c">Block C</div>
  <footer class="footer">My footer</footer>
</div>
~~~

### Lab 4 - As many as will fit

This is example shows a two column pattern, with header and footer. The centre panel contains a number of boxes. We want to have as many in each row as will fit, with the boxes lining up as rows and columns.

{% include image.html url="https://i.imgur.com/dEJG7eb.png" caption="Header, footer, centre panel containing as many items as will fit" %}

#### Suggested markup

~~~html
<div class="wrapper">
  <header class="header">My header</header>

  <div class="panel">Panel A</div>
  <div class="panel">Panel B</div>
  <div class="panel">Panel C</div>
  <div class="panel">Panel D</div>
  <div class="panel">Panel E</div>
  <div class="panel">Panel F</div>
  <div class="panel">Panel G</div>
  <div class="panel">Panel H</div>
  <div class="panel">Panel I</div>
  <div class="panel">Panel J</div>

  <footer class="footer">My footer</footer>
</div>
~~~

### Lab 4 - as many as will fit, some tall

This is example shows a two column pattern, with header and footer. The centre panel contains a number of boxes. We want to have as many in each row as will fit, with the boxes lining up as rows and columns.

Some of our items span two rows.

{% include image.html url="https://i.imgur.com/82l9j5x.png" caption="" %}

#### Suggested markup

~~~html
<div class="wrapper">
  <header class="header">My header</header>

  <div class="panel">Panel A</div>
  <div class="panel">Panel B</div>
  <div class="panel tall-panel">Panel C</div>
  <div class="panel">Panel D</div>
  <div class="panel">Panel E</div>
  <div class="panel">Panel F</div>
  <div class="panel tall-panel">Panel G</div>
  <div class="panel tall-panel">Panel H</div>
  <div class="panel">Panel I</div>
  <div class="panel">Panel J</div>

  <footer class="footer">My footer</footer>
</div>
~~~

### Lab 5 - media objects

A whole set of example media objects. These objects can be flipped, they can be nested, then can have a fixed column for the image or a flexible one.

{% include image.html url="https://i.imgur.com/mzNVylo.png" caption="" %}

#### Suggested markup

~~~html
<div class="media">

  <div class="img">
    <img src="http://placehold.it/250x250" alt="Placeholder">
  </div>
  <h2 class="title">This is my title</h2>
  <div class="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.
      Praesent quis risus id dolor venenatis condimentum.</p>
  </div>
  <div class="footer">
    An optional footer goes here.
  </div>

</div>

<div class="media media-flip">

  <div class="img">
    <img src="http://placehold.it/250x250" alt="Placeholder">
  </div>
  <h2 class="title">This is my title</h2>
  <div class="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus.
      Praesent quis risus id dolor venenatis condimentum.</p>
  </div>
  <div class="footer">
    An optional footer goes here.
  </div>

</div>
~~~

### Done with the labs?

Are you finished already? Or maybe it’s so late that the office alarm will soon kick in automatically. Check out the completed solutions for all of the above labs. Props and ❤️  to [Rachel Andrew](https://rachelandrew.co.uk) for creating all these awesome patterns!


<div class="showme-hidden">
<p><a href="https://gridbyexample.com/patterns/">https://gridbyexample.com/patterns/</a></p>
</div>

<script>
  const hiddenElem = document.querySelector('.showme-hidden');

  const showmeBtn = document.createElement('button');
  showmeBtn.setAttribute('type', 'button');
  showmeBtn.innerHTML = '✨Yes , yes! I’m done! Show me! ✨';

  hiddenElem.parentNode.insertBefore(showmeBtn, hiddenElem);

  hiddenElem.style.opacity = 0;

  showmeBtn.addEventListener('click', function () {
    hiddenElem.style.opacity = 1;
  });
</script>
