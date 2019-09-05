---
title: Improved feeds
description: Blog syndication is an important corner stone of the internet and as such, I decided to improve my feeds.
tags:
  - rss
  - json feed
---

I get the feeling that things are happening when it comes to syndicated feeds online. A few years back, JSON Feed entered the scene, courtesy of [Brent Simmons and Manton Reece](https://jsonfeed.org/2017/05/17/announcing_json_feed). This summer, [the very same Brent Simmons released version 5 of NetNewsWire](https://ranchero.com/netnewswire/), a free and open source, pure-Mac application, that’s a joy to use. While light on features on its initial release, it’s snappy and stable. Even better, Brent made the decision to at least support one feed service on day one. As luck would have it, he chose the very excellent  [Feedbin](https://feedbin.com/home), a service that I've happily been paying for since day one of its release after the demise of Google Reader.

Anyway. After years of questionable alternatives to syndicated feeds (like Facebook, Twitter and whatever else people say they use instead), I've kept using RSS and Atom like a stubborn mule. Most sites worth its salt support syndicated feeds in some form, which allows users to easily consume content.

There’s of course the occasional fly in the ointment. And what's worse, I myself am guilty of it. I'm talking about only providing a short summary in the feed in order to drive traffic to the site itself. Well, no more. As of today, I've run a deploy that provides full content both via JSON Feed and Atom for this site. The reasons were quite simple:

* I don’t actually need to drive traffic to my site since I'm not doing any kind of advertising
* You as a reader have the option of consuming the content any way you like

The counter point, as mentioned by someone online, is that this makes it easier for less than honest people to "steal" content and publish it as their own somewhere else. My position on this is that these people very likely would do so anyway, and it’s not a strong enough argument against not making things easier for everyone else.

And so, here we are.
