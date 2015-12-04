---
title: Everyone uses JavaScript, right?
description: Although some people would like to think otherwise, there are cases out there when JavaScript just isn’t available.
layout: post
published: 2015-04-27
---

Last week, a link came up in my Twitter feed that resonated very well with me, as is often the case when it comes to posts and articles championing the practice of progressive enhancement and responsible use of JavaScript. The article in question was titled "[Everyone has JavaScript, right?](http://kryogenix.org/code/browser/everyonehasjs.html)"

This morning, [Aaron Gustafson linked](https://twitter.com/AaronGustafson/status/592538938256060417) to a comment on Reddit from a discussion thread regarding that page, that resonated equally well with me. For the sake of posterity, I've choosen to quote the comment in it's entirety here.

>> Why is this difficult?
>
> Because it's not a blog full of content - it's a revolutionary interactive animated graphical UI paradigm which *merely happens* to deliver textual content to users.
>
> They aren't really on your site to read your article or check what time their train leaves - they're *really* there to marvel at your buttery-smooth, hardware-accelerated 60fps animations and 1337 client-side javascript skillz that mean you can browse the entire site without ever once touching the server after the first page-load... just as long as you don't mind that first page-load being 3MB in size, crapping out on unreliable mobile connections and taking whole seconds between DOM-ready and the UI actually appearing.
>
> But it's ok, because the ToDo app I wrote to test this approach performed pretty well with just me and my mum using it, and I don't care whether Google indexes it or not or whether blind people can see it because fuck them - they should just *get some eyes*, amirite?
>
> Likewise anyone who ever wants to consume my content on a device I haven't explicitly allowed for (or that isn't even invented yet) can just go *do one*. What is it about the word "web" that makes people think of interconnected nodes that all work across a common set of protocols and idioms and allow information to flow unimpeded from one place to another?
>
> Idiot hippies - they can consume my content in the way I decide they should or they can *fuck off*, yo. Because I'm a *professional* and nothing says professional like choosing a technology because all the cool kids are currently going "squee!" over it, rather than because it's a good solution that follows solid engineering practices and performs well in the specific problem space we're working in.
>
> Besides, if people bitch and whine about not being able to bookmark individual sub-pages I can just go out of my way to implement [ass-backwards hacks](http://isolani.co.uk/blog/javascript/BreakingTheWebWithHashBangs) like the hash-bang URL support (I know Google themselves advised against relying on it as anything but a hacky workaround, but what do they know, right? They only invented the technology), forcing the entirety of my routing into the Javascript layer for ever more.
>
> Because that's what we want, right? To force more and more legacy code and functionality into the front-end code we serve to each and every user for the rest of time, because it's *literally impossible* to ever route hash-bang URLs on the server? Sweet.
>
> Hell, having built my entire app on the client-side, if it turns out I actually need it to be statically accessible (not that that would indicate I've chosen my entire architecture completely, *absolutely, 100% wrongly* or anything) I can always just intercept the requests for an arbitrary subset of all the clients that might ever need static content, host a client on my server then run the client-side logic in the client on the server, extract the resulting static DOM and send it back to the *actual* client on the client-side.
>
> Then the only problems left are looking myself in the eye in the mirror in the morning and *ever again* referring to myself as a "real engineer" without giggling.
>
> Shit's easy, yo. I don't know what all you old grandads are bitching about with your "separation of concerns" or "accessibility" or "declarative data".
>
> Shit, I don't even know what half of those words *mean*. But I still know you're wrong, right?
>
> /s
>
> -- User [Shaper_pmp](https://www.reddit.com/user/Shaper_pmp) on [Reddit discussion thread](https://www.reddit.com/r/javascript/comments/33p3yg/everyone_has_javascript_right/cqn8vpn).

I just love this!
