---
title: How we talk about CSS
description: CSS has come a really long way in just a few years and it’s no longer that hacky, weird “language” anymore.
tags:
  - css 
external-link: https://rachelandrew.co.uk/archives/2018/10/04/the-way-we-talk-about-css/
published: 2018-10-12
---

Rachel Andrew has been working on new material for upcoming talks and she have been thinking about how CSS has been perceived in the web developer community in the past, and how we should perhaps modify our thinking about it in the future, given how far it has come.

> CSS has been seen as this fragile language that we stumble around, trying things out and seeing what works. In particular for layout, rather than using the system as specified, we have so often exploited things about the language in order to achieve far more complex layouts than it was ever designed for. We had to, or resign ourselves to very simple looking web pages.

Back in 1998, when I started working with CSS, I found it to be mostly hacks and me trying to beat browsers into submission (I’m mostly looking at you, Internet Explorer). Now we have modern layout frameworks like Flexbox and CSS Grid, in addition to – as Rachel points out – many other technologies in CSS that might not be as well known. They are, however, very important.

> No available space? That’s ok. Nothing is going to break. We often don’t know how much content we have, so CSS gives us sizing based on min and max content sizes, allowing items to grow and shrink into their containing boxes. […]
>
> These features are part of the [Box Alignment](https://www.w3.org/TR/css-align-3/), [CSS Intrinsic and Extrinsic Sizing](https://www.w3.org/TR/css-sizing-3/), [Writing Modes](https://www.w3.org/TR/css-writing-modes-3/), and [Logical Properties and Values](https://www.w3.org/TR/css-logical-1/) specifications. These specifications tie together the individual layout methods into one system, with various methods to create the type of layout we need to see.

While there’s still much that is left to be desired, the technology has come such long way in just a few years. My day to day work has shifted significantly, from trying to make browsers jump through hoops while using CSS in ways it was probably never intended for, to actually letting me work more creatively.

One of the challenges over the years has been to communicate the importance of the frontend designer role. CSS is often seen as a “semi-language”, lacking features (interestingly such features that programmers often find useful), and would best be replaced with something else. This might be why we ended up with things like CSS-in-JS, convoluted preprocessor languages and insanities like CSS modules.

> There is frequently talk about how developers whose main area of expertise is CSS feel that their skills are underrated. I do not think we help our cause by talking about CSS as this whacky, quirky language. CSS is unlike anything else, because it exists to serve an environment that is unlike anything else.

I agree wholeheartedly with this. But I also think that not appreciating how powerful CSS is, and instead turning to convoluted tooling to solve non-existing problems, is not helping either. I fear that when developers refuse to learn about the core strengths of CSS and instead utilise tools that are based on misunderstandings of how CSS is fundamentally working, that becomes a problem. The work that people like Rachel are doing is very important and I'd hate to see that be undermined. I suppose time will tell.
