import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ScrollAnimation from './directives/scrollAnimation'

import '../src/styles/main.scss'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueAgile from 'vue-agile'
 
Vue.use(VueAgile)

Vue.directive('scrollAnimation', ScrollAnimation)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
