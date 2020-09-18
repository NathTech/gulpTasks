import gulp from 'gulp'
import newer from 'gulp-newer'
import config from '../config.js'

const cssPaths = config.css

export default () => {
    return gulp.src(cssPaths.src)
        .pipe(newer(cssPaths.build))
        .pipe(gulp.dest(cssPaths.build))
}