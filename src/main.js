import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from './components/Icon.vue'

Vue.config.productionTip = false

Vue.component('font-awesome-icon', Icon)

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })