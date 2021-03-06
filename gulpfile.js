const { task, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const { write, init } = require('gulp-sourcemaps');
 
task('minify-css',() => 
  src('./src/css/main.css')
    .pipe(init())
    .pipe(cleanCSS())
    .pipe(write())
    .pipe(dest('dist'))
);
