const gulp = require('gulp');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const watch = require('gulp-watch');


require('babel-core/register');

gulp.task('js', function() {
    return watch('./src/**/*.js', {verbose:true, events : ['change','add']}, function() {
	console.log("running browserify");
	return browserify('src').transform(babel).bundle().pipe(source('bundle.js')).pipe(gulp.dest('dist'));
    });
})
