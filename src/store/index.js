import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { auth, GoogleProvider, GithubProvider } from '../firebase.js';
import router from '../router'

Vue.use(Vuex)

const state = {
  user: null,
  items: [],
  item: ''
}

const mutations = {
  setActiveUser (state, value) {
    state.user = value
  },
  setItems (state, value) {
    state.items = value
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
  signUpWithEmail({commit}, userInfo) {
    let {email, password} = userInfo
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  },
  signInWithGoogle({commit}) {
    // window.open('/#/test')
    // auth.signInWithPopup(GoogleProvider)
    auth.signInWithRedirect(GoogleProvider)
  },

  signInFromBrowser({commit}) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=-1000,top=-1000`;

    window.open('/#/test', 'test', params);
    // window.open('/#/test', '_blank')
  },

  signInWithGithub () {
    auth.signInWithRedirect(GithubProvider)
  },

  async signInWithEmail ({commit}, userInfo) {
    let {email, password} = userInfo

    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage);
    });
    // let result = await auth.signInWithEmailAndPassword(email, password)
    // console.log(result);
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
