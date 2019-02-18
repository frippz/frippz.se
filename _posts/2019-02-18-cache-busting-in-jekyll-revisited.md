---
title: Cache busting in Jekyll revisited
description: I dropped Gulp over a year ago and now it’s time to leverage the benefits of HTTP/2 as well! I also did some Jekyll twiddling and NPM scripting.
tags:
  - html
  - css
  - jekyll
  - http2
  - npm
  - cache busting
---

I never quite warmed up to Gulp. It was yet another tool I had to learn in order to get stuff done. Before Gulp there was Grunt, and somewhere along the way I had to cope with Webpack in React projects. The latter was surely fine for those projects, but for my own needs, it was way overkill or not even the right tool for my needs.

I then came upon two blog posts that piqued my interest; [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8) and [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/). I felt inspired and got to work.

### npm scripting – the why

Cutting down on stuff is a favorite pasttime of mine. If I can, I minimise and optimise as much as I can, both in code and in real life. So what these blog posts were about resonated quite well with me. For the same reason that I dislike CSS preprocessors like Sass and Less because they add more problems than they claim to solve (which I don’t believe they do anyway), I disliked Gulp because it also was an abstraction layer that I felt added more problems than it solved for me. And the plugins. Oh, all those damn Gulp plugins that I had to use for _everything_. Ugh.

### npm scripting – the what

Getting rid of Gulp means that you try to rely just on npm scripts in `package.json` instead and that in turn means to mostly rely on CLI versions of different tools. Step one is to identify what I need to happen in my tool stack:

1. Transpile custom properies in my CSS for better backwards compatibility for legacy browsers
2. Mash together what little JavaScript I use from several files into one
3. Generate an SVG sprite
4. Run Jekyll
5. Lint my CSS and JavaScript
6. Deploy code on my live server

It doesn’t take long to find the packages that we need over at [npmjs.com](https://www.npmjs.com). This is what I like about this approach. My `package.json` only has 12 dependencies since I dropped Gulp. *Twelve.*

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

```json
"scripts": {
  "start": "concurrently 'yarn run build:watch' 'yarn run jekyll:serve'",
  "prebuild": "touch _includes/sprite.svg & mkdir -p dist",
  "build": "yarn run build:css && yarn run build:js && yarn run build:svg",
  "build:watch": "onchange ./src/** -i -- yarn run build",
  "prebuild:css": "rm -rf ./dist/css/*",
  "build:css": "postcss -c postcss.config.js ./src/css/*.css -d dist/css",
  "build:js": "rsync --checksum --recursive --delete src/js/ ./dist/js",
  "postbuild:js": "hashmark -r -l 8 dist/js/vendor/require.min.js 'dist/js/vendor/{name}-{hash}.js'",
  "build:svg": "svg-sprite -C svg-sprite.config.json --dest ./_includes src/svg/*.svg",
  "deploy:css": "postcss -c postcss.config.live.js ./src/css/*.css -d dist/css",
  "css:uglify": "foreach -g 'dist/css/*.css' -x 'uglifycss #{path} --output #{path}'",
  "css:hash": "hashmark -r -l 8 dist/css/*.css 'dist/css/{name}-{hash}.css'",
  "postdeploy:css": "yarn run css:uglify && yarn run css:hash",
  "deploy:js": "yarn run build:js",
  "lint": "yarn run lint:css && yarn run lint:js",
  "lint:css": "stylelint --color -f verbose src/css/**/*.css",
  "lint:js": "eslint src/js/**/*.js",
  "jekyll:serve": "sleep 1; jekyll serve --incremental --drafts",
  "test": "yarn run lint",
  "dist:clean": "mkdir -p ./dist && rm -rf ./dist/*",
  "predeploy": "yarn run dist:clean",
  "deploy": "yarn run deploy:css && yarn run deploy:js && yarn run build:svg"
}
```

The scripts section does grow somewhat when you’re not using Gulp anymore. Even if JSON has its shortcomings, like the lack of commenting — if you keep the naming as descriptive as possible, you should be fine.

A quick word on the pre and post hooks. As you can see in the above code snippet, there’s a few entries with the prefixes `pre` and `post`, like `prebuild` and `postdeploy:css`. This is a neat feature of npm wherein any script that has either a post or a pre hook, will automatically run either before or after that script. [The above linked post by Keith Cirkel](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/#pre-and-post-hooks) does a much better job than me in explaining the intricacies of these hooks.

#### CSS in particular

For the sake of brevity, let’s focus on the CSS part.

```json
"build:css": "postcss -c postcss.config.js ./src/css/*.css -d dist/css",
```

First, I'm using PostCSS to transpile any custom properties to provide fallback properties for legacy browsers. In effect, this means that the following:

```css
:root {
  --text-color: #333;
}

body {
  color: var(--text-color);
}
```

Will be transpiled into:

```css
:root {
  --text-color: #333;
}

body {
  color: #333;
  color: var(--text-color);
}
```

Due to the wonderful way that CSS is progressively enhanced, any browser that does not understand a property will simply ignore it and move on. This mean that the occurrence of `var(--text-color)` will for example be ignored by Internet Explorer 11 and the previous value (`#333`) will still apply since it was declared before.

The following two lines are only run when I want to deploy to production, and this is also where the fun happens in terms of cache busting.

```json
"css:uglify": "foreach -g 'dist/css/*.css' -x 'uglifycss #{path} --output #{path}'",
"css:hash": "hashmark -r -l 8 dist/css/*.css 'dist/css/{name}-{hash}.css'",
```

The tool first used; `uglifycss` takes care of compressing the CSS by remove line breaks and whitespace. Since we’re not concatenating all our stylesheets into one big file, as has been traditional — but rather leverage the power of [HTTP/2 multiplexing](https://http2.github.io/faq/#why-is-http2-multiplexed), we just run it on each file in place.

The second line is all about cache busting. `hashmark` enables us to do this by providing us with a unique file name base in the hash of the file and, more importantly, only change this hash _if_ the file actually has changed. The flags used are firstly `-r` which means replace whatever file you’re working one with the hash renamed one, and `-l 8` tells hashmark to limit the length of the hash in the filename to eight characters, which will be more than enough for our needs. The pattern `{name}-{hash}.css` should be pretty self explanatory; `file.css` would become  `file-d121a5d4.css`.

#### How Jekyll finds the files

We have a few problems with this approach to solve. Since we’re keeping all of our stylesheets as separate files, we could of course manually link them all in our Jekyll templates, but that’s not really maintainable and as soon as we start hashing our files, that strategy goes straight out the window. So how to make Jekyll aware of these dynamically changing files, without us having to poke around manually each time something changes?

Luckily, [Jekyll keeps track of static files](https://jekyllrb.com/docs/static-files/).

> A static file is a file that does not contain any front matter. These include images, PDFs, and other un-rendered content.
>
> They’re accessible in Liquid via `site.static_files` …

Using this info, we can use the metadata to filter out the files in `/dist/css` (i.e. where npm is putting our source files once they’ve been transpiled) and then iterate over each file and output the path. It’ll look something like this:

```liquid
{% raw %}{% for css in site.static_files %}
  {% if css.path contains "dist/css" %}
    <link rel="stylesheet" href="{{ site.baseurl }}{{ css.path }}">
  {% endif %}
{% endfor %}{% endraw %}
```

There’s a caveat with this method, though.  This implementation would list any kind of file present in that folder, even those that aren’t legitimately CSS files. In this example, that would never happen, but if you want your solution to be more robust (like if someone haphazardly starts putting PNG files or JavaScript files in your folder), you can also filter using `css.extname`. Now, if everything is working correctly, assuming that we have three files in `/dist/css`, that we say are named `file1.css`, `file2.css` and `file3.css`, Jekyll would render markup accordingly:

```html
<link rel="stylesheet" href="/dist/css/file1.css">
<link rel="stylesheet" href="/dist/css/file2.css">
<link rel="stylesheet" href="/dist/css/file3.css">
```

Awesome! No matter how many files we add to our project, or whatever names they will dynamically get from hashmark, Jekyll will take care of linking them properly for us.

### Wrapping up

Simplifying things and throwing out superflous tools felt really great! The less of them I have, the quicker my development environment got and I felt that the overall robustness went up a few ticks. There is still some things that I likely will never be rid of, like the cache busting feature, since the benefit is too big (and I just can’t wrap my head around getting caching headers right).

I hope this might be of some use to someone else than me. The basic principle isn’t really tied to Jekyll (apart from the static files functionality), so you should be able to implement this with whatever tools you choose. If nothing else, it might’ve served as an inspiration to cut down a little in your own tool stack.