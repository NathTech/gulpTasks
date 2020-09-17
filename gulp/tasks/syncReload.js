import config from '../config.js'

const syncOptions = config.sync

let browsersync = false

const sync = (done) => {
    if (browsersync === false) {
        browsersync = require('browser-sync').create()
        browsersync.init(syncOptions)
    }
    done()
}

const syncReload = (done) => {
    browsersync && browsersync.reload()
    done()
}

export {
    sync,
    syncReload,
}