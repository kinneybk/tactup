var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var vendor = {
  scripts: [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/foundation/js/foundation.min.js',
    'bower_components/scrollreveal/dist/scrollReveal.min.js',
    'bower_components/slick-carousel/slick/slick.min.js'
  ],
  fonts: [
    'bower_components/font-awesome/fonts/*',
    'bower_components/slick-carousel/slick/fonts/*',
  ],
  images: [
    'bower_components/slick-carousel/slick/ajax-loader.gif'
  ]
};

gulp.task('styles', function() {
  gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      css: 'stylesheets',
      sass: 'scss'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('stylesheets'));
});

gulp.task('scripts', function() {
  gulp.src(vendor.scripts)
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('js'))
});

gulp.task('fonts', function() {
  gulp.src(vendor.fonts)
    .pipe(gulp.dest('fonts'))
});

gulp.task('images', function() {
  gulp.src(vendor.images)
    .pipe(gulp.dest('images'))
});

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['styles'])
});

gulp.task('default', ['styles', 'scripts', 'fonts', 'images', 'watch']);
