import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VList,
  VGrid,
  VToolbar,
  VForm,
  VTextField,
  VDialog,
  VSelect,
  transitions
} from 'vuetify';
import './stylus/main.styl';
import '../static/css/font-awesome.min.css';
import Scroll from 'vue-scrollto';
import axios from 'axios';

import App from './App';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VList,
    VGrid,
    VToolbar,
    VForm,
    VTextField,
    VDialog,
    VSelect,
    transitions
  }
});
Vue.use(Scroll, {
  container: 'body',
  duration: 500,
  offset: -70,
  cancelable: true,
  easing: 'ease'
});
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
