<template lang="pug">
  ol.list-group
    transition(v-if="queued.length === 0")
      li.list-group-item.list-group-item-warning
        | Queue is Empty
    transition(name="slide-fade", v-else, v-for="person in queued")
      li.list-group-item.justify-content-between(v-bind:class="{ 'list-group-item-warning': person.hovered }", v-on:mouseenter="beingHovered(person.computer, true)",
        v-on:mouseout="beingHovered(person.computer, false)")
        span.linktitle {{ person.computer }}
        b {{ person.joinedString }}
        button.btn.btn-outline-primary.btn-sm(v-on:click="dismissUser(person.computer)") Dismiss

</template>

<script>
// import { mapState } from 'vuex'
import moment from 'moment'
export default {
  name: 'list',
  data () {
    return {
      now: Date.now()
    }
  },
  created () {
    setInterval(() => {
      this.updateTimeNow()
    }, 1000)
  },
  computed: {
    queued () {
      let queue = []
      for (let person of this.$store.state.queue) {
        let duration = moment.duration(moment(this.now).diff(person.joined))
        let computer = this.$store.state.computers[person.computer] || {}
        queue.push({
          computer: person.computer,
          joined: person.joined,
          joinedString: moment(duration.asMilliseconds()).format('mm:ss'),
          hovered: computer.hovered || false
        })
      }
      return queue
    }
  },
  methods: {
    updateTimeNow () {
      this.now = Date.now()
    },
    dismissUser (computerName) {
      this.$store.dispatch('dismissUser', computerName)
    },
    beingHovered (computer, b) {
      this.$store.commit('userHovered', {computerID: computer, b})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

.list {
  // background-color: #7fdca4
}

li {
  padding: 10px;
  font-size: 16pt;
}

li:hover {
  @extend .list-group-item-warning;
  transition: background-color 100ms linear;
}

.hovered {
  background-color: #fffe95;
  transition: background-color 100ms linear;
}

.padded {
  padding: 10px;
}

.time {
  float: right;
  //padding-right: px;
}
.linktitle {
  padding-right: 10px;
}

.slide-fade-enter-active {
  transition: opacity .3s ease;
}

.slide-fade-leave-active {
  transition: opacity .3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}


</style>
