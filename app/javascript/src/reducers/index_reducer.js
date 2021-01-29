import { STORE_INDEX } from '../actions';

const defaultState = {
  prevIndex: [0, 0],
  oddIndex: [],
  evenIndex: [],
  alter: false,
  patternOrderObj: {
    1: -10, 2: -9,
    3: -8,  4: -7,
    5: -6,  6: -5,
    7: -4,  8: -3,
    9: -2, 10: -1,
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

    // if(state.prevIndex[0] === 0){

    // }

      debugger

     let temp = [ state.prevIndex[1], action.payload]



      let tempInitialPattern = { ...initialPatternModel }

      if( (temp[0] % 2 !== 0) && (temp[1] % 2 !== 0 ) ){
        alert('1')

        if (temp[0] === temp[1] ){
           return { ...state , prevIndex: temp }
        }

        if(state.alter){
            state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
            state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]
            state.alter = false
           return { ...state, alter: state.alter, patternOrderObj:  state.patternOrderObj , prevIndex: temp  }
         }else if ((temp[0] + 4) === temp[1]){
            state.patternOrderObj[(temp[1] - 1)] = tempInitialPattern[ temp[1]  ]
            state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] - 1)]
            state.alter = false
           return { ...state, alter:  state.alter, patternOrderObj:  state.patternOrderObj , prevIndex: temp  }

         }else {
           state.alter =  false       //true
           return { ...state , prevIndex: temp , alter: state.alter}
         }
      }

      if( (temp[0] % 2 !== 0) && (temp[1] % 2 === 0 ) ){
        alert('2')


        if(state.alter){
          if ( (temp[0] + 1) === temp[1] ){
            state.alter =  false
            return { ...state , prevIndex: temp , alter: state.alter}
          }else{
            state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
            state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]
            state.alter = false
           return { ...state, alter:  state.alter, patternOrderObj:  state.patternOrderObj , prevIndex: temp  }
          }
         }else if ((temp[0] - 1) === temp[1]){
            // state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
            // state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]
            state.alter = false
           return { ...state, alter:  state.alter, patternOrderObj:  initialPatternModel , prevIndex: temp  }
         }else{
           state.alter =  true       //true
           return { ...state , prevIndex: temp , alter: state.alter}
         }
      }

      if( (temp[0] % 2 === 0) && (temp[1] % 2 !== 0 ) ){
        alert('3')
        // if ( (temp[0] + 1) === temp[1] ){
        //   state.alter =  true
        //   return { ...state , prevIndex: temp , alter: state.alter}
        // }
        if(state.alter){



            state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
            state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]
            state.alter = false
           return { ...state, alter: state.alter, patternOrderObj:  state.patternOrderObj , prevIndex: temp  }

         }else{
           state.alter =  true       //true
           return { ...state , prevIndex: temp , alter: state.alter}
         }
      }

      if( (temp[0] % 2 === 0) && (temp[1] % 2 === 0 ) ){
        alert('4')

        if (temp[0] === temp[1] ){
           return { ...state , prevIndex: temp }
        }

       if(state.alter){
            state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
            state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]
            state.alter = true
           return { ...state, alter: state.alter,  patternOrderObj:  state.patternOrderObj , prevIndex: temp  }
         }else{
           state.alter =  false       //true
           return { ...state , prevIndex: temp , alter: state.alter}
         }
      }

      if( temp[0] === temp[1] ) {
        alert('5')
      }

      return { ...state }


      // if ( (temp[0] % 2 !== 0) && (temp[0] + 2 === temp[1] )){
      //     if(state.alter){
      //       state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
      //       state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]
      //       state.alter = false
      //      return { ...state, alter: state.alter,  patternOrderObj:  state.patternOrderObj , prevIndex: temp  }
      //    }else{
      //      state.alter =  false       //true
      //    return { ...state , prevIndex: temp , alter: state.alter}
      //    }
      // }

      // if ( state.alter && (temp[1] % 2 !== 0) && (temp[0] + 2 === temp[1] ) ){
      //   state.alter = false
      //   return { ...state, alter: state.alter, patternOrderObj:  tempInitialPattern , prevIndex: temp  }
      // }

      // // if ((temp[0] + 1) === temp[1] ){

      // //   return { ...state ,   prevIndex: temp  }
      // // }

      // if ( state.alter && ( temp[0] % 2 !== 0 ) && ( temp[1] % 2 === 0 ) && ((temp[0] + 3) === temp[1]) ){
      //    state.patternOrderObj[(temp[1] - 1)] = tempInitialPattern[ temp[1] ]
      //   state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] - 1)]

      //   return { ...state  ,patternOrderObj:  state.patternOrderObj ,  prevIndex: temp  }
      // }

      // if (( temp[0] % 2 !== 0 ) && ( temp[1] % 2 === 0 ) && ((temp[0] + 1) === temp[1]) ){
      //   state.alter = false
      //   return { ...state , alter: state.alter,  prevIndex: temp  }
      // }

      // if (   ( temp[0] % 2 === 0 ) && ( temp[1] % 2 !== 0 ) && ((temp[0] + 1) === temp[1]) ){
      //     if(state.alter){

      //       state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
      //       state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]

      //       return { ...state , patternOrderObj:  state.patternOrderObj , prevIndex: temp  }

      //     }else{
      //       state.alter =  true
      //       return { ...state ,alter: state.alter, prevIndex: temp }
      //     }

      // }

      // if (temp[0] === temp[1]){
      //   state.alter =  false       //true
      //   return { ...state , prevIndex: temp , alter: state.alter}
      // }

      // if ((temp[0] - 1) === temp[1] ){
      //   state.alter =  true
      //   return { ...state, alter: state.alter, prevIndex: temp  }
      // }

      // if(  (temp[0] % 2 !== 0 && temp[1] % 2 !== 0)  ){
      //   if( state.alter ){
      //     state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
      //     state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]
      //     return { ...state, patternOrderObj: state.patternOrderObj, prevIndex: temp  }
      //   }else{
      //     state.alter =  false       //true
      //    return { ...state , prevIndex: temp , alter: state.alter}
      //   }

      // }

      // if (  temp[0] !== 0 && (temp[0] % 2 === 0) && (temp[1] % 2 === 0)){
      //    if( !state.alter ){
      //      state.patternOrderObj[(temp[1] - 1)] = tempInitialPattern[ temp[1] ]
      //       state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] - 1)]
      //       return { ...state, patternOrderObj: state.patternOrderObj, prevIndex: temp  }
      //    }else{
      //     state.alter =  false       //true
      //     return { ...state , prevIndex: temp , alter: state.alter}
      //    }

      // }

      // if ( (temp[0] % 2 !== 0) && (temp[1] % 2 === 0) ){
      //   if (state.alter){
      //       // state.alter =  false       //true ??
      //       state.patternOrderObj[(temp[1] - 1)] = tempInitialPattern[ temp[1] ]
      //       state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] - 1)]
      //       return { ...state, patternOrderObj: state.patternOrderObj, prevIndex: temp  }

      //   }else{
      //    state.alter =  false       //true
      //    return { ...state , prevIndex: temp , alter: state.alter}
      //   }

      // }

      // if ( (temp[0] !== 0) && (temp[0] % 2 === 0) && (temp[1] % 2 !== 0) && (( temp[0] + 3) === temp[1]) ){
      //   state.patternOrderObj[(temp[1] - 1)] = tempInitialPattern[ temp[1] ]
      //   state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] - 1)]
      //    return { ...state, patternOrderObj: state.patternOrderObj, prevIndex: temp  }

      // }

      // if ( (temp[0] % 2 === 0) && (temp[1] % 2 === 0)){
      //   if (state.alter){
      //      state.patternOrderObj[(temp[1] + 1)] = tempInitialPattern[ temp[1] ]
      //     state.patternOrderObj[ temp[1] ] = tempInitialPattern[(temp[1] + 1)]
      //    return { ...state, patternOrderObj: state.patternOrderObj, prevIndex: temp  }
      //  }else {
      //    state.alter =  true       //true
      //    return { ...state , prevIndex: temp , alter: state.alter}
      //  }



      // }

      // if ( (temp[0] === 0) && (temp[1] % 2 === 0) ){
      //   state.alter =  false
      // }else{
      //   state.alter =  false
      // }

      // return { ...state ,alter: state.alter,  patternOrderObj:  tempInitialPattern , prevIndex: temp  }

        // 1: -10
        // 2: -9
        // 3: -7
        // 4: -8
        // 5: -5
        // 6: -6
        // 7: -4
        // 8: -3
        // 9: -2
        //
        // // 1: -10
        // 2: -9
        // 3: -8
        // 4: -7
        // 5: -6
        // 6: -5
        // 7: -4
        // 8: -3
        // 9: -2

      // let result = {}
      // if ( temp.join() === [ 0, 1].join()  ){
      //   result = {
      //                           1: -10,
      //                           2: -9,
      //                           3: -8,
      //                           4: -7,
      //                           5: -6,
      //                           6: -5,
      //                           7: -4,
      //                           8: -3,
      //                           9: -2,
      //                           10: -1,
      //                         }
      //   return { ...state, patternOrderObj:  result, prevIndex: temp  }
      // }

      // if (temp.join() === [0, 1, 3].join() ){
      //      result =  {
      //                           1: -10,
      //                           2: -9,
      //                           3: -7,
      //                           4: -8,
      //                           5: -6,
      //                           6: -5,
      //                           7: -4,
      //                           8: -3,
      //                           9: -2,
      //                           10: -1,
      //                         }
      //   return { ...state, patternOrderObj:  result, prevIndex: temp  }
      // }

      // if(temp.join() === [0, 1, 3 , 4].join() ){
      //     result =  {
      //                           1: -10,
      //                           2: -9,
      //                           3: -7,
      //                           4: -8,
      //                           5: -6,
      //                           6: -5,
      //                           7: -4,
      //                           8: -3,
      //                           9: -2,
      //                           10: -1,
      //                         }
      //   return { ...state, patternOrderObj:  result, prevIndex: temp  }
      // }

      // if (temp.join() === [0, 1, 3 , 5].join() ) {
      //   result =  {
      //                           1: -10,
      //                           2: -9,
      //                           3: -8,
      //                           4: -7,
      //                           5: -6,
      //                           6: -5,
      //                           7: -4,
      //                           8: -3,
      //                           9: -2,
      //                           10: -1,
      //                         }
      //   return { ...state, patternOrderObj:  result, prevIndex: temp  }
      // }
      // const newOrderCard2 = new OrderPattern2(state, action.payload)
      // const test = newOrderCard2.swap()

      //return  { ...state, patternOrderObj:  test.patternOrderObj, prevIndex: test.prevIndex }



     // 0, 2 =>  patternOrderObj: {
     //                            1: -10,
     //                            2: -9,
     //                            3: -8,
     //                            4: -7,
     //                            5: -6,
     //                            6: -5,
     //                            7: -4,
     //                            8: -3,
     //                            9: -2,
     //                            10: -1,
     //                          }




        // // EVEN INDEX
      // if ( action.payload % 2 === 0){

      //   let copyEvenIndex = []
      //   let copyPatternOrderObj = {}

      //   debugger
      //   if(state.evenIndex.length === 0 ){
      //     copyEvenIndex = [...state.evenIndex, action.payload ]
      //   }
      //   if( state.evenIndex.length === 1){
      //      copyEvenIndex = [...state.evenIndex, action.payload ]
      //   }
      //   if( state.evenIndex.length === 2){
      //      copyEvenIndex = [state.evenIndex[1], action.payload ]
      //   }

      //   if ( ((state.oddIndex[0] + 2) ===  state.oddIndex[1]) && ( action.payload === (state.oddIndex[1] + 1) ) ){
      //     return  { ...state, evenIndex: copyEvenIndex , oddIndex: [] }
      //   }else{

      //     copyPatternOrderObj =  {...initialPatternModel }
      //     return  { ...state, evenIndex: copyEvenIndex,  patternOrderObj:  copyPatternOrderObj }
      //   }



      // }

      // if(action.payload % 2 !== 0){
      //   let copyOddIndex = []
      //   let copyPatternOrderObj2 = {}

      //   debugger

      //   if(state.oddIndex.length === 0 ){
      //     copyOddIndex = [...state.oddIndex, action.payload ]
      //   }
      //   if( state.oddIndex.length === 1){
      //      copyOddIndex = [...state.oddIndex, action.payload ]
      //   }
      //   if( state.oddIndex.length === 2){
      //      copyOddIndex = [state.oddIndex[1], action.payload ]
      //   }

      //   //const copyOddIndex = [state.oddIndex[1], action.payload ]
      //   // if [ 1, 3] and [ 1,3] and [4] pattern swap
      //   if ( (state.oddIndex[0] + 2) ===  action.payload ){

      //    const  newOrderCard = new OrderPattern(state, copyOddIndex)
      //    copyPatternOrderObj2 = newOrderCard.switch()
      //   }
      //   else if ((state.oddIndex[1] + 2) ===  action.payload){

      //    copyPatternOrderObj2 =  {...initialPatternModel }

      //   }
      //   else{
      //     copyPatternOrderObj2 =  {...initialPatternModel}
      //   }
      //   //const newOrderCard = new OrderPattern(state, copyOddIndex)
      //   return  { ...state, oddIndex: copyOddIndex , patternOrderObj: copyPatternOrderObj2 }
      // }

      // // EVEN INDEX
      // if ( action.payload % 2 === 0){

      //   const alreadyExit = state.evenIndex.includes(action.payload)
      //   if(alreadyExit){
      //     return { ...state, evenIndex: [] , oddIndex: []}
      //   }

      //   if (state.oddIndex[1] + 1 === action.payload){
      //     debugger
      //     return { ...state, evenIndex: [...state.evenIndex, action.payload], oddIndex: [...state.oddIndex] }
      //   }

      //     debugger
      //     const unmutePattern = { ...initialPatternModel }
      //    console.log(" EVEN ODD ",  unmutePattern , ...state.evenIndex, action.payload, ...state.oddIndex )

      //   return { ...state, evenIndex: [...state.evenIndex, action.payload], oddIndex: [...state.oddIndex] , patternOrderObj: unmutePattern}
      // }


      // // ODD INDEX
      // if(action.payload % 2 !== 0){

      //   const alreadyExit = state.oddIndex.includes(action.payload)
      //   if(alreadyExit){
      //     return { ...state, oddIndex: [], evenIndex: [] }
      //   }

      //   if((state.oddIndex[1] + 2) === parseInt(action.payload) && state.oddIndex.length === 2){

      //     const copyOddIndex = [state.oddIndex[1], action.payload ]
      //     const newOrderCard = new OrderPattern(state, copyOddIndex)
      //     const copyPatternOrderObj = newOrderCard.switch()
      //     debugger

      //     return { ...state, oddIndex:  copyOddIndex , patternOrderObj: copyPatternOrderObj}

      //   }

      //   if( (state.oddIndex[0] + 2) === parseInt(action.payload) ){


      //     const tempOddIndex = [...state.oddIndex, action.payload ]

      //     const newOrderCardObj = new OrderPattern(state, tempOddIndex)
      //     const tempCopyPatternOrderObj = newOrderCardObj.switch()
      //     debugger
      //     return { ...state, oddIndex:  tempOddIndex , patternOrderObj: tempCopyPatternOrderObj}
      //    }

      //    if( state.oddIndex.length === 1){
      //     debugger
      //     return { ...state, oddIndex: [...state.oddIndex, action.payload]  }
      //    }
      //    debugger

      //    const fresInitialPattern = {...initialPatternModel}
      //    return { ...state, oddIndex: [...state.oddIndex, action.payload] , patternOrderObj: fresInitialPattern }
      // }

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



