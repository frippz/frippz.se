---
title: On form elements and JavaScript
description: Why use a form element when submitting fields with JavaScript? Because it’s better across the board.
date: 2020-01-28 08:00
tags:
  - javascript
  - accessibility
  - html
---

Chris Ferdinandi of Go Make Things answers the question “[Why use a form element when submitting fields with JavaScript?](https://gomakethings.com/why-use-a-form-element-when-submitting-fields-with-javascript/)” and does so quite succinctly:

> * It makes your life easier.
> * Semantics (and the accessibility that happens as a result).

From the perspective of JavaScript, he goes on to make the case for using the `submit` event on the `<form>` element to keep things not only simpler, but also a lot more usable and accessible.

His post was inspired by [a question posted by Coding Journey on Twitter](https://twitter.com/CodingJrney/status/1220194852454961155):

> Question: If we are preventing default behavior of form submission and manually handle it (e.g. with Fetch API), is there a reason to use the <form> tag? (other than form submission with enter/return key…)

I’d say that you needn’t look further than that last sentence. There’s so many poorly designed forms out there built by developers who doesn’t know any better (seriously, I’ve seen forms in the wild that are nothing more than `<div>` elements with JavaScript triggers). Just the fact that you can actually submit a form in any other way than using a mouse (or tapping on a screen) goes such a long way. Proper semantics helps GUI-less applications like 1Password as well, since it looks for forms with properly named input fields and submit buttons.

Ok, so long story short — [learn the basics, use proper forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form).
