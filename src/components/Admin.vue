<template>
  <div class="admin">
    <h1>Admin</h1>
    <template v-if="user">
        <button @click="logout">Logout</button>
      <div class="user">
        <h2 v-text="user.displayName"></h2>
        <img class="avatar" :src="user.photoURL" alt="">
      </div>
    </template>
    <template v-else>
      <button @click="login">Login</button>
    </template>
  </div>
</template>

<script>
import firebase, { auth, provider } from '../firebase.js';

export default {
  name: 'admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      user: null
    }
  },

  created() {
    this.checkForActiveUser()
  },

  methods: {
    login () {
      auth.signInWithPopup(provider)
      .then((result) => {
        this.user = result.user;
      })
    },

    logout () {
      auth.signOut()
      .then(() => {
        this.user = null
        alert('You are signed out!')

      }).catch(function(error) {
          // An error happened.
      });
    },

    checkForActiveUser() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user
        }
      })
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
