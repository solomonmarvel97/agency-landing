import Vue from 'vue'
import VueRouter from 'vue-router'

// layout
import Main from '@/layouts/main.vue'

// pages
import Index from '../pages/Index/Main.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Index',
        component: Index
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
