import {  SELECTED_HOUSE } from '../actions';

export default function(houseState = [], action) {
  switch(action.type) {
    case SELECTED_HOUSE:
      return [action.payload];
    default:
      return houseState;
  }
}
