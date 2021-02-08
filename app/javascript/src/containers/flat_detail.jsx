import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectHouse } from '../actions';



class FlatDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardClicked: false
    }
  }


   render(){
     if (!this.state.selectedHouse[0]?.name) {
        return <span>Loading...</span>;
    }
    return (
      <div className="">
        <h1>{this.props.selectedHouse[0]?.name}</h1>
        <img src={this.props.selectedHouse[0]?.imageUrl} alt={`${this.props.selectedHouse[0]?.name}'s picture`}  className="img-responsive" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedHouse: state.selectedHouse
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectHouse }, dispatch);
// }

export default connect(mapStateToProps, null)(FlatDetail);
