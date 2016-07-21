import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';

import { socket } from '../util/socket';
import {RNLocation} from 'NativeModules';

export default GeolocationExample = React.createClass({
  // watchID: (null: ?number),

  getInitialState: function() {
    return {
      initialPosition: 'Can\'t find',
      lastPosition: 'Can\'t find',
      message: 'nothing yet',
      lastWholeMile: 0,
    };
  },

  // componentDidMount: function() {
  //   RNLocation.requestAlwaysAuthorization();
  //   RNLocation.startUpdatingLocation();
  //   RNLocation.setDistanceFilter(3.0);
  //   DeviceEventEmitter.addListener('locationUpdated', locationObject => {
  //     this.props.newPosition({ longitude: locationObject.coords.longitude, latitude: locationObject.coords.latitude });
  //   });
  // },
  // componentWillUnmount: function() {
  //   RNLocation.stopUpdatingLocation();
  // },

  render: function() {
    // var {lastPosition, distance} = this.props;
    // socket.emit('newPos', { longitude: lastPosition.longitude, latitude: lastPosition.latitude, distance, time: Date() });
    // if (Math.round(distance) > this.state.lastWholeMile) {
    //   // var msg = new SpeechSynthesisUtterance(Math.round(distance) + ' miles');
    //   // window.speechSynthesis.speak(msg);
    //   this.setState({lastWholeMile: Math.round(distance)});
    // }
    // console.log(distance)
    return (
      <View>
        <Text style={{margin: 10}}> test </Text>
      </View>
    );
  }

});
