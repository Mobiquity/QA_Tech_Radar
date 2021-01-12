import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Backend',
    name: 'BE',
    component: () => import('@/views/Backend.vue')
  },
  {
    path: '/Frontend',
    name: 'FE',
    component: () => import('@/views/Frontend.vue')
  },
  {
    path: '/Mobile',
    name: 'Mobile',
    component: () => import('@/views/Mobile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
