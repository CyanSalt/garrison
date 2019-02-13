import {readFile, writeFile, mkdir, access, watch} from 'fs'
import {dirname, resolve} from 'path'
import {promisify} from 'util'
import {remote} from 'electron'

const promises = {
  readFile: promisify(readFile),
  access: promisify(access),
  mkdir: promisify(mkdir),
  writeFile: promisify(writeFile),
}

const PATH = remote.app.isPackaged ?
  remote.app.getPath('userData') : resolve(__dirname, '..', 'userdata')

export const FileStorage = {
  async load(basename) {
    try {
      return JSON.parse(await this.read(basename))
    } catch (e) {
      return null
    }
  },
  save(basename, data) {
    return this.write(basename, JSON.stringify(data, null, 2))
  },
  async read(basename) {
    try {
      return await promises.readFile(this.filename(basename))
    } catch (e) {
      return null
    }
  },
  async write(basename, content) {
    const filename = this.filename(basename)
    try {
      await promises.mkdir(dirname(filename))
    } catch (e) {
      // Ignore error
    }
    return promises.writeFile(filename, content)
  },
  watch(basename, updater) {
    // `chokidar` is too large; `gaze` seems to be OK. Use native currently.
    try {
      return watch(this.filename(basename), updater)
    } catch (e) {
      return null
    }
  },
  require(basename) {
    const filename = this.filename(basename)
    try {
      return global.require(filename)
    } catch (e) {
      return null
    }
  },
  filename(basename) {
    return resolve(PATH, basename)
  },
}

export default {
  install(Vue) {
    Vue.prototype.$storage = FileStorage
  },
}
