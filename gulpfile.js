var gulp = require('gulp'),
    less = require('gulp-less'),
    rigger = require('gulp-rigger');
    
gulp.task('less', function () {
  return gulp.src('./public_html/develop/less/template.less')
    .pipe(less())
    .pipe(gulp.dest('./public_html/static/css'));
});

gulp.task('template', function () {
	gulp.src('./public_html/develop/templates/index.html')
		.pipe(rigger())
		.pipe(gulp.dest('./public_html'));
});

gulp.task('default', function () {
    gulp.watch(['./public_html/develop/templates/*.html'], ['template']);
    gulp.watch(['./public_html/develop/less/*.less'], ['less']);
});

