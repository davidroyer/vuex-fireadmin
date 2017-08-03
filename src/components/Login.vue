<template>
  <div class="login">
    <template v-if="user">
        <button @click="logout">Logout</button>
      <div class="user">
        <h2 v-text="user.displayName"></h2>
        <img class="avatar" :src="user.photoURL" alt="">
      </div>
    </template>
    <template v-else>
      <div class="buttons">
        <a href="http://nuxt-api-example.netlify.com/" target="_blank">Link Test</a>
        
        <button class="btn--raised btn--primary"@click="loginGoogle">Login with Google</button>
        <!-- <button @click="loginGithub">Login Github</button> -->
        <!-- <button @click="loginAnonymously">Login Anonymously</button> -->
      </div>
      <div class="emailSignIn">

        <label for="email">Email</label>
        <input name="email" type="email" v-model="userLoginInfo.email">

        <label for="email">Password</label>
        <input name="password" type="text" v-model="userLoginInfo.password">
        <button class="btn-mc btn--raised btn--primary" @click="loginEmail(userLoginInfo)">Login with Email</button>

      </div>
    </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      userLoginInfo: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },

  methods: {
    loginGoogle () {
      this.$store.dispatch('signInWithGoogle')
    },

    loginEmail (userLoginInfo) {
      this.$store.dispatch('signInWithEmail', userLoginInfo)
    },

    loginGithub () {
      this.$store.dispatch('signInWithGithub')
    },

    loginAnonymously () {
      this.$store.dispatch('signInAnonymously')
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

.btn-mc {
  display: block;
  margin-left: auto;
  margin-right: auto;
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

.buttons {
  margin-bottom: 2em;
border-bottom: 2px solid rgba(158, 158, 158, 0.5);
width: 100%;
padding-bottom: 1em;
}
</style>
