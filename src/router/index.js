import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Admin from '@/components/Admin'
import Settings from '@/components/Admin/Settings'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import SignUp from '@/components/SignUp'
import Test from '@/components/Test'
import store from '../store'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true },
      children: [
              {
                path: 'settings',
                name: 'Settings',
                component: Settings
              }
            ]
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
