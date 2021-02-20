import React, {Component} from 'react';
import Flat from './flat';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchHouses, paginateHouses } from '../actions';

class FlatList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 2
    }
  }

  componentWillMount() {
    // CHECK IF POST NOT ALREADY THERE?
    if (this.props.houses.length === 0) {
      this.props.fetchHouses();
    }
  }

  loadMoreHouses = () =>{
    this.props.paginateHouses(this.state.page)
    this.setState({ page: this.state.page + 1 })
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
          key={flat.id}
          index={index}
        />

      );
    });
  };


  render(){
    return (
      <div className="cards">
        { this.renderList() }
        <div>
          <button onClick={this.loadMoreHouses} >Load More</button>
        </div>
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
  return bindActionCreators({ fetchHouses, paginateHouses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
