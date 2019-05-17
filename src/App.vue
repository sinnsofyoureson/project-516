<template>
  <div id="app">
    <div class="wrapper">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Vue ^_^ Tickets"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  background: #89d5b4;
  min-height: 100vh;
  padding-bottom: 34px;
}
.wrapper {
  margin-top: 13px;
  width: 50%;
}
@media screen and (max-width: 1200px) {
  .wrapper {
    width: 90%;
  }
}
</style>
