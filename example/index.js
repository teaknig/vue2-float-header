import Vue from 'vue'
import Main from './index.vue'

import FloatHeader from '../src/index.ts'
Vue.use(FloatHeader)

new Vue({
  render: (h) => h(Main),
}).$mount('#app')
