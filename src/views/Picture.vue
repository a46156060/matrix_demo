<template>
  <div class="picture">
    <h1>This is Picture page</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Picture'
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
