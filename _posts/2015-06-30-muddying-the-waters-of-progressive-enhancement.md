---
title: Muddying the waters of progressive enhancement
description: Musings on how the term “progressive enhancement” are losing its meaning to some people, causing confusion.
tags:
  - progressive enhancement
  - javascript
layout: post
published: 2015-06-30
---

I did some work on a project for a client yesterday, where I was working on some specific JavaScript based functionality. By some weird chance, the JavaScript didn't execute due to some weird error and nothing was showing up in the browser console. Later on it was found to be Webpack that didn't build the file, hence no JavaScript. Anyway, this little event prompted me to post the following on Twitter:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Why is my JavaScript not doing its stuff?! Oh, it’s not executing at all…&#10;&#10;See now kids why progressive enhancement is important? (^ω^)</p>&mdash; Fredrik Frodlund (@frippz) <a href="https://twitter.com/frippz/status/615474618841858048">June 29, 2015</a></blockquote>

Apparently, this just rubbed some people the wrong way.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/frippz">@frippz</a> PE is much more than &quot;needs to work without JS&quot; though.</p>&mdash; Anders Ekdahl (@andersekdahl) <a href="https://twitter.com/andersekdahl/status/615484523221020673">June 29, 2015</a></blockquote>

Which is absolutely correct, which [Christian Heilmann has pointed out very well](http://christianheilmann.com/2015/02/18/progressive-enhancement-is-not-about-javascript-availability/). But you can't always get everything you want into 140 characters. Then came the tweet that set off about an hour’s worth of what I've come to loathe; arguing over Twitter:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/frippz">@frippz</a> And you can certainly be doing PE but still require JS.</p>&mdash; Anders Ekdahl (@andersekdahl) <a href="https://twitter.com/andersekdahl/status/615485466352201728">June 29, 2015</a></blockquote>

Needless to say, I disagreed with this. Not in full, mind you. You certainly can and *should* apply progressive enhancement to your JavaScript as well, but I really see little point in drawing your line there and call it a day. What ensued was a discussion on *what* progressive enhancement should mean. Or rather, what *we* thought it meant.

Back in 2008, Aaron Gustafson wrote for A List Apart on progressive enhancement.

> Getting into the progressive enhancement mindset is quite simple: just think from the content out. The content forms the solid base on which you layer your style and interactivity. If you’re a candy fan, think of it as a Peanut M&M:
>
> ![](http://alistapart.com/d/understandingprogressiveenhancement/m-m.jpg)
> Start with your content peanut, marked up in rich, semantic (X)HTML. Coat that content with a layer of rich, creamy CSS. Finally, add JavaScript as the hard candy shell to make a wonderfully tasty treat (and keep it from melting in your hands).

This is a great description of what progressive enhancement is, and even if this article is coming up on being seven years old, I see no reason why this definition should change. The key here is the rock solid foundation; the content. You can't base this on JavaScript and call this your baseline. Take away the JavaScript ([which still happens all the time](http://kryogenix.org/code/browser/everyonehasjs.html)), and you’re left with an empty page. Not very rock solid.

I do realise that we’re drifting into the deep waters of semantics and that while Anders do have a point of sorts, that progressive enhancement can certainly be applied to just JavaScript, the underlying idea of a rock solid foundation goes out the window. What’s worse to me is the confusion this causes.

Imagine the following scenario, if you will. Developers express an intention to develop a web site using progressive enhancement. Jubilations all around!

> **Developer 1:** *”Alright! We’re going to start with a rock solid foundation of semantic HTML, then we'll add styling using CSS to carefully…”*
>
> **Developer 2:** *”Uh…”*
>
> **Developer 1:** *”What?”*
>
> **Developer 2:** *”That’s not what progressive enhancement is. We need to require JavaScript for this.”*

I don’t know. Maybe the core problem is the semantics and like Jason Garber says: maybe we should just call it [Responsible Web Design](http://sixtwothree.org/posts/responsible-web-design). While I don’t feel that core functionality without JavaScript is some kind of ”baggage”, maybe there’s a point to it. I just don’t feel that it is very responsible to scrape the icing off the layer cake and ignore the rest of the layers.
