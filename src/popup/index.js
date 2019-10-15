import Vue from 'vue'
import AppComponent from './App/App.vue'
import router from './utils/router'
import store from './utils/store'
import axios from 'axios'
Vue.component('app-component', AppComponent)

Vue.prototype.$axios = axios

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: createElement => {
    return createElement(AppComponent)
  }
})
