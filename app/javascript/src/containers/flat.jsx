import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectHouse, pushOddIndex , pushEvenIndex, pushIndex} from '../actions';

class Flat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardClicked: false,
      orderId: [null, null]
    }
    this.activated = false;
    this.cardRef = React.createRef(this.props.index);
  }




  componentDidUpdate = async (prevProps, prevState) => {
    if(this.props.flat.name !== this.props.selectedHouse[0]?.name){
         await this.setState((prevState, props) => {
            cardClicked: prevState.cardClicked = false
          })
    }

  }


        //  const currentEl = this.cardRef.current;
        // console.log("change flat", currentEl)

        // console.log("current idx", this.props.index)
        // console.log("prev idx" , prevProps.index)

    // if (prevState.index !== this.props.index && this.props.index % 2 !== 0) {

    //   console.log('setState of odd array ' , this.props.index)
    //   //const currentEl = this.cardRef.current;
    //   //console.log("change flat", currentEl)
    //   // console.log('this.props', this.props.infoCardClicked)
    //   // console.log('========================================================================')
    //   //  console.log('========================================================================')
    //   // console.log('this.props', this.props.infoCardClicked)
    //   //  console.log('========================================================================')
    //   // console.log('prevProps', prevProps.infoCardClicked)
    // }
    // if (this.props.index % 2 !== 0){
    //     console.log("1 R", this.props.index % 2 !== 0)
    //      console.log("2 R", this.state.orderId[0] ,  this.props.index)
    //     if (prevState.orderId[0] !== this.props.index ) {
    //       console.log("2 R", prevState.orderId[0] ,  this.props.index)
    //       await this.setState({
    //         orderId: [this.state.orderId[0], this.props.index]
    //       })
    //       console.log("state 3 R", this.state.orderId)
    //     }
    //   }


  handleClickEvent = async (e) => {
    // TODO not trigger if same Flat clicked guard condition
    // await this.props.handleInfoCardClicked();
    await this.props.selectHouse(this.props.flat);
    //this.activated = await this.props.flat.name === this.props.selectedHouse[0]?.name ? true : false
      await this.setState({
        cardClicked: !this.state.cardClicked
      })

      this.props.handleRefCard(this.cardRef)

      await this.props.pushIndex(this.props.index)



      // if (this.props.index % 2 !== 0 ){
      //   await this.props.pushOddIndex(this.props.index)
      // }else if (this.props.oddIndex[0] % 2 !== 0 && this.props.index % 2 === 0 ){

      //     await this.props.pushEvenIndex(this.props.index)
      // } else {
      //   await this.props.pushOddIndex(null)
      // }


      const currentEl = e.target.parentNode.parentNode;

      if (this.props.oddIndex[1]){

        //currentEl.classList.add('order-0')
                //console.log('state 1' ,this.state.orderId)
      }
     // if( this.props.index % 2 !== 0 && this.props.index !== this.state.orderId[0] ){
        //console.log('if index, array' ,this.props.index , this.state.orderId[0])

        //  await this.setState({
         //    orderId: [this.props.index, null]
         // } ,  () => {
         //   console.log('callback',this.state.orderId )
         // })

        // console.log('state 2' , this.state.orderId)


     // }
      //console.log(this.state.orderId)


      // const { index } = this.props.index
      // switch(index){
      //   case index % 2 !== 0:
      //     await this.setState({
      //        orderId: [this.props.index, null]
      //     })
      //   case
      //   case
      // }

      // get index
      //console.log("get the current element", e.target.parentNode.parentNode)
      // if even and click on odd
      //

      // if (this.props.index % 2 !== 0){
      //   console.log("1 L", this.props.index % 2 !== 0)
      //   if (this.state.orderId[0] !== this.props.index ) {
      //     console.log("2 L")
      //     console.log("2 L",this.state.orderId[0] !== this.props.index )
      //     await this.setState({
      //       orderId: [this.props.index, null]
      //     })
      //     console.log("state 3 L", this.state.orderId)

      //   }


      // }

      // if (this.props.index % 2 !== 0){
      //   console.log("1 R", this.props.index % 2 !== 0)
      //    console.log("2 R", this.state.orderId[0] ,  this.props.index)
      //   if (this.state.orderId[0] !== this.props.index ) {
      //     console.log("2 R", this.state.orderId[0] ,  this.props.index)
      //     await this.setState({
      //       orderId: [this.state.orderId[0], this.props.index]
      //     })
      //     console.log("state 3 R", this.state.orderId)
      //   }
      // }

      // console.log('result', this.state.orderId)

        // if ( this.props.index % 2 === 0 && this.state.orderId[0] !== null ){
        //   await this.setState({
        //     orderId: [ ...this.state.orderId[0], this.props.index]
        //   })
        //   console.log("event", this.props.index)
        // }else if (this.props.index % 2 !== 0  )
        // {
        //   await this.setState({
        //     orderId: [this.props.index, null]
        //   })
        //   console.log("odd", this.props.index)
        // }
        // console.log('result', this.state.orderId)


      //const currentEl = e.target.parentNode.parentNode;
      // if( this.state.orderId[0] % 2 !== 0 && this.state.orderId.length <= 2){
      //   await this.setState({
      //     orderId: [ ...this.state.orderId, this.props.index]
      //   })
      // }


      // console.log('add if not right', this.state.orderId )
      // add order class
  }



  toggleDescriptionInfo(e){
    const hidden_description = e.target.parentNode.parentNode.querySelector('.hidden-description');
   if (this.state.cardClicked){
       hidden_description.style =  "display: block";
    }else{
      hidden_description.style =  "display: none";
    }
  }

  displayOrderClass(){


    const cardOrder = this.props.storeIndex.patternOrderObj


    let className = '' ;
     for(const [key, value] of Object.entries(cardOrder)) {
      if( parseInt(key) === this.props.index){

        className = `order-${value}`;
        break

      }
    }

    // for (var key in cardOrder) {
    //     if (cardOrder.hasOwnProperty(key) && cardOrder[key] === this.props.index) {
    //       console.log(`${`order-${cardOrder[key]}`}`)
    //        className =  `order-${cardOrder[key]}`;
    //     }
    // }
    return className
    // for (var i = 0; i < this.props.storeIndex.oddIndex.length; i++) {
    //   console.log("loop", this.props.storeIndex.oddIndex[i])
    // }


    // if (this.props.storeIndex.oddIndex.equals([1, 3])){
    //   [1,2,3,4].map( (n) => {
    //     className = `order--${i}`
    //   })
    // }
    // condition .length ??
    // cardOrder.forEach( (i) => {
    //   if(this.props.index === i ){
    //       let test = cardOrder[0] + cardOrder[1]
    //       console.log("test", test)
    //       className = `order--${i}`
    //     }
    // })




    // [1,2,3]
    //



    //console.log('this.props.oddIndex', this.props.oddIndex)
    //
    // order -2 selected odd
    // order -1 the next index

    // if last is even
    // this.props.oddIndex => [1,3]
    //
    //  if index = 1 add order -4
    //  if index = 2 add order -3
    //  if index = 3 add order -2
    //  if index = 4 add order -4
    //
    //console.log('this.props.oddIndex', this.props.oddIndex)
    // let className = '' ;
    // if ( this.props.oddIndex[1] !== null && this.props.oddIndex[1] % 2 !== 0 ){
    //   let revSortId = this.props.oddIndex
    //   revSortId.map( order => {
    //     if(this.props.index === this.props.oddIndex[0] ){
    //       className = `order--1`
    //     }
    //     if(this.props.index === (this.props.oddIndex[0] + 1)  ){
    //       className = `order--2`
    //     }
    //     if(this.props.index === this.props.oddIndex[1] ){
    //       className = `order--3`
    //     }
    //     if(this.props.index === (this.props.oddIndex[1] + 1)){
    //       className = `order--4`
    //     }
    //     //console.log("className" , className)
    //   })
    // }
    // if (  this.props.oddIndex[1] !== null && this.props.oddIndex[1] % 2 === 0 ){

    // }
    //-- return className
  }

  render(){

    this.activated = (this.props.flat.name === this.props.selectedHouse[0]?.name && this.state.cardClicked ) ? true : false;
    return ( //${this.displayOrderClass()}
      <div className={`card-wrap card-frame ${this.activated ? 'grow' : ''} ${this.displayOrderClass()} ` } data-idx={this.props.index } ref={this.cardRef}>
        <div className={`card ${this.activated ? 'active' : ''}`}
             style={{  width: '95%' , backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}
             >
          <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description">
            <h1>{this.props.index}</h1>
            <h2>{this.props.flat.name}</h2>
          </div>
          <a className="card-link" onClick={ this.handleClickEvent }></a>
        </div>

        <div className={`card ${this.activated ? 'hidden-description' : 'hidden-description'}` } style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2))')` }}>
          <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description">
            <h2>{this.props.flat.name}</h2>
          </div>
          <a className="card-link"></a>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedHouse: state.selectedHouse,
    oddIndex: state.oddIndex,
    eventIndex: state.eventIndex,
    storeIndex: state.storeIndex
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHouse, pushOddIndex, pushEvenIndex, pushIndex}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
