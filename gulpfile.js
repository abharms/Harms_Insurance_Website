var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');


gulp.task('compileSass', function(){
	return gulp.src('scss/application.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
})


gulp.task('styles', function() {
	gulp.src('app/scss/style.scss')
	.pipe(sass({
		style: 'expanded'
	}))
	.pipe(prefix('last 2 versions'))
	.pipe(gulp.dest('app/css/'));

})
