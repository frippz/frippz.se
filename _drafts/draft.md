---
title: Cache busting in Jekyll revisited
#title: Jekyll, HTTP/2, cache busting, npm scripts and dropping Gulp
#slug: http2-cache-busting-npm-scripts-and-dropping-gulp
description: I dropped Gulp almost a year ago and now it’s time to leverage the benefits of HTTP/2 as well! Also, some Jekyll twiddling and NPM scripting.
tags:
  - html
  - css
  - jekyll
  - http2
  - npm
  - cache busting
---

I never warmed up to Gulp. It was perhaps too much JavaScript for my taste and yet another tool I had to learn in order to get stuff done.

I then came upon two blog posts that piqued my interest; [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8) and [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/). I felt inspired and got to work.

### npm scripting – the why

Cutting down on stuff is a favorite pasttime of mine. If I can, I minimise and optimise as much as I can, both in code and in real life. So what these blog posts were about resonated quite well with me. For the same reason that I detest CSS preprocessors because they add more problems than they claim solve (which I don’t believe they do anyway), I detested Gulp because it also was an abstraction layer that I felt added more problems than it solved for me. And the plugins. Oh, all those damn Gulp plugins I had to use for _everything_. Ugh.

### npm scripting – the what

Getting rid of Gulp means that you try to rely just on npm scripts in `package.json` instead and that in turn means to mostly rely in CLI versions of different tools. Step one is to identify what I need to happen in my tool stack:

1. Transpile custom properies in my CSS for better backwards compatibility for legacy browsers
2. Mash together what little JavaScript I use from several files into one
3. Generate an SVG sprite
4. Run Jekyll
5. Lint my CSS and JavaScript
6. Deploy code on my live server

It doesn’t take long to find the packages that we need over at [npmjs.org](https://www.npmjs.com). This is what I like about this approach. My `package.json` only has 12 dependencies since I dropped Gulp. *Twelve.*

I could almost cry from happiness.

Anyway, here’s what we've got:

```json
"devDependencies": {
  "concurrently": "^4.1.0",
  "eslint": "^5.12.1",
  "foreach-cli": "^1.8.1",
  "hashmark": "^5.0.0",
  "onchange": "^5.2.0",
  "postcss-cli": "^6.1.1",
  "postcss-custom-properties": "^8.0.9",
  "stylelint": "^9.10.1",
  "svg-sprite": "^1.3.7",
  "uglify-es": "^3.0.28",
  "uglifycss": "^0.0.29",
  "yarn": "^1.5.1"
}
```

Let’s quickly go over what each packages does:

* **browserify**: mashes all my JavaScript together into one unholy file. You could also use something like requireJS, if you like.
* **eslint**: JavaScript linting (optional, of course)
* **foreach-cli**: I use this to iterate over files to do things to them. More on this later.
* **hashmark**: My cache busting tool. I'll use this to generate uniqe file names.
* **onchange**: Will help me trigger stuff if a change is detected.
* **concurrently**: Runs shell commands in parallel and is a bit more versatile than just using `&` in the shell straight up. Added bonus is the improved compatibility with Windows.
* **postcss-cli**: The command line implementation of PostCSS.
* **postcss-custom-properties**: Plugin for transpiling a fallback value for CSS custom properties for legacy browsers.
* **stylelint**: CSS linting (like eslint, it’s optional)
* **svg-sprite**: Builds handy little SVG sprites for me.
* **uglify-es**: JavaScript compression.
* **uglifycss**: Same as above, but for CSS.
* **yarn**: You might recognise this one.

Anyway, that’s what I use. You may use whatever tools you want to get the job done.

### npm scripting – the how

To tie everything together, I need to create a couple of tasks in my `package.json` that will help me get my development environment going again, this time without Gulp. At this point, I assume that you already know how to write stuff in you own `package.json`. I'm also assuming that you’ve already read the two blog posts that I linked to in the beginning of this post.
