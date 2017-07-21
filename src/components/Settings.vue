<template lang="html">
  <div class="settings">
    <button class="back" @click="$router.push('/admin')">< Back</button>
    <h2>The Settings will go here</h2>

  </div>
</template>

<script>
export default {
  name: 'settings'
}
</script>

<style lang="scss">
button.back {
  padding: .25em .5em;
  min-width: 0;
}
</style>
