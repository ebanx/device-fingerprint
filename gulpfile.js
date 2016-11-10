var gulp = require( 'gulp' );
var $ = require( 'gulp-load-plugins' )();

gulp.task('scripts', function() {
  gulp.src('./src/device-fingerprint.js')
    .pipe($.uglify({mangle: true}))
  	.pipe(gulp.dest('./dist/'))
  ;
});

gulp.task('default', ['scripts']);