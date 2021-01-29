import { EVEN_INDEX } from '../actions';


export default function(cardState = [null, null], action) {
  switch(action.type) {

    // case EVEN_INDEX:
    //   const test = cardState

    //   debugger
    //   if (action.payload === null){
    //     return [null, null];
    //   }

    //   if (this.props.oddIndex[1] === null){
    //     debugger
    //     return [ this.props.oddIndex[0], action.payload]
    //   }

    //   if (cardState[0] + 2 === action.payload ){
    //     return [ cardState[0], action.payload]
    //   }else{
    //     return [ action.payload, null]
    //   }
    //   // if cardState[1] odd ans paylooad enven
    //   // retuen even and odd beside





    default:
      return cardState;
  }
}
