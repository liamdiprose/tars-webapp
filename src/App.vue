<template lang="pug">
  router-view
</template>

<script>
import store from '@/store'

export default {
  name: 'app',
  store
}
</script>

<style lang="sass">
@import '../node_modules/bootstrap/scss/bootstrap.scss'

</style>
