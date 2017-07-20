<template>
  <div class="logout">
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase, { auth, GoogleProvider, GithubProvider } from '../firebase.js';
import {mapState} from 'vuex'
export default {
  name: 'logout',
  computed: {
    ...mapState(['user'])
  },
  beforeCreate () {
    // this.$store.dispatch('checkForActiveUser')
  },

  methods: {
    loginGoogle () {
      this.$store.dispatch('signInWithGoogle')
    },

    loginGithub () {
      auth.signInWithRedirect(GithubProvider)
      .then((result) => {
        this.$store.commit('setUser', result.user)
      })
    },

    loginAnonymously () {
      firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.$store.commit('setUser', result.user);
      })
    },

    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.avatar {
  width: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
