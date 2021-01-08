let gulp = require('gulp');
let jsdoc = require('gulp-jsdoc3');

gulp.task('docs', function (cb) {
  const config = require('./jsdoc.json');

  gulp.src(['README.md', './interface/**/*.js'], { read: false })
    .pipe(jsdoc(config, cb));
});
