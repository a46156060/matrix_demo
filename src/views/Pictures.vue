<template>
  <div class="pictures">
    <h1>This is Pictures page</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Pictures'
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
