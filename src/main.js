import Vue from 'vue'

// import de materializecss
import './../node_modules/materialize-css/dist/js/materialize.min.js'
import './../node_modules/materialize-css/dist/css/materialize.min.css'

// Import des config diverses
import './utils/axios-config.js'
import {router} from './utils/router-config.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue').default)
})
