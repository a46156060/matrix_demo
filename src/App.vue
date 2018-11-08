<template>
  <div id="app">
    <img src='./assets/logo.png'>

    <div class="border-bottom">
      <h1>This is App.vue</h1>
    </div>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.border-bottom {
  border-bottom: thin solid #42b983;
}
</style>
