import Vue from 'vue'
import Vuex from 'vuex'

import ws from '@/api'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  queue: [],
  connected: false,
  ws: ws,
  computers: {}
}

let store = new Vuex.Store({
  state,
  actions,
  mutations
})

ws.on('connected', () => {
  state.connected = true
})

ws.on('disconnected', () => {
  state.connected = false
})

ws.on('user-joined', (user) => {
  store.commit('newUser', user)
})

ws.on('layout', (data) => {
  store.commit('newLayout', data.layout.layout)
})

ws.on('queue', (data) => {
  store.commit('newQueue', data.queue)
})

ws.on('user-left', (data) => {
  store.commit('removeUser', data.computer)
})

export default store
