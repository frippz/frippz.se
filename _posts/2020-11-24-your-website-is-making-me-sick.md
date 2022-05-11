---
title: Your website is making me sick — or why you should respect the preferences of your users
description: On the importance of respecting your more sensitive users
date: 2020-11-24 16:00
updated: 2022-05-11 07:51
tags:
  - a11y
  - accessibility
  - css
---

There’s an accessibility setting in macOS and iOS that allows users to reduce motion in the interface. On iOS, this removes animations in the OS itself and well made apps should also respect this setting. In CSS there’s a media query for it; `(prefers-reduced-motion: reduce)`, which has for example been supported in Safari since version 10.1. If you are using animations on your website, consider adding this snippet to your stylesheet.

```css
@media screen and (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.001ms !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

But why didn’t I remove the transition and animation durations altogether? Well, retaining the durations but changing them to something that’s imperceptible to the human eye, helps to avoid breaking anything that is tied to CSS-based animations. Make sure test your site, though. I've seen stuff break in the weirdest of ways with this styling, so your mileage may vary. Resetting `animation-iteration-count` disables infinite animations, instead of making the loop crazy fast!

### Browser and OS support

Almost all of the major browsers has had support for a good while, the exception being Legacy Edge, which lacks support entirely. Check [caniuse.com](https://caniuse.com/prefers-reduced-motion) for more details.

Supporting browsers can read this preference from the OS of your choice. A few examples below.

#### Windows 10

  1. Settings
  1. Ease of Access
  1. Display
  1. Show animations in Windows.

#### Windows 7

  1. Control Panel
  1. Ease of Access
  1. Make the computer easier to see
  1. Turn off all unnecessary animations (when possible).

#### macOS

  1. System Preferences
  1. Accessibility
  1. Display
  1. Reduce motion.

#### iOS/iPadOS

  1. Settings
  1. General
  1. Accessibility
  1. Reduce Motion.

#### Android 9+

  1. Settings
  1. Accessibility
  1. Remove animations.

Remember, respect your users. ❤️
