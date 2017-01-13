---
title: Vim and Apple’s Touch Bar
description: Ways to handle the missing escape key in Vim on the new MacBook Pro with Touch Bar
tags:
  - tools
  - vim
  - apple
  - macbook pro
layout: post
external-link: http://csswizardry.com/2017/01/preparing-vim-for-apples-touch-bar/
published: 2017-01-13
---

Since we basically lost the escape key with the new MacBook Pros, Vim users needed a solid backup plan if they were to get one of the new laptops. Harry Roberts has put together some really nice things to consider with regards to the escape key:

> For almost as long as I’ve been using Vim–which is [a long time now](http://csswizardry.com/2014/06/vim-for-people-who-think-things-like-vim-are-weird-and-hard/)–I’ve been using `jj` and `jk` to leave Insert mode. These mappings are on the [Home Row](https://en.wikipedia.org/wiki/Touch_typing#Home_row), so always easy to reach, and the letter pairs very rarely (if ever) occur in the English language. If there were words that contained `jj` and `jk` next to each other then I would be flung straight into Normal mode any time I tried to write them. (The reason I haven’t mapped `kk` to Escape is because it does occur within words, e.g. bookkeeper.

What did I do? Well, as a macOS Sierra user, I just followed the advice of a former colleague and [remapped my Caps Lock key](http://www.jeffgeerling.com/blog/2016/remapping-caps-lock-key-escape-macos-sierra).

> **Update:** As of macOS Sierra 10.12.1, the Caps Lock -> Escape remapping can be done natively in the Keyboard System Preferences pane! To remap without any 3rd party software, do the following:
>
> * Open System Preferences and click on 'Keyboard'
> * Click on 'Modifier Keys...'
> * For 'Caps Lock (⇪) Key', choose '⎋ Escape'
> * Click 'OK'
>
> ([See screenshot for reference](http://www.jeffgeerling.com/sites/jeffgeerling.com/files/images/remap-caps-lock-to-escape.png)).
