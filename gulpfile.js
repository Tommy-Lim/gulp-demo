var gulp = require('gulp');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var htmlclean = require('gulp-htmlclean')
var devBuild = (process.env.NODE_ENV !== 'production')
var folder = {
  src: 'src/',
  build: 'build/'
}

// IMAGES PROCESSING AND COMPRESSING NEW IMAGES
gulp.task('images', function(){
  var out = folder.build + 'images/';
  return gulp.src(folder.src + 'images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(out));
})

// HTML PROCESSING
gulp.task('html', ['images'], function(){
  var out = folder.build + 'html/';
  var page = gulp.src(folder.src + '/html/**/*')
    .pipe(newer(out));

  // MINIFY PRODUCTION CODE
  if(!devBuild){
    page = page.pipe(htmlclean());
  }

  return page.pipe(gulp.dest(out));
})
