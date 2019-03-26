// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/reset.styl'
Vue.use(ElementUI)
Vue.use(vuex)
Vue.config.productionTip = false
const store = new vuex.Store({
  // 全局状态
  state: {
    sideRightStatus: true,
    editFormList: {
      name: '',
      placeholder: '',
      value: '',
      options: []
    }
  },
  getters: {

  },
  mutations: {
  },
  actions: {

  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
