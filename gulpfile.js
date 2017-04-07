var gulp = require('gulp');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var devBuild = (process.env.NODE_ENV !== 'production')
var folder = {
  src: 'src/',
  build: 'build/'
}

gulp.task('images', function(){
  var out = folder.build + 'images/';
  return gulp.src(folder.src + 'images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(out));
})
