---
title: I did dark mode for my blog
description: Dark mode is all the rage, so I added support for it on my own site, but forgot to write about it. So now I have.
date: 2019-10-14 10:40
tags:
  - css
---

Damn my laziness. If you happen to run macOS Mojave or iOS 13, you might’ve noticed that [I added support for dark mode quite a while back](https://github.com/frippz/frippz.se/commit/ba7aad6951154c9b2e1564f5314ea2b7f8f38b68). Silly ’ol me didn’t write about it, even though I was quite happy with myself for utilizing CSS custom properties to simplify the theming. Both [Chris Ferdinandi](https://gomakethings.com/easy-dark-mode-for-your-website-or-web-app/) and [Jeremy Keith](https://adactio.com/journal/15941) beat me to it (or rather, their posts got me to finally write at least _something_ about it).

### Prefer dark mode

In the words of Mozilla Developer Network, the `prefers-color-scheme` CSS media feature is used to detect if the user has requested the system use a light or dark color theme. The spec is part of Media Queries Level 5 with a status of "Editors’s Draft" as of writing this post.

~~~css
@media (prefers-color-scheme: dark) {
  /* Dark styles goes here */
}
~~~

I’m just glad that we’re (mostly?) past vendor prefixes at this point.

### The power of CSS custom properties

To keep all things related to dark vs. light themes in one place, I leveraged the power of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*). All colors that I use across the site is residing in a variables collection; `/css/00_variables.css`.

~~~css
:root {
  color-scheme: light dark;

  --body-background: hsl(45, 40%, 94%);
  --body-text: hsl(0, 0%, 20%);
}

@media only screen and (prefers-color-scheme: dark) {
  :root {
    --body-background: hsl(0, 0%, 20%);
    --body-text: hsl(45, 40%, 94%);
  }
}
~~~

This lets me keep only one instance of `prefers-color-scheme: dark` around, which is nice. All my other stylesheets just contain references to the custom properties.

~~~css
body {
  background-color: var(--body-background);
  color: var(--body-text);
}
~~~

If you already utilize the cascade to its full potential, which luckily I have, you really shouldn’t need to change styles much. One such instance is the use of `currentColor` property value.
