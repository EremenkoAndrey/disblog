var gulp = require('gulp'),
    less = require('gulp-less'),
    rigger = require('gulp-rigger'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer');
    
gulp.task('less', function () {
  return gulp.src('./public_html/develop/less/template.less')
    .pipe(less())
//   .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
//   .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public_html/static/css'));
});

gulp.task('template', function () {
    return gulp.src('./public_html/develop/index.html')
            .pipe(rigger())
            .pipe(gulp.dest('./public_html'));
});

gulp.task('default', function () {
    gulp.watch([
        './public_html/develop/*.html'], ['template']);
    gulp.watch([
        './public_html/develop/less/*.less',
        './public_html/develop/blocks/*/*.less'], ['less']);
});

