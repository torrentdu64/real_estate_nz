import React, {Component} from 'react';


class ThumbnailCarousel extends React.Component {

  render(){
    return (
      <img src={this.props.src}
           alt={ this.props.alt }
           className='photo'
           onClick={this.props.showHero}
      />
    )
  }
}

export default ThumbnailCarousel;
