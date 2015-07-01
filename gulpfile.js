//This is a long list of variables that pulls in all of the various tasks modules we want to be able to use.

var gulp      = require('gulp'),
    sass     = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    livereload   = require('gulp-livereload');

//Add our first task to the file

 gulp.task('styles', function(){
    return sass('scss/') 
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest(''))
        .pipe(autoprefixer())
        .pipe(minifycss())
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

 //Setting default task

 gulp.task('default',['styles']);

 //the watch task

 gulp.task('watch', function() {
    
    livereload.listen();
    
    // Watch .scss files
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('scss/**/*.scss', ['styles']);
 
});

//This task runs continuously in a command line instance after you type in gulp watch, and keeps track of the files defined in the lines: 
//gulp.watch('scss/*.scss', ['styles']); 
//gulp.watch('scss/**/*.scss', ['styles']);