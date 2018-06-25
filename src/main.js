// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import './../node_modules/materialize-css/dist/js/materialize.min.js'
import './../node_modules/materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false

const axiosconfig = {
  baseURL: process.env.API_URL,
  timeout: 3000
}

// Setting up Axios on Vue Instance, for use via this.$axios
Vue.prototype.$axios = axios.create(axiosconfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
