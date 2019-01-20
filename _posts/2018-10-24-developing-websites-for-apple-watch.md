---
title: Developing websites for Apple Watch
description: Getting your website to run smoothly on an Apple Watch, because why not?
tags:
  - html
  - css
  - apple watch
  - responsive design
external-link: https://marcus.io/blog/websites-on-apple-watch
---

As of WatchOS 5, you are able to render web content on the Apple Watch. [Marcus Herrmann did a write-up on the subject](https://marcus.io/blog/websites-on-apple-watch) this summer and after stumbling over it, I couldn't resist doing some testing on my own site. Actually, all I did was to add the following to my `<head>`:

```html
<meta name="disabled-adaptations" content="watch">
```

Also, I did some quick and dirty experimenting with a (very ugly) media query that _should_ target only Apple Watches. More testing is warranted.

```css
/* Apple Watch only? How can this possibly come back to bite me in the ass? */
@media only screen and (max-width: 22em) and (max-height: 357px) {

  html {
    font-size: 6.5vmax;
  }
}
```

It works… ok, I guess? It might need some more work.

***Update:*** It appears that my code blocks looks like crap at the moment. I will have to take a look at that at some point…
