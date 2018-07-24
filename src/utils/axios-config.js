import axios from 'axios'
import Vue from 'vue'

const axiosconfig = {
  baseURL: process.env.API_URL,
  timeout: 3000
}

Vue.prototype.$axios = axios.create(axiosconfig)
