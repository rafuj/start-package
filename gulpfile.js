const gulp = require('gulp');
const {
  series
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cssbeautify = require('gulp-cssbeautify');

function style() {
  return gulp.src('./assets/sass/main.scss')
    .pipe(sass())
    .pipe(cssbeautify())
    .pipe(gulp.dest('./assets/css/'))
}

function watch() {
  gulp.watch('./assets/sass/**/*.scss', style);
}

exports.watch = watch;