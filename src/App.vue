<template>
  <div id="app">
    
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app'
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
  background-color: #6e7db2;
  width:1200px;
  height:710px;
  margin: 50px auto;
  padding:60px 120px;
}
</style>
