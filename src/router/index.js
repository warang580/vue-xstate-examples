import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home"),
  },
  {
    path: '/toggle',
    name: 'Toggle',
    component: () => import("@/views/Toggle"),
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import("@/views/Counter"),
  },
  {
    path: '/temperature',
    name: 'Temperature',
    component: () => import("@/views/Temperature"),
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () => import("@/views/Booking"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
