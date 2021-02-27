import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectHouse } from '../actions';

class CustomMarker extends Component {

  constructor(props) {
    super(props);
  }

  selectHouse = async () => {
    this.props.selectHouse(this.props.flat);
  }

  render(){

    return (

       <div onClick={this.selectHouse} className="marker marker-scale">{this.props.price}</div>

      )
  }
}


function mapStateToProps(state) {
  return {
    selectedHouse: state.selectedHouse
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHouse }, dispatch);
}




export default connect(mapStateToProps, mapDispatchToProps)(CustomMarker);


