import Vue from 'vue'
import App from './App.vue'

import router from './router/router'

Vue.config.productionTip = false

Vue.use(router)

new Vue({
  render: h => h(App),
}).$mount('#app')
