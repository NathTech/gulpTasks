import gulp from 'gulp'

import sass from './gulp/tasks/sass'
import images from './gulp/tasks/images'
import html from './gulp/tasks/html'
import {
    sync,
    syncReload,
} from './gulp/tasks/syncReload'
import clean from './gulp/tasks/clean'

import config from './gulp/config'

const build = gulp.parallel(sass, images, html)

const watch = gulp.series(sync, (done) => {

    // page changes
    gulp.watch(config.html.src, gulp.series(html, syncReload))
  
    // image changes
    gulp.watch(config.images.src, images)
  
    // css changes
    gulp.watch(config.sass.src, sass)
  
    done()

  })
  
export default gulp.series(clean, build, watch)

export {
    sass,
    images,
    html,
    build,
    watch,
    clean,
}