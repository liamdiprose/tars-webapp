import EventEmitter from 'events'
import ReconnectingWebSocket from 'reconnecting-websocket'

const webSocketOptions = {
  constructor: WebSocket
}

export default function createInfoStream (url) {
  let info = new EventEmitter()
  let rws = new ReconnectingWebSocket(url, [], webSocketOptions)
  let backlog = []

  rws.addEventListener('open', () => {
    info.emit('connected', {})
    console.log('Websocket Opened')
    for (let message of backlog) {
      rws.send(JSON.stringify(message))
    }
  })

  rws.addEventListener('message', function onmessage (event) {
    if (event.data === '<3') {
      rws.send('<3')
      return
    }

    let parsedData
    try {
      parsedData = JSON.parse(event.data)
    } catch (err) {
      console.error({error: 'Invalid JSON'})
      return
    }

    if (typeof (parsedData.info) === 'string') {
      info.emit(parsedData.info, parsedData.data)
    } else {
      info.emit('error', new Error('No \'command\' field supplied.'))
    }
  })
  rws.addEventListener('error', (err) => {
    console.error(err)
    info.emit('error', new Error('Connection Error'))
  })

  rws.addEventListener('close', () => {
    console.log('Client Disconnected')
    info.emit('disconnected', {reason: 'socket closed'})
  })

  info.json = function (obj) {
    try {
      rws.send(JSON.stringify(obj))
    } catch (err) {
      backlog.push(obj)
    }
  }

  return info
}
