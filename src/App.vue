<template>
  <div id="app">
    <header>
      <span class="siteTitle">Vuex-FireAdmin</span>
      <router-link to="/" exact >Home</router-link>
      <router-link to="/admin">Admin</router-link>
      <router-link to="/login" >Login</router-link>
      <router-link to="/sign-up">Sign Up</router-link>
    </header>
    <main>
      <div class="top">
        <!-- <h1 class="">{{$route.name}}</h1> -->


      </div>

      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>

    </main>
  </div>
</template>

<script>

export default {
  name: 'app',

  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss">

html * {
  box-sizing: border-box;
}
body {
  display: block;
}
.currentPage {
  margin: .25em 0 .5em;
  font-weight: 600;
}

.view {
  &.admin {
    width: 100%;
  }
}
main {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
  a {
    color: #35495e;
    text-align: left;
    margin-left: 0;
  }
}
.logout {
  // flex: none;
  // padding: .25em .5em;
  // margin: 0;
  // min-width: 0;
}
.top {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .35s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  // position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
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
  padding-top: 1em;

  @media (min-width: 800px) {
    padding-top: 3em;
  }
}
button {
  // -webkit-appearance: none;
  // background: inherit;
  // border: 2px solid #35495e;
  // padding: .75em 1em;
  // font-size: 16px;
  // font-family: inherit;
  // font-weight: 500;
  // border-radius: 3px;
  // flex: 1 1 150px;
  // margin: 1em;
  // max-width: 200px;
  // min-width: 150px;
  // cursor: pointer;
  // transition: .2s ease;
  // align-self: center;
  // &:hover {
  //   background: rgba(53, 73, 94, 0.72);
  //   color: white;
  //   font-weight: 800;
  //   text-decoration: underline;
  // }
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

.view.login {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
main {
  // text-align: center;

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
  padding-top: 0;
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

input {
  font-size: 1em;
font-weight: 500;
}
button {
  font-size: 16px;
}
</style>
