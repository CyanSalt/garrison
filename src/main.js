import Vue from 'vue'
import FileStorage from './plugins/storage'
import I18N from './plugins/i18n'
import Root from './components/root'

Vue.use(FileStorage)
Vue.use(I18N)

new Vue(Root)
