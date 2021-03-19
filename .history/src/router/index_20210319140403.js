import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
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