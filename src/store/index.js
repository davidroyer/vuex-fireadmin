import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { auth, GoogleProvider, GithubProvider } from '../firebase.js';

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
  setUser (state, value) {
    state.user = value
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  checkForActiveUser({commit}) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        commit('setUser', user)
      }
    })
  },
  signInWithGoogle({commit}) {
    auth.signInWithRedirect(GoogleProvider)
    .then((result) => {
      commit('setUser', result.user)
    })
  },
  logout({commit}) {
    auth.signOut()
    .then(() => {
      commit('setUser', null);
    }).catch(function(error) {
        // An error happened.
    });
  }
}

// getters are functions
// const getters = {
//   user: state => state.user
// }

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  // getters,
  actions,
  mutations
})
