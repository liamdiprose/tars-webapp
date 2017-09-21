<template lang="pug">
  .dash.container-fluid.no-padding
    nav.navbar.navbar-light.bg-faded
      .container
        h1.navbar-brand Lab 1
        span.navbar-text Estimated Wait
    .container(v-if="!connected").padded
      ErrorBox(title="Lost connection to server", message="Reconnecting...")
    .connected(v-else).padded
      .row
        .col-md-4.push-md-8.padded
          List
        .col-md-8.pull-md-4.padded
          RoomLayout

</template>

<script>
import ListComponent from '@/components/List'
import ErrorComponent from '@/components/ErrorDialog'
import RoomLayoutComponent from '@/components/RoomLayout'

import { mapState } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {}
  },
  created () {
    console.log('requesting queue from server...')
    this.$store.dispatch('requestQueue')
  },
  computed: mapState([
    'connected'
  ]),
  components: {
    List: ListComponent,
    RoomLayout: RoomLayoutComponent,
    ErrorBox: ErrorComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav {
    background-color: #e3f2fd;
  }
  .connected {
    bottom: 0;
  }

  .padded {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .left {
    width: 75%;
    float: left;
  }
  .right {
    margin-left: 75%;
  }
  .nopadding {
    padding-left: 0 !important;
    padding-right: 0;
  }
</style>
