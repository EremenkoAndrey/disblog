var gulp = require('gulp'),
        less = require('gulp-less'),
        rigger = require('gulp-rigger'),
        postcss = require('gulp-postcss'),
        sourcemaps = require('gulp-sourcemaps'),
        autoprefixer = require('autoprefixer'),
        base64 = require('postcss-base64');

gulp.task('less', function () {
  return gulp.src('./develop/less/template.less')
    .pipe(less())
            .pipe(postcss([
                autoprefixer({
                    browsers: ['last 2 versions']
                }),
                base64({
                    extensions: ['.svg']
                })
            ]))
    .pipe(gulp.dest('./public_html/static/css'));
});

gulp.task('template', function () {
    return gulp.src('./develop/index.html')
            .pipe(rigger())
            .pipe(gulp.dest('./public_html'));
});

gulp.task('default', function () {
    gulp.watch([
        './develop/**/*.html'], ['template']);
    gulp.watch([
        './develop/less/*.less',
        './develop/blocks/*/*.less'], ['less']);
});

