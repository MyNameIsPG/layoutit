import Vue from 'vue'
Vue.component('my-component-name', {
  data () {
    return { val: '' }
  },
  render () {
    return `<el-input v-if="element.type==1" v-model="" placeholder="请输入内容"></el-input>`
  }
})
