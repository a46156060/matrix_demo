<template>
  <div class="app-status">
    <h1>This is AppStatus page</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppStatus'
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 20px;
}
</style>
