import { createStore } from 'redux'
import challenges from '../reducers/challenge.js'
//export default store = createStore(challenge);
export function configureStore() {
  return createStore(challenges);
}
