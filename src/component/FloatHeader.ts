import Vue, { CreateElement, VNode } from 'vue'

export default Vue.extend({
  render(h: CreateElement): VNode {
    return h('header')
  },
})
