// Require Node Modules
var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    nodesass = require('node-sass'),
    sass = require('gulp-sass'),
    globbing = require('gulp-css-globbing'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    bowerfiles = require('main-bower-files'),
    browsersync = require('browser-sync'),
    reload = browsersync.reload;
 
// Bower Task
gulp.task('bower-build', function() {
  console.log(bowerfiles(),{base:'libraries'})
  gulp.src(bowerfiles(),{base:'libraries'})
    .pipe(gulp.dest('dev/js'))
});

// JS Task
gulp.task('js', function() {
  gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(concat({ path: 'functions.js', stat: {mode: 0666} }))
    .pipe(gulp.dest('build/js'))
});

// Sass Task
gulp.task('sass', function() {
  gulp.src('dev/sass/sensibilities.styles.scss')
    .pipe(sourcemaps.init())
    .pipe(globbing({ extensions: ['.scss'] }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(sourcemaps.write('../maps/css'))
    .pipe(gulp.dest('build/css'))
  
  gulp.src('dev/sass/sensibilities.normalize.scss')
    .pipe(sourcemaps.init())
    .pipe(globbing({ extensions: ['.scss'] }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(sourcemaps.write('../maps/css'))
    .pipe(gulp.dest('build/css'))

  gulp.src('dev/sass/sensibilities.hacks.scss')
    .pipe(sourcemaps.init())
    .pipe(globbing({ extensions: ['.scss'] }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(sourcemaps.write('../maps/css'))
    .pipe(gulp.dest('build/css'))
  
  .pipe(reload({stream: true}));
});

// Browser Sync
gulp.task('browser-sync', function() {
    browsersync({
      proxy: "www.sensibilities.twm"
    });
});

// Run all tasks and watch for changes
gulp.task('default', function() {
  gulp.run('bower-build')
  gulp.run('js')
  gulp.run('sass')
  gulp.run('browser-sync')
  gulp.watch('dev/**/*', function() {
    gulp.run('js')
    gulp.run('sass')
  })
});