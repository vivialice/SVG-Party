var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () { 
    gulp.src('./scss/**/*.scss')
        .pipe(sass({
        	errLogToConsole: true
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function(){
	gulp.watch('./scss/**.scss', ['sass'])	
});