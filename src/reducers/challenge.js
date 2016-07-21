const initialState = {
  challenges: [
    {userId: 456, distance: 1}
  ],
  lastPosition: {
    longitude: '',
    latitude: ''
  },
  distance: 0
}

function deg2rad(deg) {
  var rad = deg * Math.PI / 180;
  return rad
}

function calculateDistance (lat1, lon1, lat2, lon2) {
  var radius = 6371
  var dlat = deg2rad(lat2) - deg2rad(lat1);
  var dlon = deg2rad(lon2) - deg2rad(lon1);
  var distance = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.pow(Math.sin(dlon / 2), 2);
  var hyp = 2 * Math.atan2(Math.sqrt(distance), Math.sqrt(1 - distance))
  var distanceWithMile = 3959 * hyp;
  return distanceWithMile;
}

export default function challenges(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_CHALLENGE':
      return Object.assign({}, state, {
        challenges: [
          ...state.challenges,
          {
            userId: action.challengeData.userId,
            distance: action.challengeData.distance
          }
        ]
      });
    case 'NEW_POSITION':
      if (state.lastPosition.longitude !== '') {
        const delta = calculateDistance(state.lastPosition.latitude, state.lastPosition.longitude, action.position.latitude, action.position.longitude);
        console.log(delta)
        return Object.assign({}, state, {
          lastPosition: action.position,
          distance: state.distance + delta
        });
      }
      console.log('first')
      return Object.assign({}, state, {
        lastPosition: action.position
      });
    default:
      return state
  }
}
