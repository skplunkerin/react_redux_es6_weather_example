// required npm packages for gulp tasks
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    sass = require('gulp-sass'),
    server = require('gulp-server-livereload')
;

// watches and bundles index.js via watchify, browserify, and babelify
var bundler = watchify(
  browserify({
    entries: ["./src/js/index.js"],
    transform: [
      babelify.configure({
        presets: ["react", "es2015", "stage-1"]
      })
    ],
    extensions: ['.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: false
  })
);
// triggers the build of jsx files from bundler
function bundle(){
  return bundler
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'));
};
// when an update is found on bundler, trigger build()
bundler.on('update', bundle)

// Will run `react`, `dev` and `sass` tasks and watch for changes
// $ gulp
gulp.task('default', ['react', 'dev', 'sass', 'sass:watch']);

// Will run to compile all React .js files to javascript and watch for new changes
// $ gulp react
gulp.task('react', function(){
  bundle()
});

// Will build server with livereload
// $ gulp dev
gulp.task('dev', function(done){
  gulp.src('public')
    .pipe(server({
      livereload: {
        enable: true,
        filter: function(filePath, cb){
          if(/public\/bundle.js/.test(filePath)){
            cb(true)
          } else if(/public\/main.css/.test(filePath)){
            cb(true)
          }
        }
      },
      open: true
    }));
});

// Will run once to compile .scss to .css
// $ gulp sass
gulp.task('sass', function(){
  gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
});

// Will run to compile .scss to .css and watch for changes
// $ gulp sass:watch
gulp.task('sass:watch', function(){
  gulp.watch('./src/scss/main.scss', ['sass']);
});
