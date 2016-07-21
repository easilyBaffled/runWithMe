import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import { socket, io } from '../util/socket';
import * as RaceActions from '../actions/race'

import Location from '../components/Location';

function mapStateToProps(state) {
  return {
    io: io,
    socket: socket,
    lastPosition: state.lastPosition,
    distance: state.distance
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RaceActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
