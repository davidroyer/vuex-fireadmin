import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import store from '../store'

Vue.use(Router)

function beforeEachAuth (to, from, next) {
console.log('before each ran!');
  // if (!store.state.user) {
  //   next({
  //     path: '/login',
  //     query: { redirect: to.fullPath }
  //   })
  // } else {
  //   next()
  // }
}

function requireAuth (to, from, next) {
  console.log(store);
  console.log('From:', from)
  console.log('To:', to)
  console.log(store.state.user);
  if (!store.state.user) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // {
    //   path: '/admin',
    //   name: 'Admin',
    //   component: Admin,
    //   meta: { requiresAuth: true }
    // },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  beforeEach: beforeEachAuth
})
