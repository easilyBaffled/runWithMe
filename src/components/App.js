/*eslint no-unused-vars: 0*/
import React, { Component, Text, View } from 'react-native'

import RaceNotification from '../containers/RaceNotification.js'
import Location from '../containers/Location'
export default class App extends Component {
  render() {
    return (
      <View>
        <Location></Location>
      </View>
    );
  }
}

//<Text>Test Text</Text>
//<RaceNotification userId={userId} distance={distance}></RaceNotification>
//<Location></Location>
