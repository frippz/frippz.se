---
title: Maybe some developers are just plain lazy
description: Some quick thoughts about why tooling has become such a big thing in modern web development and the cost it brings.
layout: post
published: 2015-05-16
---

In the wake of the news that Facebook has put out a new product that allows iPhone users to read news articles without leaving Facebook, several prominent characters on the web have put in their two cents on the matter.

[Peter-Paul Koch was, as always, spot on](http://www.quirksmode.org/blog/archives/2015/05/tools_dont_solv.html):

> The movement toward toolchains and ever more libraries to do ever less useful things has become hysterical, and with every day that passes I’m more happy with my 2006 decision to ignore tools and just carry on. **Tools don’t solve problems any more, they have *become* the problem.** There’s just too many of them and they all include an incredible amount of features that you don’t use on your site — but that users are still required to download and execute.

The trend is hard to miss. There’s an insane amount of tools and frameworks out there and using them is more the rule than the exception. PPK asks himself the question of why this is:

> Why all these tools? I see two related reasons: emulating native, and the fact that people with a server-side background coming to JavaScript development take existing tools because they do not have the training to recognise their drawbacks. Thus, the average web site has become way overtooled, which exacts a price when it comes to speed.

While I absolutely do not disagree with his conclusions, sometimes the answer seem to be even more simple, and depressing. Based on what I've seen throughout my career as a front end web developer, the reason often is that **developers are just plain lazy.** With the advent of libraries and frameworks such as jQuery, Twitter Bootstrap, and not to mention the torrent of CSS preprocessors such as LESS and SASS, developers have not only become disconnected from how to properly build something for the web on their own, some of them have also turned horribly lazy.

First of all, let's be clear about a few things. Just because you use a framework such as jQuery does not automatically make you lazy. Neither does the use of even Twitter Bootstrap. They all have their uses, and when used properly, they can save a developer loads of time. The problems start to come when you as a developer start to default to dropping in whatever framework comes to mind just because you couldn’t be bothered to give the problem at hand a few extra rounds of brain time. I've seen projects where hapless developers have thrown in jQuery UI (and I really mean everything that said framework has to offer including the kitchen sink) just to get a few tabs in their UI.

The same can be said for something like the CSS preprocessor SASS. While I personally are not very interested in their use and fail to see what good they are, they *can* be used responsibly, which of course is close to impossible since they open up for misuse at every turn. In either case, they can save a developer a lot of time, but often that comes at the cost overly bloated code instead. Not always, but *very* often.

Now, a lot of developers would surely scream bloody murder at me calling them lazy, citing insane product owners, psychotic project managers and ultra-tight deadlines as reasons for their use of all these frameworks. Maybe, maybe not. I believe, that just as frameworks and preprocessor tools open up for way too many ways to bloat you product, so does the aforementioned circumstances. They are all a source of stress for us as developers and it makes it damn hard not to fall into that trap of throwing tools at the problem.

The very uncomfortable truth might just be that you just lack the proper knowledge to effectively solve the problem at hand. Guess what, *that's totally fine*. It happens all the time to most developers. No one is perfect and what really makes you a professional is what you choose to do when faced with such problems. Maybe take a step back, admit that you don’t have the right tools for the problem and that you need to aquire them before continuing.

The thing is that the tools I'm talking about can't be downloaded as a zip file from some web site.
