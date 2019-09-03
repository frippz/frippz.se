---
title: Mocking actions with buttons
description: Sometimes we might want buttons to take us places even in prototypes. This solution helps mock flows in static HTML prototypes.
tags:
  - html
  - javascript
  - prototyping
---

A common scenario in my line of work is when I build UI components into complete pages, and somewhere on this page there might be a form. This form might contain a button, and when you click this button you want something to happen. Now, since pattern libraries and HTML prototypes very often are just static HTML, you are limited in what can happen. Naturally, when it comes to regular links, everything works out of the box since all you have to do is link pages together. Buttons, on the other hand, are a different story.

Let me first state, very clearly, that _this should not be used in production. **Ever.**_ If you want to link to something – well, then we already have the excellent `<a>` element that does that job amazingly well.

With the disclaimers out of the way, let’s get down to business! We want our little prototype button to feature two things;

* A `<button>` element
* A URL that you will be taken to upon clicking the button

That’s really all we need. No need to complicate things, right?

### The markup

```html
<button type="button" data-prototype-url="link.html">Click me</button>
```

The `type="button"` attribute is optional, since the default type for a button is `submit` and that might be just what you want. In order to easily enter the URL in question we’ve got the `data-prototype-url` attribute. You can name it however you want. but it might be prudent to use a name that communicates its prototype use case as clearly as possible. Again, we _do not_ want this type of code running on a live web site.

### The JavaScript

You guessed it. We can’t really do very much with this button unless we enlist the help of good ’ol JavaScript.

```javascript
document.addEventListener('click', function (event) {
  if (event.target.matches('[data-prototype-url]')) {
    var button = event.target;
    var buttonURL = button.getAttribute('data-prototype-url');
    window.location.href = buttonURL;
    console.log(button.textContent + ' clicked');
  }
}, false);
```

Since we might have any number of buttons in a page, all that might potentially mock a scenario that takes us away from the current page, I found that the most preferrable method is to attach an event listener to the entire document and use event delegation to trigger the actions. This was something that I’ve picked up from [Chris Ferdinandi](https://gomakethings.com/why-is-javascript-event-delegation-better-than-attaching-events-to-each-element/). The short-short version of the script:

1. Listen for clicks across the document
2. Check if the click matches an element with the `data-prototype-url` attribute
3. Grab the value of said attribute and send the user to that value (i.e. a URL)

That’s it! You now have a nifty solution for sending a user to another page by clicking a button, which will enable you to create mock scenarios for user testing or other purposes. If you easily want to test it out, I’ve got a [version on Codepen](https://codepen.io/frippz/pen/LJmeLy) going that you can play around with.

Just please don’t use it in production, ok?
