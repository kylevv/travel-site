var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function(){
  console.log("Default gulp task executed!");
});

gulp.task('whatever', function(){
  console.log("Whatever...");
});

gulp.task('styles', function(){
  return gulp.src('./app/styles/**/*.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('watch', function(){

  watch('./index.html', function(){
    gulp.start('whatever');
  });

  watch('./app/styles/**/*.css', function(){
    gulp.start('styles');
  });

});