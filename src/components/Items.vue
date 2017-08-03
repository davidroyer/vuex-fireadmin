<template lang="html">
  <div class="items">
    <button class="back btn--raised btn--blue" @click="$router.push('/admin')">< Back</button>
    <h2>The Items will go here</h2>
      <input type="text" @keyup.enter="addItem(item)" placeholder="Add New Item" v-model="item">
  </div>
</template>

<script>
import {DB} from '../firebase.js'
//
// let itemsRef = DB.ref('items')


export default {
  name: 'items',
  data () {
    return {
      item: '',
      items: []
    }
  },
  methods: {
    addItem (item) {
      let user = this.$store.state.user
      let itemsRef = DB.ref(`items/${user.uid}`)
      itemsRef.push(item)
    }
  }
}
</script>

<style lang="scss">
button.back {
  padding: .25em .5em;
  min-width: 0;
  font-weight: 700;
}
</style>
