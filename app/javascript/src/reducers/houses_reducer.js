import { FETCH_HOUSE } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_HOUSE:
      return action.payload;
    default:
      return state;
  }
}
