<template lang="pug">
  rect.desk.fades(:x="shape.x*scale", :y="shape.y*scale", :width="shape.w*scale", :height="shape.h*scale",
    v-bind:class="{ queued: shape.queued, 'queued-hover': shape.hovered }",
    v-on:mouseenter="beingHovered(true)",
    v-on:mouseleave="beingHovered(false)")
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'table',
  data () {
    return {
      scale: 10
    }
  },
  computed: mapState({
    // isQueued: state => state.computers[this.computerID].queued,
    shape: function (state) {
      return state.computers[this.computerID]
    }
  }),
  props: [
    'computerID'
  ],
  methods: {
    beingHovered (b) {
      this.$store.commit('userHovered', {computerID: this.computerID, b})
    },
    degecko () {
      this.color = 'black'
    }
  }
}
</script>

<style scoped lang="scss">
.desk {
    stroke: #404040;
    stroke-width: .5px;
}

rect {
  fill: #fefefe;
  transition: fill 300ms linear;
}

.queued {
  fill: yellow;
  transition: fill 400ms linear;
}

.queued-hover {
  fill: rgb(255, 232, 0);
  z-index: -3;
  stroke: #ecb006;
  transition: fill 100ms linear
}

rect:hover {
  fill: #f5f5f5;
  stroke: #404040;
  transition: fill 100ms linear;
}

rect.queued:hover {
  @extend .queued-hover
}

</style>
