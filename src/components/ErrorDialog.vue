<template lang="pug">
  .alert.alert-danger(role="alert")
    strong {{ title }}
    span.message {{ message }}

</template>

<script>
export default {
  name: 'disconnected-dialog',
  data () {
    return {}
  },
  props: ['title', 'message']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
