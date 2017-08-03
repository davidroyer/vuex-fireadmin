<template>
  <div class="hello">
    <button class="btn-raised btn--primary" @click="$store.dispatch('signInWithPopup')">Open Auth in Browser</button>
    <a href="https://vuex-fireadmin.netlify.com/#/login" target="_blank">Login In Browser</a>
    <a href="http://nuxt-api-example.netlify.com/" target="_blank">Link Test</a>
    <div>
      <h6 v-if="isStandalone">Is Standalone</h6>
      <h6 v-else="isStandalone">Not Standalone</h6>
    </div>
  </div>
</template>

<script>
// import firebase, { auth, provider } from './firebase.js';
export default {
  name: 'hello',
  data() {
    return {
      isStandalone: false
    }
  },
  created() {
    this.handleSafari()
  },
  methods: {
    handleSafari () {
      let vm = this
          if(("standalone" in window.navigator) && window.navigator.standalone){
          vm.isStandalone = true

          // If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
          var noddy, remotes = false;

          document.addEventListener('click', function(event) {

              noddy = event.target;

              // Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
              while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
                  noddy = noddy.parentNode;
              }

              if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
              {
                  event.preventDefault();
                  document.location.href = noddy.href;
              }

          },false);
      }
    },
    openUrlInBrowser() {}

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
