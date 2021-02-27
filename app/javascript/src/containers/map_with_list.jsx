import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import flats from '../data/flats';
import FlatList from './flat_list';
import CustomMarker from './marker';

//import GeoSearchMap from './GeoSearch';

//import Main from './algolia-map/main';

import {   paginateHouses } from '../actions';


class MapWithList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 2
    };
  }



  loadMoreHouses = () => {
    this.props.paginateHouses(this.state.page)
    this.setState({ page: this.state.page + 1 })
  }

  defaultCenter() {
    return {
      lat: -36.85575384089139,
      lng: 174.7634199351231
    };
  }

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  renderMap(){

    let  { ...selectedHouseCoordonate }  = {...this.props.selectedHouse[0]}


   //
    return (
       <GoogleMap
         bootstrapURLKeys={{
            key: 'AIzaSyBzNGNF-pcCSHvOldGNWsSayZmGFzq1i-8',
            language: 'en',
            region: 'nz',
            libraries:['places', 'geometry', 'drawing', 'visualization'],

          }}
          defaultCenter={this.defaultCenter()}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          onReady={({ map, maps }) => handleApiLoaded(map, maps)}
          >

        { this.props.houses.map( ( flat , i) => {

          return  <CustomMarker key={i} lat={flat.latitude} lng={flat.longitude} price={flat.price} flat={flat} />
        })}
        </GoogleMap>
      )
  }

  render() {
    //{this.renderMap()}
    return (
      <div className="main-container">
        <div>
          <FlatList   />
          <button onClick={this.loadMoreHouses} >Load More</button>
        </div>
        <div id="map">
         {this.renderMap()}
        </div>
      </div>
     );
  }
}

function mapStateToProps(state) {
  return {
    houses: state.houses,
    selectedHouse: state.selectedHouse
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ paginateHouses }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MapWithList);
