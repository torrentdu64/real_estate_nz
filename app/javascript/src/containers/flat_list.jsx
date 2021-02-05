import React, {Component} from 'react';
import Flat from './flat';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchHouses } from '../actions';

class FlatList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      infoCardClicked: false
    }
    this.listRef = React.createRef();
  }

  componentWillMount() {
    // CHECK IF POST NOT ALREADY THERE?
    if (this.props.houses.length === 0) {
      this.props.fetchHouses();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cardClicked !== this.state.cardClicked) {
      //console.log('========================================================================')
      // console.log('========================================================================')
     // console.log('prevState', prevState.infoCardClicked)
      // console.log('========================================================================')
     // console.log('state', this.state.infoCardClicked)
    }
  }

  handleRefCard = (cardRef) => {
    // console.log('parent cardRef', cardRef)
    // console.log('listRef', this.listRef)
  }



  renderList() {
     return this.props.houses.map((flat, index) => {

      return (

          <Flat
            flat={flat}
            key={flat.lat}
            index={index + 1}
            handleRefCard={this.handleRefCard.bind(this)}
            refs={this.listRef}
          />
      );

    });
  };



  render(){

    return (

      <div className="flat-list">

        { this.renderList() }

      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    houses: state.houses,
    oddIndex: state.oddIndex,
    storeIndex: state.storeIndex
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHouses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
