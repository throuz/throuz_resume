import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faGithubSquare, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faEnvelopeSquare, faFacebookSquare, faTwitterSquare, faGithubSquare, faLinkedin, faStackOverflow)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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