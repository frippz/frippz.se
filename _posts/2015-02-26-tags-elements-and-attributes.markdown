---
title: Tags, elements and attributes
layout: post
published: 2015-02-26
---

Boy, this never gets old, does it? Back in the day, when I was but a green, eager to learn, front end web developer, I more than once fell into the trap of referring to everything (almost) as a tag. A couple of years down the road, I know better. But some people never learn, it seems. That gives me the urge to vent.

## It's not rocket science

An [old colleague and mentor of mine](http://www.456bereastreet.com) once wrote, almost ten years ago:

> When talking (or writing) about HTML, it is common for many people to refer to just about everything as “tags” instead of using the proper terms: “tag”, “element”, and “attribute”. A lot of the time what the author really means can be figured out by looking at the context, but sometimes it can be confusing.
>
> Using the correct terminology is not very difficult. It will also make it easier for others to correctly interpret what you mean, not to mention lend more credibility to what you have to say.
>
> – [HTML tags vs. elements vs. attributes by Roger Johansson, 456 Berea Street](http://www.456bereastreet.com/archive/200508/html_tags_vs_elements_vs_attributes/)

I think that most people will get what you are trying to say, with little risk of confusion. It's a fairly simple situation. My gripe with not using the proper terms is a lot more simple; **you come off looking like a clueless twit!**

I mean, come on, it's really not rocket science, is it? (Or do we say rocket surgery now, since Steve Krug titled his [wonderful book](http://sensible.com/rsme.html) in that fashion?)

## This is me doing something about it

I guess the biggest problem for me is that each time I correct the culprit, *I* come off as the asshole. Ok, let's just do some HTML 101, shall we?

### Elements

In general, a HTML element consists of a start tag and an end tag. Here's a lovely heading for you.

~~~html
<h1>This is a heading</h1>
~~~

Preferably, there should be some content between the start tag and the end tag.

### Tags

Tags are what makes up the start and the end of an element. You've might come across some of the, like in the previous section, like, five seconds ago.

~~~html
<p>
~~~

The above start tag denotes the beginning of a paragraph. Attributes are optional, like so.

~~~html
<p class="whatever">
~~~

In order to close you paragraph, you'll need and end tag.

~~~html
</p>
~~~

There are a few HTML elements that requires no end tag. The `<img>` element is one good example of those.

~~~html
<img src="photo.jpg" alt="">
~~~

### Attributes

Noticed those thingies with an equals sign and some quotation marks? That what we in the business call an attribute. *Attribute*. Yes. Now, you might've heard some clueless nitwit refer to them as an alt tag. That's complete gibberish, since there's no such thing as an *"alt tag"*. If you hear someone use that term, you're totally allowed to slap them with a rolled up newspaper.

## Don't be *that* guy

My former colleague is ever so courteous in his post on the subject:

>You may call this nitpicking, but I don’t think it is. Sure, most of the time people will understand what you mean even if you call everything a “tag”. But by using the correct terminology you reduce the risk of being misunderstood, and you will sound more professional, so you really have nothing to lose by learning the difference.
>
> – [HTML tags vs. elements vs. attributes by Roger Johansson, 456 Berea Street](http://www.456bereastreet.com/archive/200508/html_tags_vs_elements_vs_attributes/)

He's right, of course. You really have nothing to lose by using the proper terms. But remember, you also limit the risk of coming off as a **total nitwit!**
