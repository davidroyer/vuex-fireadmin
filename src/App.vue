<template>
  <div id="app">
    <header>
      <span class="siteTitle">Vuex-FireAdmin</span>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/admin" exact>Admin</router-link>
    </header>
    <main>
      <h1 class="currentPage">{{$route.name}}</h1>
      <!-- <img class="vueLogo" src="./assets/logo.png" alt="Vue.js PWA"> -->
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
.buttons {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
main {
  padding: 1em 1em 3em;
}
button {
  -webkit-appearance: none;
  background: inherit;
  border: 2px solid #35495e;
  padding: .75em 1em;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  border-radius: 3px;
  flex: 1 1 150px;
  margin: 1em;
  max-width: 200px;
  min-width: 150px;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    background: rgba(53, 73, 94, 0.72);
    color: white;
    font-weight: 800;
    text-decoration: underline;
  }
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
