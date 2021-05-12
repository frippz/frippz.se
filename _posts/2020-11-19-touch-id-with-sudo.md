---
title: Touch ID with sudo
description: Use your Macs Touch ID sensor to authenticate when using sudo
date: 2020-11-19 18:00
tags:
  - macOS
  - apple
---

When the first MacBook Pro with a Touch ID sensor was released, I was thoroughly excited. Rightly so. Apps like 1Password was quick to implement support for it. There was one thing that was missing though; authentication with `sudo`.

{% include image.html url="https://imgs.xkcd.com/comics/sandwich.png" link="https://xkcd.com/149/" caption="There’s an XKCD for every situation" %}

I’m almost ashamed that after having owned at least two MacBook Pros with Touch ID, I didn't find out until today about this. So it’s time to write it down. Hat tip to [Stanislas and his post “Using Touch ID for sudo authentication on a MacBook”](https://stanislas.blog/2019/09/touch-id-sudo-macbook/) for showing me the way.

Edit (as root) `/etc/pam.d/sudo`:

```bash
# sudo: auth account password session
auth       sufficient     pam_smartcard.so
auth       sufficient     pam_tid.so		# <= Add this line!
auth       required       pam_opendirectory.so
account    required       pam_permit.so
password   required       pam_deny.so
session    required       pam_permit.so
```

For clarity, the line you want to add (as seen above) is:

```bash
auth       sufficient     pam_tid.so
```

That’s all you need! Oh, and your finger, of course! 😉
