import { FETCH_HOUSE , PAGINATE_HOUSE, SEARCH_ADDRESS } from '../actions';

export default function(houseState = [], action) {
  switch(action.type) {
    case FETCH_HOUSE:
      return action.payload;
    case PAGINATE_HOUSE:
     return [ ...houseState,  ...action.payload ];
    case SEARCH_ADDRESS:
      return [ ...action.payload ];
    default:
      return houseState;
  }
}
