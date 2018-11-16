import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'
import DefaultLayout from '@/layouts/DefaultLayout'
import LoginLayout from '@/layouts/LoginLayout'

Vue.config.productionTip = false

Vue.component('default-layout', DefaultLayout)
Vue.component('login-layout', LoginLayout)

Vue.use(VueProgressBar, {
  color: '#495a98',
  failedColor: '#ff6767',
})

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')