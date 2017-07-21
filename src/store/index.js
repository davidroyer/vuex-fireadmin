import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { auth, GoogleProvider, GithubProvider } from '../firebase.js';
import router from '../router'

Vue.use(Vuex)

const state = {
  user: null
}

const mutations = {
  setActiveUser (state, value) {
    state.user = value
  }
}

const actions = {
  checkForActiveUser({commit}) {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        resolve(user)
        commit('setActiveUser', user)
      }, (error) => {
        console.log(error)
      })
    })
  },

  promiseCheck({dispatch, commit}) {
    dispatch('checkForActiveUser')
    .then((fulfilled) => {

    }).catch((error) => {
        // An error happened.
    });
  },

  signInWithGoogle({commit}) {
    auth.signInWithRedirect(GoogleProvider)
  },

  signInWithGithub () {
    auth.signInWithRedirect(GithubProvider)
  },

  signInAnonymously () {
    console.log('set this up');
  },

  async logout({commit}) {
    await auth.signOut()
    commit('setActiveUser', null)
    router.replace('/login')
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
