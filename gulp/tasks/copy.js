import gulp from 'gulp'
import newer from 'gulp-newer'
import config from '../config.js'

const copyPaths = config.copy

const copyAllTasks = copyPaths.map(({ src, build }) => {
    return (taskDone) => {
        gulp.src(src)
            .pipe(newer(build))
            .pipe(gulp.dest(build))
        taskDone()
    }
})

export default (done) => {
    return gulp.parallel(...copyAllTasks, (tasksDone) => {
        tasksDone()
        done()
    })()
}