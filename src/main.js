// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebase, { auth, GoogleProvider, GithubProvider } from './firebase.js';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.dispatch('checkForActiveUser').then(() => {
    let routeIsLogin = to.path === '/login' ? true : false
    let currentUser = store.state.user;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
      next('login')
    }
    if (routeIsLogin && currentUser) {
      next('admin')
    }
    else next()
  })
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
