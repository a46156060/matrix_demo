<template>
  <div class="testroot">
    <h1>This is Testroot page</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Testroot'
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
