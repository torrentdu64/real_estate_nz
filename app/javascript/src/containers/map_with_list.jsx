import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



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
    return (
       <GoogleMapReact  defaultZoom={12} defaultCenter={this.defaultCenter()} >
         <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
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



export default MapWithList;
