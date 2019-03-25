import Vue from 'vue'
import Router from 'vue-router'
import homepage from 'src/views/homepage'
import painting from 'src/components/painting'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: homepage,
      children: [
        {path: '/', redirect: 'painting'},
        {path: '/painting', name: '', component: painting}
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = to.name
  }
  window.scrollTo(0, 0)
  next()
})

export default router
