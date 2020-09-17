import del from 'del'
import config from '../config.js'

export default () => {
    return del([config.dir.build + '**', `!${config.dir.build}`], {
      force: true,
    })
  }
  