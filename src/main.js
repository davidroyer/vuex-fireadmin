// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

// function beforeEachAuth (to, from, next) {
// console.log('before each ran!');
// next()
//   // if (!store.state.user) {
//   //   next({
//   //     path: '/login',
//   //     query: { redirect: to.fullPath }
//   //   })
//   // } else {
//   //   next()
//   // }
// }

router.beforeEach((to, from, next) => {
  console.log('RANNNN');
  console.log(to);
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.user) {
    next({ path: '/login', query: { redirect: to.fullPath }});
  } else {
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    this.$store.dispatch('checkForActiveUser')
  },
})
