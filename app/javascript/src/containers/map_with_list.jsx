import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { connect } from 'react-redux';

import flats from '../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class MapWithList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  defaultCenter() {
    return {
      lat: 48.885707,
      lng: 2.343543
    };
  }

  renderMap(){
    let  { ...selectedHouseCoordonate }  = {...this.props.selectedHouse[0]}



    return (
       <GoogleMapReact  defaultZoom={12} defaultCenter={this.defaultCenter()} >
         <Marker lat={selectedHouseCoordonate.lat} lng={selectedHouseCoordonate.lng} />
        </GoogleMapReact>
      )
  }

  render() {

    return (
      <>
        <FlatList   />
        <div className="map-container">
         {this.renderMap()}
        </div>
      </>
     );
  }
}

function mapStateToProps(state) {
  return {
    selectedHouse: state.selectedHouse
  }
}


export default connect(mapStateToProps, null)(MapWithList);
