<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './views/Home.vue'

export default {
  name: "App",
  components: {
    Header,
  }
}
</script>
<style>
#app {
  margin: 0;
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  font-family: 'Josefin Sans', cursive;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
