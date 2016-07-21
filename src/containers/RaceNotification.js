import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import { socket } from '../util/socket';
import * as NotificationActions from '../actions/challenge'

import RaceNotification from '../components/RaceNotification';

function mapStateToProps(state) {
  return {
    socket: socket,
    challenges: state.challenges
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotificationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceNotification);
