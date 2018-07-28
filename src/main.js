import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from "axios"
import VueAxios from "vue-axios"

import "vue2-animate/dist/vue2-animate.min.css";

Vue.config.productionTip = false
Vue.use(VueAxios,Axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
