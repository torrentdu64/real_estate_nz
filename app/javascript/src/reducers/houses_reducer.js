import { FETCH_HOUSE } from '../actions';



export default function(houseState = [], action) {
  switch(action.type) {
    case FETCH_HOUSE:
      return action.payload;
    default:
      return houseState;
  }
}
