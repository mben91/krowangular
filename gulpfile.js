var distpath = './app/assets/build';
var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var scss = require("gulp-scss");
var uglifycss = require("gulp-uglifycss");
var uglifyjs = require("gulp-uglifyjs");
var gutil = require("gulp-util");
var del = require('del');
 
var paths = {
    globalstyles:    'app/assets/styles/global/**/*.scss',
    styles:          ['app/assets/styles/**/*.scss', '!app/assets/styles/global/**/*.scss'],
    templates:       'app/templates/**/*.jade',
    scripts:         'app/**/*.js',
};

// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use any package available on npm 
gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src` 
    return del([distpath + '/*']);
});

gulp.task('styles', function() {
    gulp.src(paths.styles)
        .pipe(scss())
        .pipe(uglifycss())
        .pipe(gulp.dest(function(file) {
            return file.base;
        }));
});

gulp.task('globalstyles', ['clean'], function() {       
    gulp.src(paths.globalstyles)
        .pipe(scss())
        .pipe(uglifycss())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(distpath));
});

gulp.task('scripts', function() {
   gulp.src(paths.scripts)
    .pipe(uglifyjs())
    .pipe(rename(function(path) {
        path.basename = path.basename + '.ext';
    }))
    .pipe(gulp.dest(function(file) {
        return distpath + '/jses/';
    }));
});

gulp.task('templates', function() {
    gulp.src(paths.templates)
        .pipe(jade())
        .pipe(gulp.dest(function(file) {
            return file.base;
        }))
});

// Rerun the task when a file changes 
gulp.task('watch', function() {
    gulp.watch(paths.templates, ['templates']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.globalstyles, ['globalstyles']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['templates', 'globalstyles', 'styles', 'watch']);