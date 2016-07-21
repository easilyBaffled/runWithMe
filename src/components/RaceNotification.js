import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
} from 'react-native'
class RaceNotification extends Component {
  render() {
    var { challenges, socket, reveiveChallenge } = this.props;
    socket.on('chat message', (message) => {
      reveiveChallenge({ userId: '891', distance: 2 });
      console.log(message);
    });
    let challengeList = challenges.map( (challengeNotification) => {
      return (<View style={styles.container}>
                <Text style={styles.text}>{challengeNotification.userId}</Text><Text style={styles.text}>|</Text><Text style={styles.text}>{challengeNotification.distance}</Text>
              </View>)
    })
    return (<View style={styles.container}>{challengeList}</View>);
  }
}

RaceNotification.propTypes = {
  userId: PropTypes.func.isRequired,
  distance: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  }
});

export default RaceNotification;
