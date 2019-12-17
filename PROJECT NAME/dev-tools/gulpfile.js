// GET STARTED
// 1. Install Gulp4 in "dev-tools"
// Press in cmd: npm install --save-dev gulp
// 2. For started works press in cmd "gulp" anc Ctrl+C for Stopping
// ========================================================================

var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

function sass_css(done) {
	gulp.src('../HTML/sass/main.scss')
		.pipe(sass())
		.pipe( gulp.dest('../HTML/css/') )
		.pipe(sourcemaps.init())
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe (autoprefixer ({
			cascade: false
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(rename({suffix: '.min'}))
		.pipe( gulp.dest('../HTML/css/') );
	done();
}

function watchSass() {
	gulp.watch("../HTML/sass/main.scss", sass_css);
}

gulp.task('default', watchSass);
