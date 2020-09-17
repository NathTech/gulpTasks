import gulp from 'gulp'
import newer from 'gulp-newer'
import config from '../config.js'

const imagesPaths = config.images

export default () => {
  return gulp.src(imagesPaths.src)
    .pipe(newer(imagesPaths.build))
    .pipe(gulp.dest(imagesPaths.build))
}