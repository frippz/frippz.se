/**
 * gulpfile.js
 *
 * All the yummy build stuff!
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
    htmlhint         = require('gulp-htmlhint'),
    w3cjs            = require('gulp-w3cjs'),
    dirSync          = require('gulp-directory-sync'),
    webserver        = require('gulp-webserver');

// Configure paths
var paths = {

  // Inputs
  js: ['./src/js/**/*.js'],
  css: ['./src/css/**/*.css'],

  // Static assets
  images: './src/i/',

  // Outputs
  jsOutput: 'main.js',
  cssOutput: 'styles.css',

  // Destinations
  jsDest: './gui/js/',
  cssDest: './gui/css/',
  imgDest: './gui/i/',

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
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(postcss([customProperties()]))
    .pipe(concat(paths.cssOutput))
    .pipe(minifyCss({compatibility: 'ie8'}))
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
    .pipe(gulpif(!isProduction, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.jsDest));
});

// HTMLhint
gulp.task('htmlhint', function () {
//  return gulp.src(paths.templates)
//     .pipe(htmlhint('.htmlhintrc'))
//     .pipe(htmlhint.reporter('htmlhint-stylish'))
//     .pipe(htmlhint.failReporter({ suppress: true }));
});

// eslint
gulp.task('eslint', function () {
  return gulp.src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format());
});

// Validation
gulp.task('validate', function () {
  // return gulp.src(paths.templates)
  //   .pipe(w3cjs());
});

// Linting task
gulp.task('lint', ['htmlhint', 'eslint', 'validate']);

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
gulp.task('build', ['css', 'js', 'images']);

// Default
gulp.task('default', ['watch', 'css', 'js', 'images', 'lint']);
