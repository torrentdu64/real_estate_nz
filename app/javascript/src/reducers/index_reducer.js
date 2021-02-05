import { STORE_INDEX } from '../actions';

const defaultState = {
  prevIndex: [0, 0],
  oddIndex: [],
  evenIndex: [],
  alter: false,
  allowSwap: false,
  allowReverseSwap: false,
  patternOrderObj: {
    1: -10, 2: -9,
    3: -8,  4: -7,
    5: -6,  6: -5,
    7: -4,  8: -3,
    9: -2, 10: -1,
  }

}

const testOrder = {
    prevIndex: [0, 0],
    patternOrderObj: {
       1:  {1: -10, allowSwap: false, allowReverseSwap: false},
       2:  {2: -9, allowSwap: false, allowReverseSwap: false},
       3:  {3: -8, allowSwap: false, allowReverseSwap: false},
       4:  {4: -7, allowSwap: false, allowReverseSwap: false},
       5:  {5: -6, allowSwap: false, allowReverseSwap: false},
       6:  {6: -5, allowSwap: false, allowReverseSwap: false},
       7:  {7: -4, allowSwap: false, allowReverseSwap: false},
       8:  {8: -3, allowSwap: false, allowReverseSwap: false},
       9:  {9: -2, allowSwap: false, allowReverseSwap: false},
       10: {10: -1, allowSwap: false, allowReverseSwap: false},
    }

  }


const initialPatternModel =  {
    1: -10, 2: -9,
    3: -8,  4: -7,
    5: -6,  6: -5,
    7: -4,  8: -3,
    9: -2, 10: -1,
           11: 'top file'
}


export default function(state = defaultState, action) {
  switch(action.type) {

    case STORE_INDEX:

     let temp = [ state.prevIndex[1], action.payload]

     let tempInitialPattern = { ...initialPatternModel }
     let patternOrder = { ...testOrder.patternOrderObj }

     const  prevIndex  = state.prevIndex


      if( temp[0] < temp[1]){
        debugger


        let allowSwap = false
        let allowReverseSwap = false

        let stateAlter = false






        if( (temp[0] !== 0) && (temp[0] + 2 === temp[1] || temp[0] + 3 === temp[1]  ||  temp[0] + 4 === temp[1] ||  temp[0] + 5 === temp[1] ||  temp[0] + 6 === temp[1] ||  temp[0] + 7 === temp[1] ||  temp[0] + 8 === temp[1]  ||  temp[0] + 9 === temp[1])){
           debugger
          allowSwap = true
          // alert('+2 or +3 swap')
          if( (temp[0] % 2) === 0 && (temp[1] % 2) === 0){
            // alert('reverse')
            allowReverseSwap = true
          }

          if ( state.allowSwap && (temp[0] % 2) !== 0 && (temp[1] % 2) !== 0){
            // alert('no swap')
            allowSwap = false
          }

          if( temp[0] % 2 !== 0 && temp[1] % 2 === 0){
            // alert('1 => 4')
            allowReverseSwap = true
          }

        }




         if ( temp[0] + 1 === temp[1]){
           // alert('+1 no swap')
          allowSwap = false
          if ( temp[0] !== 0 &&  temp[0] % 2 === 0 && temp[1] % 2 !== 0){
            // alert('swap')
            allowSwap = true
            if (temp[0] === 2 && temp[1] === 3){
              allowSwap = false
            }
          }

        }


        if (temp[1] === 2){
          // alert('return state')
           allowSwap = false
        }

        if (allowSwap){

          if (allowReverseSwap){
            state.patternOrderObj[( temp[1] - 1)] = tempInitialPattern[ temp[1] ]
            state.patternOrderObj[ temp[1] ] = tempInitialPattern[( temp[1] - 1)]
            //const reOrder5 = !state.alter
            return { ...state, alter: stateAlter, patternOrderObj:  state.patternOrderObj , prevIndex: temp , allowSwap: allowSwap,  allowReverseSwap: allowReverseSwap}

          }

          //alert( Object.keys(state.patternOrderObj)[0] )
            state.patternOrderObj[( temp[1] + 1)] = tempInitialPattern[ temp[1] ]
            state.patternOrderObj[ temp[1] ] = tempInitialPattern[( temp[1] + 1)]
            //const reOrder5 = !state.alter
            return { ...state, alter: stateAlter, patternOrderObj:  state.patternOrderObj , prevIndex: temp , allowSwap: allowSwap,  allowReverseSwap: allowReverseSwap  }

        }else {

          //const notOrder6 = false    //!state.alter
          return {...state, prevIndex: temp , alter: stateAlter, allowSwap: allowSwap,  allowReverseSwap: allowReverseSwap }

        }

          //const notOrder4 = false
          alert('end')
         return {...state, prevIndex: temp , alter: stateAlter}


      }else if ( temp[0] > temp[1]){



       const test = Object.keys(state.patternOrderObj)[temp[1]]


        const notOrder6 = false    //!state.alter

        return {...state, prevIndex: temp , alter: notOrder6  }


      }
    default:
      return state;
  }
}



const OrderPattern = function({patternOrderObj}, [ _ , keySwitch]) {
      this.initialPattern = {
          1: -10, 2: -9,
          3: -8,  4: -7,
          5: -6,  6: -5,
          7: -4,  8: -3,
          9: -2, 10: -1,
      }
      this.orderPattern = patternOrderObj
      this.keySwitch = keySwitch
      this.keySwitchSibling = ( keySwitch + 1 )
}

OrderPattern.prototype.switch = function() {

        let tempInitialPattern = { ...this.initialPattern }
        this.orderPattern[this.keySwitchSibling] = tempInitialPattern[this.keySwitch]
        this.orderPattern[this.keySwitch] = this.initialPattern[this.keySwitchSibling]

        return this.orderPattern
     }

const OrderPattern2 = function(state, currentIndex ) {
      this.initialPattern = {
          1: -10, 2: -9,
          3: -8,  4: -7,
          5: -6,  6: -5,
          7: -4,  8: -3,
          9: -2, 10: -1,
      }
      this.currentIndex = currentIndex
      this.orderPattern = {...state.patternOrderObj}
      this.nextIndex    = ( currentIndex + 1 )
      this.oddIndex     =  [...state.oddIndex ]
      this.evenIndex   =  [...state.evenIndex ]
      this.prevIndex    = state.prevIndex
}

OrderPattern2.prototype.swap = function() {

        // manage init oddIndex and evenIndex to bo empty if length === 2

         let copyOddIndex = []
        // swap in some condition
        // if prev Index + 2  === currentIndex is ODD
        // else prec Index + 1 is odd === currentIndex is even

         // const swap = (arr, idx1, idx2) =>
         //        (this.orderPattern[idx1], this.orderPattern[idx2]] = [this.orderPattern[idx2], this.orderPattern[idx1]] );
         // for(const [key, value] of Object.entries(this.orderPattern)) {
          debugger
            // if ( ( (this.prevIndex !== 0) && (this.prevIndex  + 1) === (this.currentIndex) ) ||
            //      ( (this.prevIndex % 2 !== 0 ) && ( this.currentIndex % 2 !== 0 ) )
            //    ){


            //    if((this.prevIndex + 1) === this.currentIndex){
            //      this.orderPattern
            //    }else{
            //      let tempInitialPattern = { ...this.initialPattern }
            //     this.orderPattern[this.nextIndex] = tempInitialPattern[this.currentIndex]
            //     this.orderPattern[this.currentIndex] = this.initialPattern[this.nextIndex]
            //    }





            // }

          // }

       //  debugger
       //  if ( (this.oddIndex.length === 0) && (this.currentIndex % 2 !== 0) ){
       //    copyOddIndex = [this.currentIndex]
       //  }
       //  if( (this.oddIndex.length === 1) && (this.currentIndex % 2 !== 0)  ){
       //     copyOddIndex =  [...this.oddIndex, this.currentIndex]
       //  }
       //  if( (this.oddIndex.length === 2) && (this.currentIndex % 2 !== 0)  ){
       //     copyOddIndex = [...this.oddIndex[1], this.currentIndex]
       //  }

       // if( (this.prevIndex + 2) === this.currentIndex && ( this.currentIndex % 2 !== 0) ){

       //  let tempInitialPattern = { ...this.initialPattern }
       //  this.orderPattern[this.nextIndex] = tempInitialPattern[this.currentIndex]
       //  this.orderPattern[this.currentIndex] = this.initialPattern[this.nextIndex]

       // }
      this.prevIndex = this.currentIndex



        return { prevIndex: this.prevIndex , patternOrderObj: this.orderPattern }
     }



function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }



