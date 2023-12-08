---
title: 'A new accessibility tool has joined the party'
description: NetNewsWire got updated and I had the opportunity to compare the UI
date: 2023-12-08 07:00
tags:
  - accessibility
  - a11y
  - testing
  - tools
---

When it comes to testing accessibility, there is no substitute for the human element. However, a great tool can help identify all the tiny details that our human eyes might miss. In addition to this, performing continuous automated testing is something machines do quite well. Just as continuous integration is the norm in today's front-end world, so too should accessibility testing be.

### The new kid on the block

Enter [Squidler](https://squidler.io); a new accessibility testing tool recently released into the wild. Full disclosure: I happen to know a few of the people behind the product and they’re very talented people, but I also had no idea that they were working on this (which just goes to show how deep I must be in my own work).

### Initial impressions

I haven’t had too much time to test the tool out yet, but a few things stood out to me, that I will outline.

#### Ease of use

Just paste a URL into the input field and let Squidler go to town on your site. It also crawls through your site, so you don’t just get a report on the URL you submitted, but several other pages as well. I had a quick chat with a friend of mine working on the product and he mentioned that the crawling will improve with time and be more aware of pages it crawled in the past, hopefully making it more efficient

#### Continous testing

Once you've entered a web site that you want to test, Squidler will keep crawling it periodically. This is a nice feature to me and something that will come in handy once you start fixing issues that the tool will find. Keep fixing issues and deploy them, and let Squidler handle future checks automatically. Nice.

#### Simple and clear reports

Issues found are clearly explained with suggested fixes, links to documentation about the particular issue as well as screenshots from your site highlighting where the issue resided. You can also step through a timeline that reveals how the tools went over your pages. Love it!

### Possible room for improvements

I understand that this tool is in the early stages of its life and so, there's a few things I noted that could improve it. In no particular order:

* **One URL only?** - running tests like these surely doesn’t come cheap in terms of server costs, so I get that there might be limitations. I would however love to see the possibility to test multiple sites. If this feature isn’t currently available, it would be a valuable addition for future updates.

* **Very minimal UI** - I should emphasize that this is generally a good thing, but if I dive into one of the reported problems, I would love to have some kind of breadcrumb or other way of getting back to the overview. The back button works just fine, but my confidence is a bit lowered by such patterns. I guess poor web site designs over the years with terrible single page apps have ruined me a bit.

I want to be clear that these are very early impressions after only testing the tool for a few hours. As I understand it, they're still working on improving plenty of things, so take my impressions with a heap of salt.

### Closing thoughts (for now)

As I already mentioned, I’ve only tested the tool for a few hours and I haven’t looked over everything the tool has to offer, like the daily and weekly test reports mentioned in their list of features.

The pricing is € 49 per month, which might be steep for a private person, but I don’t think they’re the target audience here. For companies that not only values offering a good experience for their users, but that also cares about the forthcoming [European Accessibility Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882), this is a low price to pay.
