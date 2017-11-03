
import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VList,
  VGrid,
  VToolbar,
  VForm,
  VTextField,
  VCarousel,
  transitions
} from 'vuetify'
import './stylus/main.styl'
import '../static/css/font-awesome.min.css'

import App from './App'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VList,
    VGrid,
    VToolbar,
    VForm,
    VTextField,
    VCarousel,
    transitions
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
