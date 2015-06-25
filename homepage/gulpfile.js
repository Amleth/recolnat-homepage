var gulp = require('gulp');
var sftp = require('gulp-sftp');
var shell = require('gulp-shell');
var rename = require('gulp-rename');

//
// DEV
//

gulp.task('build-dev', ['route-root-dev'], shell.task([
  'webpack-dev-server --devtool eval --progress --colors --content-base build --port 8088'
]));

gulp.task('route-root-dev', function() {
  gulp.src('./root-routes/root-route-dev.js')
  .pipe(rename('root-route.js'))
  .pipe(gulp.dest('./src'));
});

//
// PROD
//

gulp.task('html', function() {
  gulp.src('./build/index.html')
  .pipe(gulp.dest('./dist'));
});

gulp.task('build-prod', ['route-root-prod', 'html'], shell.task([
  'webpack -p --config webpack.production.config.js --progress --colors'
]));

gulp.task('route-root-prod', function() {
  gulp.src('./root-routes/root-route-prod.js')
  .pipe(rename('root-route.js'))
  .pipe(gulp.dest('./src'));
});

gulp.task('deploy', ['build-prod'], function() {
  gulp.src('dist/*')
    .pipe(sftp({
      host: 'wp5test.mnhn.fr',
      remotePath: '/home/cnamuser/www/homepage-test',
      user: 'cnamuser',
      pass: ""
    }));
});