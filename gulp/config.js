const dir = {
    src: 'src/',
    build: 'build/',
}

export default {
    dir,
    images: {
        src: dir.src + 'assets/images/**/*',
        build: dir.build + 'assets/images',
    },
    html: {
        src: dir.src + '**/*.html',
        build: dir.build,
    },
    sass: {
        src: dir.src + 'assets/scss/**/*.scss',
        outputFile: 'styles.css',
        build: dir.build + 'assets/css'
    },
    sync: {
        files: dir.build + '**/*',
        open: false,
        notify: false,
        ghostMode: false,
        server: dir.build,
        ui: {
            port: 8001
        }
    }
}