import React, {Component} from 'react';
import Flat from './flat';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchHouses } from '../actions';

class FlatList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // CHECK IF POST NOT ALREADY THERE?
    if (this.props.houses.length === 0) {
      this.props.fetchHouses();
    }
  }

  renderList() {
     return this.props.houses.map((flat, index) => {
      // undo the previeus click with .isActive.status
      // from <Flat /> component
      if (flat.isActive){
        flat.isActive.status = false
      }
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          index={index}
        />
      );
    });
  };


  render(){
    return (
      <div className="cards">
        { this.renderList() }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    houses: state.houses
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHouses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
