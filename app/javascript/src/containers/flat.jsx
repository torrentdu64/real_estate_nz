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

  handleClickEvent = async (e) => {
    this.props.selectHouse(this.props.flat);
    await this.setState({
      cardClicked: !this.state.cardClicked
    })
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
    return (

        <div className={`card ${this.state.cardClicked ? 'active' : ''}`}
             style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.image_urls.src[0]}')` }}
             >
          <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
          <div className="card-description">
            <h2>{this.props.flat.name}</h2>
          </div>
          <a className="card-link" onClick={ this.handleClickEvent }></a>
        </div>

    );
  }
};

function mapStateToProps(state) {
  return {
    selectedHouse: state.selectedHouse
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHouse }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
