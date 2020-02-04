const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');

gulp.task('nunjucks', function() {
  return gulp.src('pages/**/*.+(njk)')
  .pipe(data(function() {
    return require('./data/geo.json')
  }))
  .pipe(nunjucksRender({
      path: ['./templates']
    }))
  .pipe(gulp.dest('./docs'))
});