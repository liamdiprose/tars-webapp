<template lang="pug">
  .container
    .navbar
      h1 Teacher Assistant Request System
    .jumbotron
      h2 Select a Room
      .row.justify-content-md-center
        .list-group.col-md-6
          a.list-group-item.list-group-item-action(href="./#/lab1") Lab 1

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #37a4dc
}
</style>
