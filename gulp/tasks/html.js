import gulp from 'gulp'
import newer from 'gulp-newer'
import config from '../config.js'

const htmlPaths = config.html

export default () => {
    return gulp.src(htmlPaths.src)
        .pipe(newer(htmlPaths.build))
        .pipe(gulp.dest(htmlPaths.build))
}
