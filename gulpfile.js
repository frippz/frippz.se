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
    cssnano          = require('gulp-cssnano'),
    concat           = require('gulp-concat'),
    uglify           = require('gulp-uglify'),
    postcss          = require('gulp-postcss'),
    watch            = require('gulp-watch'),
    customProperties = require('postcss-custom-properties'),
    eslint           = require('gulp-eslint'),
    liveServer       = require('live-server'),
    syncy            = require('syncy'),
    hashsum          = require('gulp-hashsum'),
    stylelint        = require('gulp-stylelint'),
    svgSprite        = require('gulp-svg-sprite'),
    exec             = require('child_process').exec;

// Configur paths
var paths = {

  // Inputs
  jsFiles: ['./src/js/**/*.js'],
  cssFiles: ['./src/css/**/*.css'],

  // Static assets
  images: ['./src/i/**'],

  // SVG icons
  svg: ['./src/svg/**/*.svg'],

  // Outputs
  jsOutput: 'main.js',
  cssOutput: 'styles.css',

  // Destinations
  jsDest: './gui/js/',
  cssDest: './gui/css/',
  imgDest: './gui/i',
  svgDest: './_includes/',

  // Jekyll build files
  jekyllHTML: ['./_site/**/*.html'],

  // Jekyll build triggers
  jekyllBuild: [
    '**/*.html',
    '**/*.+(md|markdown|MD)',
    'src/**/*.*',
    '_data/**.*+(yml|yaml|csv|json)',
    '!dist/**/*.*',
    '!_site/**/*.*',
    '!README.md'
  ]

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
  return gulp.src(paths.cssFiles)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(stylelint({
      reporters: [{
        formatter: 'string',
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
    .pipe(cssnano({
      discardComments: { removeAll: true }
    }))
    .pipe(hashsum({ filename: './_data/cache_bust_css.yml', hash: 'md5' }))
    .pipe(gulpif(!isProduction, sourcemaps.write()))
    .pipe(gulp.dest(paths.cssDest));
});

// Concatenate and minify JavaScript
gulp.task('js', function () {
  return gulp.src(paths.jsFiles)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(concat(paths.jsOutput))
    .pipe(uglify())
    .pipe(hashsum({ filename: './_data/cache_bust_js.yml', hash: 'md5' }))
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.jsDest));
});

// SVG sprite generation
var svgConfig = {
  svg: {
    doctypeDeclaration: false,
    xmlDeclaration: false
  },
  mode: {
    symbol: {
      inline: true,
      dest: '.',
      sprite: 'sprite-symbol.svg'
    }
  }
};

gulp.task('svg-sprite', function () {
  return gulp.src(paths.svg)
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest(paths.svgDest));
    // .pipe(gulp.dest(paths.imgDest));
});

// eslint
gulp.task('eslint', function () {
  return gulp.src(paths.jsFiles)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(eslint())
    .pipe(eslint.format());
});

// Watch for changes
gulp.task('watch', function () {
  watch(paths.cssFiles, function () {
    gulp.start(['css']);
  });
  watch(paths.jsFiles, function () {
    gulp.start(['js', 'eslint']);
  });
  watch(paths.images, function () {
    gulp.start(['images']);
  });
  watch(paths.svg, function () {
    gulp.start(['svg-sprite']);
  });
  watch(paths.jekyllBuild, function () {
    gulp.start(['jekyll-build']);
  });
});

// Copy image assets to /gui
gulp.task('images', function () {
  syncy(paths.images, paths.imgDest, {
    base: './src/i/'
  })
    .catch(console.error);
});

// Jekyll
gulp.task('jekyll-build', function () {
  gulpif(!isProduction, exec('bundle exec jekyll build -q', function (err) {
    if (err) {
      console.log(err);
    }
  }));
});

// Live server
gulp.task('live-server', function () {
  liveServer.start({
    port: 4000,
    host: '0.0.0.0',
    root: '_site',
    open: false,
    quiet: true,
    file: 'index.html',
    wait: 500
  });
});

// Build
gulp.task('build', ['css', 'js', 'images', 'svg-sprite', 'jekyll-build']);

// Deploy
gulp.task('deploy', ['css', 'js', 'images', 'svg-sprite']);

// Default
gulp.task('default', ['build', 'watch', 'live-server']);
