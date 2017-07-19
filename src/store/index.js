import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { auth, GoogleProvider, GithubProvider } from '../firebase.js';
import router from '../router'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  user: null
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setActiveUser (state, value) {
    state.user = value
  },
  setUser (state, value) {
    state.user = value
    router.push('/admin')
  }
}

const actions = {
  checkForActiveUser({commit}) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        commit('setActiveUser', user)
      }
    })
  },

  async signInWithGoogle({commit}) {
    let {user} = await auth.signInWithRedirect(GoogleProvider)
    commit('setUser', user)
  },

  async logout({commit}) {
    await auth.signOut()
    commit('setUser', null)
  }
}

// getters are functions
// const getters = {
//   user: state => state.user
// }

export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations
})
