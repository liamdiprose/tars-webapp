export default {
  requestLayout ({commit, state}) {
    state.ws.json({command: 'get-layout'})
  },
  requestQueue ({commit, state}) {
    state.ws.json({command: 'get-queue'})
  },
  dismissUser ({commit, state}, computer) {
    state.ws.json({command: 'dismiss-user', data: {computer}})
  }
}
