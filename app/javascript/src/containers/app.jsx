import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import MapWithList from './map_with_list'
import FlatBanner from './flat_banner'
import FlatDetail from './flat_detail'
import FilterArea from './filter_area'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.bannerContainer = React.createRef()
  }

  render() {
    // the matched child route components become props in the parent
    return (
      <div >
        <div className="banner-container" ref={this.bannerContainer}>
          {/*<FilterArea />*/}
          <FlatBanner bannerContainer={this.bannerContainer} />
        </div>
        <div className="">
          {/* this will either be <Groups> or <Users> */}
          <MapWithList />
        </div>
      </div>
    )
  }
}


export default App;
