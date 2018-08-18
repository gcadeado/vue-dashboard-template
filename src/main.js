// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import { MediaQueries, CommonBands } from 'vue-media-queries'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang' // Internationalization module
import * as filters from './filters' // Global filters

const mediaQueries = new MediaQueries({
  bands: CommonBands.Bulma
})
Vue.use(mediaQueries) // https://www.npmjs.com/package/vue-media-queries#setup

// Register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router,
  i18n,
  mediaQueries
})
