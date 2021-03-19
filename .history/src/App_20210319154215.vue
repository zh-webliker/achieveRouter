<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home">home</router-link> | 
      <router-link to="/about">about</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
    // eslint-disable-next-line
    console.log(this.$router)
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
  margin-top: 60px;
}
</style>
