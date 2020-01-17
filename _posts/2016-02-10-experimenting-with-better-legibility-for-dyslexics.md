---
title: Experimenting with better legibility for dyslexics
description: An quick experiment to improve legibility for people with dyslexia
tags:
  - accessibility
  - dyslexia
  - html
  - javascript
  - css
published: 2016-02-10
---

This morning, [Heydon Pickering](https://www.heydonworks.com) posted a link to an article detailing how special typefaces for dyslexics basically don’t work as expected.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Fonts &quot;for dyslexics&quot; is not inclusive design. More like target marketing. And it doesn&#39;t work. <a href="https://t.co/HS8JxwPpt6">https://t.co/HS8JxwPpt6</a></p>&mdash; Heydon (@heydonworks) <a href="https://twitter.com/heydonworks/status/697342047833976832">February 10, 2016</a></blockquote>

Intrigued by this, as I have seen a few of these special typefaces and always wondered _how_ they would help people with dyslexia, I had to read on. What caught my eye next was the proposed alternative to relying on special typefaces alone.

> Is there anything that can be done through type to make reading easier for dyslexics? Yes. Studies have shown that dyslexics read up to 27% faster when text lines are very short, up to 18 characters per line, compared to the 60-65 characters of standard text. Putting as much space as possible between letters helps dyslexics too.

Sounds simple enough. With a bit of extra styling, this could be done easily, provided your front end code is up to snuff. Your front end code _is_ up to snuff, right?

### Using my own journal as an experiment

This is precisely why I keep a journal online; doing cool experiments (besides incoherent rambling, of course). With a few quick additions to my stylesheets and some quick and dirty hacking with JavaScript, I managed to quickly deploy a solution for my experiment. As per the article’s suggestion, I wanted to do a few simple things:

* Decrease line width (i.e. fewer characters per line)
* Increase letter spacing
* Increase line height
* Slightly increased font size

As one would expect, this wouldn’t require more than a few lines of extra code in the stylesheets. In addition, I also added some JavaScript to enable users to toggle the functionality.

#### The code

The basic concept involves just setting a modifier class to the `<body>` element. This would increase `font-size`, `line-height` and `letter-spacing`. In addition, the container for my content, `.landmark-content` as it is called, would have its width reduced in order to provide shorter lines of text.

~~~css
/**
 * Dyslexic mode toggle
 */
.dyslexic-mode {
  font-size: 1.4em;
  letter-spacing: .25em;
  line-height: 2;
}
.dyslexic-mode .landmark-content {
  max-width: 26em;
}
~~~

I also added some quick styling for a `<button>` to be placed inside my banner region, to allow toggling of my dyslexics mode.

~~~css
/* Toggle button */
.toggle-dyslexic-mode {
  font-size: .65em;
  margin-top: 0;
  position: absolute;
  top: 1.5em;
  right: 0;
}
~~~

JavaScript certainly isn’t my strongest skill, but I manage to get by. All we need to do in order to toggle our dyslexics mode is to toggle the modifier class on the `<body>`. To get a little progressive enhancement into the mix, I also added the toggle button with JavaScript. This of course means that if JavaScript is not available to the user, they can’t toggle the dyslexics mode. Then again, we won’t have a silly button in the banner region that does nothing.

~~~javascript
/**
 * Toggle dyslexic mode
 */
function dyslexicMode() {

  // Place button inside role="banner"
  var toggleContainer = document.querySelector('[role="banner"] .landmark-content');

  // Create toggle button
  toggleContainer.insertAdjacentHTML('beforeend', '<button type="button" class="toggle-dyslexic-mode" data-text-original="Enable dyslexic mode" data-text-swap="Disable dyslexic mode">Enable dyslexic mode</button>');

  // Cache button selector
  var dyslexicButton = document.querySelector('.toggle-dyslexic-mode');

  // Function to toggle class and swap text on button
  function toggleDyslexicMode() {
    // Toggle the clas on <body>
    document.body.classList.toggle('dyslexic-mode');

    // Swap text on <button>
    if (dyslexicButton.getAttribute("data-text-swap") == dyslexicButton.innerHTML) {
      dyslexicButton.innerHTML = dyslexicButton.getAttribute("data-text-original");
    } else {
      dyslexicButton.setAttribute("data-text-original", dyslexicButton.innerHTML);
      dyslexicButton.innerHTML = dyslexicButton.getAttribute("data-text-swap");
    }
  }

  // Swap class & text on click
  dyslexicButton.addEventListener("click", toggleDyslexicMode, false);
}

dyslexicMode();
~~~

Note that I chose to do this with vanilla JavaScript, without any jQuery, because I really need to kick that awful habit of mine. As I said, this is pretty quick and dirty, so browser support is basically Internet Explorer 10 and up. Doing this with jQuery would likely be a few less lines of code (but then you’d also need to pull in the library). Since I employ the mustard cutting method for my journal, this code would never be run in legacy browsers anyway.

### Taking this experiment further

Right now, users would need to toggle the function on each page visit. Nothing is being remembered, even within the same session. Hey, it’s a beta. Also, I’ve eyeballed the typographic tweaks and would need feedback from real people with dyslexia, in order to improve this or to even validate that this is something viable.

If you wish to give me feedback on this, feel free to hit me up on [Twitter](https://twitter.com/frippz)!

**_Update (2016-02-10):_** I’ve added two screenshots to showcase the difference between the two modes, should you have any issues toggling the looks of my own journal.

{% include image.html url="//frippz-se.s3.amazonaws.com/frippz.se-without-dyslexic-mode.png" caption="Pictured above: frippz.se without dyslexic mode" %}

{% include image.html url="//frippz-se.s3.amazonaws.com/frippz.se-with-dyslexic-mode.png" caption="Pictured above: frippz.se with dyslexic mode" %}

**_Update (2016-02-11):_** [Kseso](https://twitter.com/kseso) did an [alternative solution](http://codepen.io/Kseso/pen/NxedYR?editors=1100) using only HTML and CSS. While my current solution does use modern DOM API:s, it can pretty easily be adapted to support legacy browsers as well. Kseso’s solution relies on the `:checked` pseudo class, which limits the implementation possibilities a bit and won’t work in IE8 and below. Depending on your particular situation, this isn’t necessarily a problem.

**_Update (2016-11-11):_** [As per this post](/2016/11/11/ending-the-dyslexia-experiment/), I’ve now disabled the toggle button on my own site and will be updating with a separate lab page to showcase the functionality.
