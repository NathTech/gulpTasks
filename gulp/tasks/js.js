import gulp from 'gulp'
import newer from 'gulp-newer'
import babel from 'gulp-babel'
import config from '../config.js'

const jsPaths = config.js

export default () => {
    return gulp.src(jsPaths.src)
        .pipe(newer(jsPaths.build))
        .pipe(babel({
            'presets': ['@babel/preset-env'],
        }))
        .pipe(gulp.dest(jsPaths.build))
}