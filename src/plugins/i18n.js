import {remote} from 'electron'
import {readFile} from 'fs'
import {promisify} from 'util'

const promises = {
  readFile: promisify(readFile),
}

export const store = {
  locale: null,
  translations: [],
  library: [],
  dictionary: {},
}

export const I18N = {
  translate (message) {
    return store.dictionary[message] || message.split('#!')[0]
  },
  generate() {
    store.dictionary = store.translations
      .filter(translation => translation['@locales'].includes(this.locale))
      .reduce((a, b) => ({...a, ...b}))
  },
  register(translation) {
    store.translations.push(translation)
  },
  async loadFile(file, placeholder) {
    const data = await promises.readFile(file)
    if (placeholder) {
      const index = store.translations.indexOf(placeholder)
      store.translations.splice(index, 1, data)
    } else {
      this.register(data)
    }
    return data
  },
  registerFile(locales, file) {
    if (locales.includes(store.locale)) {
      return this.loadFile(file)
    }
    const placeholder = {}
    this.register(placeholder)
    store.library.push({locales, file, placeholder})
  },
  async lazyloadFile(idler) {
    const index = store.library.indexOf(idler)
    store.library.splice(index, 1)
    await this.loadFile(idler.file, idler.placeholder)
  },
  setLocale(locale) {
    store.locale = locale
    store.library
      .filter(idler => idler.locales.includes(locale))
      .forEach(async idler => {
        await this.lazyloadFile(idler)
        this.generate()
      })
    this.generate()
  },
}

I18N.setLocale(remote.app.getLocale())

export default {
  install(Vue) {
    Vue.prototype.i18n = Object.assign(I18N.translate, I18N)
  },
}
