import { FETCH_HOUSE , PAGINATE_HOUSE } from '../actions';

export default function(houseState = [], action) {
  switch(action.type) {
    case FETCH_HOUSE:
      return action.payload;
    case PAGINATE_HOUSE:
     return [ ...houseState,  ...action.payload ];
    default:
      return houseState;
  }
}
