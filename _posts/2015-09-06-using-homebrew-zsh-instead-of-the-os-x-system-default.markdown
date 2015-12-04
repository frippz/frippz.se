---
title: Using Homebrew ZSH instead of the OS X system default
description: How to switch over from the system default installation of ZSH to the Homebrew version.
layout: post
published: 2015-09-06
---

As of OS X Yosemite, the built in version of ZSH is 5.0.5. If you're, like me, a fan of the latest and greatest, you might be tempted to use the Homebrew version of ZSH instead of the default system one. As of the writing of this post, the latest version of ZSH is 5.1. Here’s how you install and set it as the default shell.

This very short guide assumes that you’re already familiar with [Homebrew](http://brew.sh/) and have it installed. Once that's sorted, install ZSH.

{% highlight bash %}
$ brew install zsh
{% endhighlight %}

Edit `/etc/shells` to add a new entry for the Homebrew ZSH.

{% highlight bash %}
$ sudo vim /etc/shells
{% endhighlight %}

At the end of the file add `/usr/local/bin/zsh`, which is the path to the Homebrew binary for ZSH. Your `/etc/shells` should look like this:

{% highlight bash %}
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/zsh
{% endhighlight %}

Now we need to set our Homebrew ZSH as the default shell, and we’re done!

{% highlight bash %}
$ chsh -s /usr/local/bin/zsh
{% endhighlight %}

Welcome to the bleeding edge of ZSH!
