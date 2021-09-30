import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
import 'popper.js'
import 'bootstrap'

import './assets/css/style.scss'
import i18n from './i18n'

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  let language = to.params.lang
  if(!language){
    language = 'ar'
  }
  i18n.locale = language
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
