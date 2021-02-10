import React, {Component} from 'react';

import GoogleMapReact from 'google-map-react';
import Marker from './marker';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';





class FlatBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activatedBanner: [''],
      overlay: '15',
      show: false
    }
  }

  componentWillReceiveProps = async (nextProps) => {

    if(nextProps.selectedHouse[0] ){
       let sticky = window.pageYOffset;
      if ( sticky < 150 ) {
         await this.setState( (state, props) => ({ activatedBanner: ['active-banner'] }))
      }else{
         await this.setState( (state, props) => ( { activatedBanner: ['active-banner fixed'] }))
      }
    }


  }

  componentDidMount() {
  window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
      const header = document.getElementById("myHeader");
      let sticky = header.offsetTop;
      if ( window.pageYOffset < 150 ) {
         header.classList.remove('fixed')
      }
      else  {
        header.classList.add('fixed')
      }
  }

  dismissBanner = () => {
    this.setState({
      activatedBanner: ['']
    })
  }

  showDetail = () => {
    // this.setState({
    //   overlay: '100'
    // })
    this.setState({
      show: !this.state.show
    })
  }



  renderMap = () => {
    let  { ...selectedHouseCoordonate }  = {...this.props.selectedHouse[0]}
    return (
       <GoogleMapReact  defaultZoom={12} >
         <Marker lat={selectedHouseCoordonate.latitude} lng={selectedHouseCoordonate.longitude} />
        </GoogleMapReact>
      )
  }


 //<img src={this.props.selectedHouse[0]?.image_url} alt="" />


  render(){

    console.log(this.props.selectedHouse[0])
    return (

      <div
            className={`banner ${this.state.activatedBanner}`}
            id="myHeader"

      >
        <div>
           <h3 > { this.props.selectedHouse[0]?.name }</h3>
           <h3 > { this.props.selectedHouse[0]?.price } </h3>

           <div className={this.state.show ? '' : 'detail-none'}>
             <h4 > { this.props.selectedHouse[0]?.address } </h4>


             <div id="map">
                {this.renderMap()}
             </div>
           </div>


        </div>
        <div>
           <div className='btn btn-danger' onClick={this.dismissBanner} >X</div>
           <div className='btn btn-success'  onClick={this.showDetail} >show more</div>
        </div>




      </div>


    )
  }
}

function mapStateToProps(state) {
  return {
    selectedHouse: state.selectedHouse
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHouse }, dispatch);
}

export default connect(mapStateToProps, null)(FlatBanner);
