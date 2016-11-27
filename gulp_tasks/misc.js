const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);
gulp.task('copy', copy);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!${conf.paths.src}', '/**/*.{less,ts,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}

function copy() {

  // return a promise to let the callfunction know when done;
  return new Promise(function(resolve, reject) {

      // copy font-awesome fonts to fonts directory
      gulp.src(conf.paths.nodes + '/font-awesome/fonts/**/*.{ttf,woff,eof,svg}').pipe(gulp.dest(conf.paths.src + '/app/fonts'));
      // copy font-awesome css to css dir
      gulp.src(conf.paths.nodes + '/font-awesome/css/*.min.css').pipe(gulp.dest(conf.paths.src + '/app/css'));
      // copy bootstrap css to css dir
      gulp.src(conf.paths.nodes + '/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest(conf.paths.src + '/app/css'));
      // copy bootstrap js to js dir
      gulp.src(conf.paths.nodes + '/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest(conf.paths.src + '/app/js'));

      resolve();
  });

}
