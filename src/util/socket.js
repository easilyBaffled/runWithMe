export let io;
export let socket;
export function configureSocket () {
  window.navigator.userAgent = 'react-native';
  io = require('socket.io-client/socket.io');
  // socket = io('https://rwm.herokuapp.com/', {jsonp: false});
  socket = io('localhost:3000', {jsonp: false});
  return socket;
}
