import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import flats from '../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

import {   paginateHouses } from '../actions';


class MapWithList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats,
      page: 2
    };
  }

  componentWillReceiveProps = async (nextProps) => {
    if(this.props.houses !== nextProps.houses){


      let listOfCoord = []
      nextProps.houses.map( house => {

        listOfCoord.push([house.latitude, house.longitude])


      })
      console.log(listOfCoord)
    }
  }

  loadMoreHouses = () => {
    this.props.paginateHouses(this.state.page)
    this.setState({ page: this.state.page + 1 })
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
       <GoogleMapReact  defaultZoom={14} defaultCenter={this.defaultCenter()} >
        { this.props.houses.map( ({latitude: lat, longitude: lng}) => {
          debugger
          return  <Marker key={lat} lat={lat} lng={lng} />
        })}
        </GoogleMapReact>
      )
  }

  render() {

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
