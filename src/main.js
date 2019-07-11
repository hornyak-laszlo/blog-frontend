// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(Meta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
