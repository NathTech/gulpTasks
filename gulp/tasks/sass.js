import gulp from 'gulp'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import config from '../config.js'

const sassPaths = config.sass

export default () => {
  return gulp.src(sassPaths.src)
    .pipe(sass())
    .pipe(concat(sassPaths.outputFile))
    .pipe(gulp.dest(sassPaths.build))
}