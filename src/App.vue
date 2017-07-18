<template>
  <div id="app">
    <header>
      <span class="siteTitle">Vue.js PWA</span>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/admin" exact>Admin</router-link>
    </header>
    <main>
      <img class="vueLogo" src="./assets/logo.png" alt="Vue.js PWA">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  margin: 0;
}
.vueLogo {
  width: 75px;
}
.siteTitle {
  flex: 1 1 100%;
    text-align: center;
    margin: .25em 0 1em;
    font-weight: 700;
}
a {
  color: white;
  font-weight: 700;
  margin: 0 1em;
  padding: .5em 1em;
  border-radius: 25px;

  &.router-link-active {
    background: white;
    color: #35495e;
    font-weight: 900;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  /*padding: 0 16px 0 24px;*/
  background-color: #35495E;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  padding-bottom: 1.25em;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
