import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectHouse } from '../actions';

class Flat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardClicked: false
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.cardClicked !== this.state.cardClicked) {
      // console.log('========================================================================')
      //  console.log('========================================================================')
      // console.log('this.props', this.props.infoCardClicked)
      //  console.log('========================================================================')
      // console.log('prevProps', prevProps.infoCardClicked)
    }
  }



  handleClickEvent = async (e) => {
    await this.props.handleInfoCardClicked(!this.state.cardClicked)
    this.props.selectHouse(this.props.flat);
    const  activated = await this.props.flat.name === this.props.selectedHouse[0]?.name ? true : false
    await this.setState({
      cardClicked: this.props.infoCardClicked
    })
    // flasy the infocard ??
    //this.toggleDescriptionInfo(e);
  }



  toggleDescriptionInfo(e){

    const hidden_description = e.target.parentNode.parentNode.querySelector('.hidden-description');
   if (this.state.cardClicked){
       hidden_description.style =  "display: block";
    }else{
      hidden_description.style =  "display: none";
    }
  }

  render(){
    const  activated = this.props.flat.name === this.props.selectedHouse[0]?.name ? true : false;
    return (
      <div className="card-wrap card-frame">
        <div className={`card ${activated ? 'active' : ''}`}
             style={{  width: '95%' , backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}
             >
          <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description">
            <h2>{this.props.flat.name}</h2>
          </div>
          <a className="card-link" onClick={ this.handleClickEvent }></a>
        </div>

        <div className={`card ${activated ? '' : 'hidden-description'}` } style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2))')` }}>
          <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description">
            <h2>{this.props.flat.name}</h2>
          </div>
          <a className="card-link"></a>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state.selectedHouse);
  return {
    selectedHouse: state.selectedHouse
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHouse }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
