/**
 * gulpfile.js
 *
 * All the yummy build stuff!
 *
 * @author Fredrik Frodlund (contact@frippz.se)
 */

// Requirements
var gulp             = require('gulp'),
    gulpif           = require('gulp-if'),
    gutil            = require('gulp-util'),
    plumber          = require('gulp-plumber'),
    sourcemaps       = require('gulp-sourcemaps'),
    autoprefixer     = require('gulp-autoprefixer'),
    minifyCss        = require('gulp-minify-css'),
    concat           = require('gulp-concat'),
    uglify           = require('gulp-uglify'),
    postcss          = require('gulp-postcss'),
    watch            = require('gulp-watch'),
    customProperties = require('postcss-custom-properties'),
    ghPages          = require('gh-pages'),
    path             = require('path'),
    eslint           = require('gulp-eslint'),
    w3cjs            = require('gulp-w3cjs'),
    dirSync          = require('gulp-directory-sync'),
    webserver        = require('gulp-webserver'),
    hashsum          = require('gulp-hashsum'),
    stylelint        = require('gulp-stylelint'),
    svgSprite        = require('gulp-svg-sprite');

// Configure paths
var paths = {

  // Inputs
  js: ['./src/js/**/*.js'],
  css: ['./src/css/**/*.css'],

  // Static assets
  images: './src/i/',

  // SVG icons
  svg: ['./src/svg/**/*.svg'],

  // Outputs
  jsOutput: 'main.js',
  cssOutput: 'styles.css',

  // Destinations
  jsDest: './gui/js/',
  cssDest: './gui/css/',
  imgDest: './gui/i/',
  svgDest: './_includes/',

  // Jekyll build files
  jekyllHTML: ['./_site/**/*.html']

};

// Error handler
var onError = function (err) {
  gutil.beep();
  console.log(err);
};

// Check for production
var isProduction = process.env.NODE_ENV === 'production';

// Process stylesheets
gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(stylelint({
      reporters: [{
        formatter: 'verbose',
        console: true
        }]
    }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(postcss([customProperties()]))
    .pipe(concat(paths.cssOutput))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(hashsum({filename: './_data/cache_bust_css.yml', hash: 'md5'}))
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.cssDest));
});

// Concatenate and minify JavaScript
gulp.task('js', function () {
  return gulp.src(paths.js)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(concat(paths.jsOutput))
    .pipe(uglify())
    .pipe(hashsum({filename: './_data/cache_bust_js.yml', hash: 'md5'}))
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.jsDest));
});

// SVG sprite generation
svgConfig = {
  svg : {
    doctypeDeclaration: false,
    xmlDeclaration: false
  },
  mode: {
    symbol: {
      inline: true,
      dest: '.',
      sprite: 'sprite-symbol.svg'
    },
    css: {
      bust: false,
      layout: 'vertical',
      dest: '.',
      sprite: 'sprite-css.svg'
    }
  }
}

gulp.task('svg-sprite', function ( ){
  return gulp.src(paths.svg)
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest(paths.svgDest))
    .pipe(gulp.dest(paths.imgDest));
});

// eslint
gulp.task('eslint', function () {
  return gulp.src(paths.js)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(eslint())
    .pipe(eslint.format());
});

// Validation
gulp.task('validate', function () {
  return gulp.src(paths.jekyllHTML)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(w3cjs());
});

// Linting task
gulp.task('lint', ['eslint'/*, 'validate'*/]);

// Watch for changes
gulp.task('watch', function() {
  watch(paths.css, function() {
    gulp.start(['css']);
  });
  watch(paths.js, function() {
    gulp.start(['js', 'eslint']);
  });
  watch(paths.images, function() {
    gulp.start(['images']);
  });
  watch(paths.svg, function() {
    gulp.start(['svg-sprite']);
  });
  // watch(paths.jekyllHTML, function() {
  //   gulp.start(['validate']);
  // });
});

// Copy image assets into /gui
gulp.task('images', function(){
  gulp.src(paths.images)
    .pipe(dirSync(paths.images, paths.imgDest));
});

// Deploy to gh-pages
gulp.task('deploy', function (cb) {
  ghPages.publish(path.join(process.cwd(), paths.tplDest), cb);
});

// Build
gulp.task('build', ['css', 'js', 'images', 'svg-sprite']);

// Default
gulp.task('default', ['watch', 'css', 'js', 'images', 'svg-sprite', 'lint']);
