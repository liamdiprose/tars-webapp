import Vue from 'vue'

export default {
  newUser (state, user) {
    state.queue.push(user)
    if (user.computer in state.computers) {
      Vue.set(state.computers[user.computer], 'queued', new Date(user.joined))
    }
  },
  newQueue (state, queue) {
    Vue.set(state, 'queue', [])
    for (let user of queue) {
      console.log('Adding user to queue:', user)
      state.queue.push(user)
      if (user.computer in state.computers) {
        Vue.set(state.computers[user.computer], 'queued', new Date(user.joined))
      }
    }
  },
  newLayout (state, layout) {
    let ret = {}
    for (let desk of layout) {
      ret[desk.computer] = desk.shape
      ret[desk.computer].queued = !!state.queue.find(person => person.computer === desk.computer)
      ret[desk.computer].hovered = false
    }
    console.log('setting as state.computers:', ret)
    Vue.set(state, 'computers', ret)
  },
  userHovered (state, {computerID, b}) {
    Vue.set(state.computers[computerID], 'hovered', b)
  },
  removeUser (state, computer) {
    console.log('Removing computer:', computer)
    state.computers[computer].queued = false
    let ret = state.queue.filter(desk => desk.computer !== computer)
    Vue.set(state, 'queue', ret)
    // state.queue.splice(state.queue.indexOf(computer), 1)
  }
}
