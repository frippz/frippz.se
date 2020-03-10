---
title: Facebook discovers that native is better (updated)
description: The web just can’t compete with native on performance.
date: 2020-03-09 07:30
updated: 2020-03-09 09:25
tags:
  - web
  - apps
  - native
---

The engineers over at Facebook rolled out a new Messenger app and later on posted a blog about the project, dubbed [Project LightSpeed](https://engineering.fb.com/data-infrastructure/messenger/).

> - We are excited to begin rolling out the new version of Messenger on iOS. To make the Messenger iOS app faster, smaller, and simpler, we rebuilt the architecture and rewrote the entire codebase, which is an incredibly rare undertaking and involved engineers from across the company.
> - Compared with the previous iOS version, this new Messenger is twice as fast to start and is one-fourth the size. We reduced core Messenger code by 84 percent, from more than 1.7M lines to 360,000.
> - We accomplished this by using the native OS wherever possible, reusing the UI with dynamic templates powered by SQLite, using SQLite as a universal system, and building a server broker to operate as a universal gateway between Messenger and its server features.

What’s gotten people’s attention online is that they seem to have accomplished this by axing React Native and going (possibly mostly) full native. The reaction has been just what you'd expect; *no shit, Sherlock*. I love the web and (at least most of) it's many technologies. These days you can accomplish amazing things with HTML, CSS and JavaScript.

*But web just can’t compete with native.*

I’m not going to stick my neck out and say that it never will, but I honestly don’t see that happening for many years to come. Plus, as front end developer since the 90s, I don’t see web technologies as the correct set of tools for building such apps. I loathe Electron and other stuff that’s not native to Mac, for example. I feel the same way about iOS as well. I want snappy, responsive and native apps on all my platforms. Looks like the engineers over at Facebook wants that too.

**Updated:** The Messenger app [was apparently native before the rewrite as well](https://twitter.com/dan_abramov/status/1234801507805138945), so the title of this post is pretty off target. My point about native vs. web still stands, though.

