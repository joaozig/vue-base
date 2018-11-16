import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'

Vue.use(Router)

const requiresAuthentication = (to, from, next) => {
  if(store.getters['auth/isAuthenticated']) {
    next()
  } else {
    next('/login')
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'login' },
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/Admin.vue'),
      beforeEnter: requiresAuthentication
    },
  ]
})
