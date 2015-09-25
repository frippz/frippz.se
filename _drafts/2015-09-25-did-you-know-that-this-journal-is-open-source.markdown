---
title: Did you know that this journal is open source?
layout: post
published: 2015-09-25
---

Almost from day one, I wanted this particular website’s source code to be publicly available. I’m not just talking about the JavaScript and CSS. Those things, while minified and concatenated, can fairly easily be extracted, prettified and sort of separated into logical parts again. But since this entire site is generated using Jekyll, I wanted that part to be publicly available as well. Github does a wonderful job of making this happen in an easy way.

I’d like to share a few words about how this entire thing is tied together (which, at times, it feels like is nothing but shoestring and chewing gum).

## The functional prototype

At the beginning of my career, I got into the practice of separating the frontend with whatever backend that might end up serving the former. I was taught that this is a good way of focusing on the frontend layer and its quality assurance. It is a practice that has served me well over the years, so I’ve been continuing the practice to this day.

What a functional prototype actually means is that you create something using _only_ HTML, CSS and, if needed, JavaScript. You’re creating a mocked up representation of the final product, without any working backend or live data (but if you wish, you’re of course free to use authentic content instead of lorem ipsum).

The prototype for this journal is available on [Github](https://github.com/frippz/blog-prototype).

### How it works

My particular example is a super basic solution, using only static HTML templates that are hand-coded, some vanilla CSS and a immensely small amount of JavaScript.

~~~bash
prototype/
├── gui/
│   ├── css/
│   ├── fonts/
│   ├── i/
│   └── js/
└── temp/
~~~

As you can see, we've got a `gui` folder, containing subfolders for CSS, custom fonts (right now only font icons), a few images and lastly the JavaScript. Nothing fancy. At its root is all the templates in the form of simple HTML files. The `temp` folder at the root of the project contains any sample files that aren’t needed for the live project.
