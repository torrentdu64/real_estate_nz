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
  }

  componentWillMount() {
    // CHECK IF POST NOT ALREADY THERE?
    if (this.props.houses.length === 0) {
      this.props.fetchHouses();
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.cardClicked !== this.state.cardClicked) {
      console.log('========================================================================')
       console.log('========================================================================')
      console.log('prevState', prevState.infoCardClicked)
       console.log('========================================================================')
      console.log('state', this.state.infoCardClicked)
    }
  }


  handleInfoCardClicked = async (status) => {

    await this.setState({
      infoCardClicked: status
    })

    console.log('handleInfoCardClickedthis',this.state.infoCardClicked)

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
          infoCardClicked={this.state.infoCardClicked}
          handleInfoCardClicked={this.handleInfoCardClicked}
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
    houses: state.houses
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHouses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
