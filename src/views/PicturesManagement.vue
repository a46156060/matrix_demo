<template>
  <div class="pictures-management">
    <h1>This is PicturesManagement page</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PicturesManagement'
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
