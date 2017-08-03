<template lang="html">
  <div class="browserLogin">
    <h1>Run Firebase Auth from here</h1>
    <button class="btn-raised btn--primary" @click="$store.dispatch('signInWithGoogle')">Run Auth</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  created() {
    // alert('works!')
  }
}
</script>

<style lang="css">
</style>
