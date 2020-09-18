import gulp from 'gulp'

import sass from './gulp/tasks/sass'
import images from './gulp/tasks/images'
import html from './gulp/tasks/html'

import watch from './gulp/tasks/watch'
import clean from './gulp/tasks/clean'


const build = gulp.parallel(sass, images, html)

export default gulp.series(clean, build, watch)

export {
    sass,
    images,
    html,
    build,
    watch,
    clean,
}