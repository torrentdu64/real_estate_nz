import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectHouse } from '../actions';

class Flat extends Component {

  constructor(props) {
    super(props);
  }

  handleSelectHouse = (e) => {
    this.props.selectHouse(this.props.flat);
    this.props.flat.isActive = { status: true}
  }


  addActiveClassName(){
    let boxClass = ["card"];
    if(this.props.flat.isActive) boxClass.push('active')
    if( this.props.flat.isActive !== undefined &&
        this.props.flat.isActive.status === false )
    {
      boxClass.splice(-1,1);
    }
    if (this.props.flat.isActive) this.props.flat.isActive.status = false
    return boxClass.join(' ')
  }

  render(){
    return (
      <div className={this.addActiveClassName()} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" onClick={ this.handleSelectHouse }></a>
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
