import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpIf from 'gulp-if';
import gm from 'gulp-gm';
import path from 'path';
import rename from 'gulp-rename';
import errorHandler from 'gulp-plumber-error-handler';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('resize', () => (
	gulp.src('app/thumbs/*.{jpg,png}')
		.pipe(plumber({errorHandler: errorHandler(`Error in \'resize\' task`)}))
		.pipe(gulpIf(function(file) {
			// console.log();
			if (path.extname(file.path) == '.jpg') return true;
		}, gm(function(gmfile) {
				return gmfile.setFormat('png');
			})
		))
		.pipe(gm(function(gmfile) {
			return gmfile.resize(50, 50);
			// return gmfile.resize(30, 30);
		}))
		.pipe(rename({suffix: '_b'}))
		.pipe(gulp.dest('app/thumbs_new/'))
));