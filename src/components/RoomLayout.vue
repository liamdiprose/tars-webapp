<template lang="pug">
    svg.map(viewBox="-2 -2 130 186")
      Computer(v-for="(desk, computerName) in layout", :computerID="computerName")
</template>

<script>
import TableComponent from '@/components/Table-svg'
import { mapState } from 'vuex'
export default {
  name: 'roomsvg',
  data () {
    return {}
  },
  created () {
    console.log('requesting layout')
    this.$store.dispatch('requestLayout')
  },
  computed: mapState({
    layout: 'computers'
  }),
  components: {
    Computer: TableComponent
  }
}
</script>

<style>

.map {
  // preserveAspectRatio: none;
  width: 100%;
  height: 87vh;
  //bottom: 0px;
}
</style>
