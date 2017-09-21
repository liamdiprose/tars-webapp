import createInfoStream from './websocket-client'

let host = window.location.host.split(':', 1)

export default createInfoStream(`ws://${host}:3001/info`)
