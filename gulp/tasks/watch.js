import gulp from 'gulp'
import {
    sync,
    syncReload,
} from './syncReload'
import config from '../config'

const watch = config.watch

const watchTasks = watch.map(({ taskName, reload = false }) => {
    const exportedTask = require('./' + taskName).default
    const task = reload ? gulp.series(exportedTask, syncReload) : exportedTask
    const src = config[taskName].src
    const srcs = Array.isArray(src) ? src.map(({ src }) => src) : src

    return (done) => {
        gulp.watch(srcs, task)
        done()
    }
})

export default (done) => {
    return gulp.series(sync, gulp.parallel(...watchTasks), (watchTasksDone) => {
        watchTasksDone()
        done()
    })() // run the task
}
