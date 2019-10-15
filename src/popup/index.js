import Vue from 'vue'
import AppComponent from './App/App.vue'
import router from './utils/router'
import store from './utils/store'
Vue.component('app-component', AppComponent)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: createElement => {
    return createElement(AppComponent)
  }
})
