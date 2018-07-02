// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// axios
import axios from 'axios'
Vue.use(ElementUI)
// Vue.use({
//   install (Vue) {
//   }
// })
axios.interceptors.request.use(request => {
  request.url = 'http://127.0.0.1/shopview' + request.url
  return request
})
// Vue.prototype.axios = () => axios()
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
