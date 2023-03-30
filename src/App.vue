<template>
  <div id="app">
    <!-- <Login/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Login from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    // Login
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* overflow: visible; */
  /* overflow-x: hidden; */
}

body {
  /* overflow-x: hidden; */
}
</style>
