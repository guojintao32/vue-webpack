
import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>',
  render: (h) => h(App)
})
