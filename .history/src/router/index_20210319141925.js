import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from './myVueRouter' // 修改成自己自己写的router
Vue.use(VueRouter) // 使得每个vue组件都可以拥有store实例
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../view/About.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router