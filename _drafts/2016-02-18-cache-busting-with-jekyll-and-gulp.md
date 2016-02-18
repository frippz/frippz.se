---
title: Cache busting with Jekyll and Gulp
description: How to do automatic cache busting with Jekyll and Gulp
tags:
  - html
  - javascript
  - css
  - gulp
  - jekyll
layout: post
published: 2016-02-18
---

Since I love tinkering with my journal, updates to both my stylesheets and JavaScript files are quite frequent. Up till now, I’ve just let Gulp generate my files and then I included this in my Jekyll templates in a hard-coded fashion. But it then hit me that maybe I should do something to make sure that recurring visitors always get the latest version of my JavaScript and CSS, _if_ they’ve been changed.

## What is cache busting?

In short, cache busting is a way to make sure that client downloads your very latest version of a file. The simplest way to do this is to either give the file a random name, like `ab459ef32da.css` or, in my opinion, the nicer variant of adding a query string along the lines of `styles.css?version=ab459ef32da`. Then, each time you do a change to this file, you make sure that the random string changes, and you’ve successfully busted that cache.

## Making Gulp and Jekyll work together

As mentioned, I use [Gulp](http://gulpjs.com) to minify and concatenate both my CSS and JavaScript. The output files are hardcoded in my `Gulpfile.js` so all Jekyll needed was the paths to both files in the templates and be done with it.

~~~html
<link rel="stylesheet" href="{{ site.baseurl }}/gui/css/styles.css">
<script src="{{ site.baseurl }}/gui/js/main.js" defer></script>
~~~

In order to get some cache busting going, I needed the following:

* Give my generated CSS and JavaScript files a unique string everytime they are updated with Gulp
* Make this string available to Jekyll somehow to append it when linking to the files in the Jekyll template
* Automate it so I don’t have to think about it anymore

Since I only want the string to change when I’ve done something to either the JavaScript or CSS, the best approach would be to use the MD5 checksum from each generated file to indicate when something has changed. So I needed some sort of Gulp plugin to grab the MD5 and then do something with. But first, we need to sort out how to get this data to Gulp.

### Enter the data folder

Jekyll has this nifty feature that lets you define custom data.

> In addition to the built-in variables available from Jekyll, you can specify your own custom data that can be accessed via the Liquid templating system.
>
>Jekyll supports loading data from [YAML](http://yaml.org/), [JSON](http://www.json.org/), and [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files located in the `_data` directory.
>
> *–– [Jekyll documentation page on data files](http://jekyllrb.com/docs/datafiles/)*

Perfect! This will allow us to pass information into our Jekyll templates. Reading on in the Jekyll documentation lets us know that if we create `_data/cache_bust.yml`, the contents of this file will be available in Jekyll via `{{ site.data.cache_bust }}`. If the `cache_bust.yml` just contains a string, the aforementioned Jekyll tag will output just that. That’s all we need for this job.

### Getting Gulp to write an MD5 hash to the data folder

There’s a plethora of cache busting plugins for Gulp over at [npmjs.com](https://www.npmjs.com). But all I need is something that grabs the MD5 checksum of my generated files and write that string to a file in the `_data` folder. The closest match for me turned out to be [gulp-hashsum](https://www.npmjs.com/package/gulp-hashsum).

So this is my Gulp task for building my CSS.

~~~javascript
// Process stylesheets
gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat(paths.cssOutput))
    .pipe(cssnano())
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.cssDest));
});
~~~

In short, I’m using Gulp to do autoprefixing, then concatenate all my files, minify them, and lastly, if I’m not on production, add sourcemaps. So first we install `gulp-hashum`.

~~~bash
$ npm install gulp-hashsum --save-dev
~~~

Require it in our `Gulpfile.js`

~~~javascript
var hashsum = require("gulp-hashsum");
~~~

Then take a quick look at the code example in the README.

~~~javascript
gulp.src(["app/**/*.js"]).
    pipe(hashsum({dest: "app"}));
~~~

Hmm, ok. We don’t actually want to specify _what_ files to get the checksum from. The simplest would just be to pipe `hashsum()` in my task right before we write the file to disk.

~~~javascript
// Process stylesheets
gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat(paths.cssOutput))
    .pipe(cssnano())
    .pipe(hashsum({filename: './_data/cache_bust_css.yml', hash: 'md5'}))
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.cssDest));
});
~~~

There we go! Right after `cssnano()` we grab the MD5 hash and write it to `_data/cache_bust_css.yml`. Let’s give it a go and see what our output is.

~~~yaml
6ebeded38c4fc6c1b111172052b6ca17  ../src/css/styles.css
~~~

Oh. That’s not _quite_ what we were after, but the fact is that a checksum file is supposed to look like this. No matter. I think we can do some magic in Jekyll to get what we want. As I mentioned earlier, all we need is a unique string to properly identify when a file has changed, so we can probably just use one of Jekyll’s [output filters](http://jekyllrb.com/docs/templates/#filters) to truncate down to the first 10 characters. Luckily enough, there’s something called `truncate` that does just that. Damn, I love Jekyll!

~~~html
<link rel="stylesheet" href="{{ site.baseurl }}/gui/css/styles.css?version={{ site.data.cache_bust_css | truncate: 10, '' }}">
~~~

Let’s break down what I just did. Besides adding the `?version=` query string to the `href` attribute, I also added `site.data.cache_bust_css` which basically means output the content from the file `_data/cache_bust_css.yml` right into the template. I then added the truncation filter `truncate: 10, ''` to just show the first 10 characters. The trailing comma and empty single quotes is just to make sure that `truncate` doesn’t add an ellipsis after the string, since that’s the default behavior.

All this will result in a nice, unique string appended to our files, and we didn’t have to muck about with special files names and how to pass that info into Jekyll.

~~~html
<link rel="stylesheet" href="/gui/css/styles.css?version=362887da69">
~~~

Looking good! Just rinse and repeat for the JavaScript task in `Gulpfile.js` and we’re done!
