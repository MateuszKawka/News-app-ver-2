// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueCarousel from 'vue-carousel'
import Vuex from 'vuex'
import './registerServiceWorker'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: .2,
  loading: 'static/45.gif',
  attempt: 3,
  observer: true,
})

Vue.use(Vuex)
Vue.use(VueCarousel)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },  
  template: '<App/>'
})


