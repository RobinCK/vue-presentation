const gulp = require('gulp');
const dependencies = require('gulp-web-dependencies');
const copy = require('gulp-copy');
const less = require('gulp-less');
const mergeStream = require('merge-stream');
const path = require('path');
const distPath = './dist';

gulp.task('dependencies', () => {
  return gulp.src('src/index.html')
    .pipe(dependencies({
      dest: distPath,
      prefix: 'vendor',
    }))
    .pipe(gulp.dest(distPath));
});

gulp.task('copy', () => {
  const folders = ['images'];

  return mergeStream(
    ...folders.map(folder => gulp.src([`src/${folder}/*`])
      .pipe(gulp.dest(path.join(distPath, folder)))
    )
  );

});

gulp.task('less', () => {
  return gulp.src('./src/css/styles.less')
    .pipe(less())
    .pipe(gulp.dest(path.join(distPath, 'css')));
});

gulp.task('default', ['dependencies', 'less', 'copy']);
