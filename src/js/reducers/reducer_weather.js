import { FETCH_WEATHER } from '../config/constants';

export default function(state = [], action) {
  console.log('Action received', action) // doesn't show action as "Promise" because of 'ReduxPromise'
  switch(action.type){
    case FETCH_WEATHER:
      // Never do this, it mutates state
      // return state.push(action.payload.data)

      // return state.concat([ action.payload.data ])
      // Or, even better
      return [ action.payload.data, ...state ] // [ city, city, city ]
    default:
      return state
  }
}
