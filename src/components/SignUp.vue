<template lang="html">
  <div class="signUp">
    <label for="email">Email</label>
    <input name="email" type="email" v-model="newUser.email">

    <label for="email">Password</label>
    <input name="password" type="text" v-model="newUser.password">
    <button class="btn--raised btn--primary" @click="signUp(newUser)">Sign Up</button>

  </div>
</template>

<script>
export default {
  name: 'sign-up',
  data () {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signUp (newUser) {
      console.log(newUser);
      this.$store.dispatch('signUpWithEmail', newUser)
    }
  }
}
</script>

<style lang="css">
</style>
