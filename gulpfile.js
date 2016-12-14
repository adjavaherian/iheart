var gulp = require('gulp');
var browserify = require('browserify');
var sass = require('gulp-sass');
var transform = require('vinyl-transform');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var express = require('express');
var del = require('del');
var exec = require('child_process').exec;

var buildDir = './dist/';
var servePort = 3000;


//We only configure the server here and start it only when running the watch task
var server = express();
server.use(express.static(buildDir));
server.use(express.static('example'));

var errorHandler = function(err) {
    gutil.log(gutil.colors.red('Error'), err.message);
}

gulp.task('build', function() {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src('./src/**/*.js', {base: './src/'})
        .pipe(browserified).on('error', errorHandler)
        .pipe(sourcemaps.init({loadMaps: true}))
        // transformations here
        .pipe(uglify())
        //output
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildDir));
});

gulp.task('serve', function() {
    server.listen(servePort);
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build'])
});

gulp.task('clean', function(cb){
    del([buildDir], cb);
});

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('develop', ['build','watch', 'sass:watch', 'serve']);
