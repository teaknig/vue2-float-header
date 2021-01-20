import FloatHeader from './component/FloatHeader'
import _Vue from 'vue'

export function install(Vue: typeof _Vue) {
  Vue.component('FloatHeader', FloatHeader)
}

export default install
