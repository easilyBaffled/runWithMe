import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native'
import { configureStore } from './src/store/configureStore'
import { Provider } from 'react-redux/native'
import App from './src/components/App'
import { configureSocket } from './src/util/socket'
import {RNLocation, WebSocketModule, LocationObserver} from 'NativeModules'
let store = configureStore();
const socket = configureSocket();

console.log(RNLocation.startUpdatingLocation);
RNLocation.requestAlwaysAuthorization();
RNLocation.startUpdatingLocation('test', () => {
  setInterval(() => {
    socket.emit('newPos', { longitude: 1, latitude: 1, distance: 0, time: Date() });
  }, 2000)
});
RNLocation.setDistanceFilter(3.0);

DeviceEventEmitter.addListener('locationUpdated', locationObject => {
  console.log('SOMETHING', Date());
  socket.emit('newPos', { longitude: locationObject.coords.longitude, latitude: locationObject.coords.latitude, distance: 0, time: Date() });
});

// console.log("initial state", store.getState());
// let unsubscribe = store.subscribe(() =>
//   console.log("state", store.getState())
// )
// store.dispatch(reveiveChallenge({userId: 123, distance: 1.0}));
// unsubscribe();



var runWithMe = React.createClass({
  render: function() {
    return (<Provider store={store}>
              {() => <App />}
            </Provider>);
  }
});

AppRegistry.registerComponent('runWithMe', () => runWithMe);
