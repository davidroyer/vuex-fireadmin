<template>
  <div class="admin">

    <template v-if="user">
      <div class="leftSide">
        <h3 class="" v-text="user.displayName"></h3>
        <img class="avatar" :src="user.photoURL" alt="">
        <h6 v-if="user.email">{{user.email}}</h6>
        <router-link to="/admin/settings">Settings</router-link>
      </div>


      <transition name="slide-left" mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>

    </template>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'admin',

  computed: {
    ...mapState(['user'])
  },

  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

h1, h2 {
  font-weight: normal;
}
.displayName {
  margin-top: 0;
}
.avatar {
  width: 100px;
  border-radius: 50%;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.admin {
  display: flex;
  height: 100%;
  /*flex-flow: row wrap;*/
}
.emailSignIn {
  width: 100%;
}
.child-view {
  padding: 0 .5em;
}

button.back {
  margin-left: 0;
  margin: 0;
}
.leftSide {
  border-right: 2px solid gray;
  display: flex;
  flex-direction: column;
  padding-right: .75em;
  text-align: left;
  justify-content: center;
  width: 35%;
  max-width: 300px;
}
</style>
