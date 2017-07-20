<template>
  <div class="admin">

    <template v-if="user">
      <div class="user">
        <h2 v-text="user.displayName"></h2>
        <img class="avatar" :src="user.photoURL" alt="">
      </div>
      <router-link to="/admin/settings">Settings</router-link>
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
