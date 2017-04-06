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
    cleanCSS         = require('gulp-clean-css'),
    concat           = require('gulp-concat'),
    uglify           = require('gulp-uglify'),
    postcss          = require('gulp-postcss'),
    watch            = require('gulp-watch'),
    customProperties = require('postcss-custom-properties'),
    eslint           = require('gulp-eslint'),
    liveServer       = require('live-server'),
    stylelint        = require('gulp-stylelint'),
    svgSprite        = require('gulp-svg-sprite'),
    rev              = require('gulp-rev'),
    del              = require('del'),
    exec             = require('child_process').exec;

// Configur paths
var paths = {

  // Inputs
  jsFiles: ['./src/js/**/*.js'],
  cssFiles: ['./src/css/**/*.css'],

  // SVG icons
  svg: ['./src/svg/**/*.svg'],

  // Outputs
  jsOutput: 'main.js',
  cssOutput: 'styles.css',

  // Destinations
  jsDest: './gui/js/',
  cssDest: './gui/css/',
  svgDest: './_includes/',

  // Jekyll build files
  jekyllHTML: ['./_site/**/*.html'],

  // Jekyll build triggers
  jekyllBuild: [
    '**/*.html',
    '**/*.+(md|markdown|MD)',
    '**/*.xml',
    'src/**/*.*',
    '_data/**.*+(yml|yaml|csv|json)',
    '!dist/**/*.*',
    '!_site/**/*.*',
    '!node_modules',
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

// Clean CSS dist
gulp.task('css:clean', function () {
  return del(paths.cssDest + '*');
});

// Process stylesheets
gulp.task('css:build', function () {
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
    .pipe(postcss([customProperties()]))
    .pipe(concat(paths.cssOutput))
    .pipe(cleanCSS())
    .pipe(gulpif(!isProduction, sourcemaps.write()))
    .pipe(rev())
    .pipe(gulp.dest(paths.cssDest))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./_data/css'));
});

// Clean JS dist
gulp.task('js:clean', function () {
  return del(paths.jsDest + '*');
});

// Concatenate and minify JavaScript
gulp.task('js:build', function () {
  return gulp.src(paths.jsFiles)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(sourcemaps.init())
    .pipe(concat(paths.jsOutput))
    .pipe(uglify())
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(rev())
    .pipe(gulp.dest(paths.jsDest))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./_data/js'));
});

// SVG sprite generation
var svgConfig = {
  transform: [{
    svgo: {
      js2svg: {
        useShortTags: false
      }
    }
  }],
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
  watch(paths.svg, function () {
    gulp.start(['svg-sprite']);
  });
  watch(paths.jekyllBuild, function () {
    gulp.start(['jekyll-build']);
  });
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
    ignore: '**/*',
    root: '_site',
    open: false,
    logLevel: 0,
    file: 'index.html',
    wait: 1000
  });
});

// CSS
gulp.task('css', ['css:clean', 'css:build']);

// JS
gulp.task('js', ['js:clean', 'js:build']);

// Build
gulp.task('build', ['css', 'js', 'svg-sprite', 'jekyll-build']);

// Deploy
gulp.task('deploy', ['css', 'js', 'svg-sprite']);

// Default
gulp.task('default', ['build', 'watch', 'live-server']);
