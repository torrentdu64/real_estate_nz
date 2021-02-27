import React, {Component} from 'react';

import GoogleMapReact from 'google-map-react';
import Marker from './marker';

import ThumbnailCarousel from './thumbnail_carousel';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FlatBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
    this.banner = React.createRef()
    this.heroImageRef = React.createRef()
  }



  componentWillReceiveProps = async (nextProps) => {
    if(nextProps.selectedHouse[0] ){
      this.banner.current.classList.add('active-banner')
    }
    this.stickyBanner()
  }

  componentDidMount() {
   this.carousel()
  }

  carousel(){
    const imgs = document.getElementById('imgs')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')

    let idx = 0

    function run(){
      idx++
      changeImage()

    }

    function changeImage(){
      console.log('changeImage', idx)
      if (idx > 3 ){ // (img.length - 1)
        idx = 0
      }else if (idx < 0 ){
        idx = 3
      }
      imgs.style.transform = `translateX(${idx * -220}px)`
    }

    next.addEventListener('click', ( ) => {
      idx++
      changeImage()
    })

    prev.addEventListener('click', ( ) => {
      idx--
      changeImage()
    })
  }

  dismissBanner = async () => {
   await this.setState({ show: false})
   this.banner.current.classList.remove('active-banner')
   this.stickyBanner()
   document.body.classList.remove('noscroll')
   this.banner.current.style.height = 'auto'
  }

  showDetail = async  () => {
    await this.setState({show: !this.state.show})
    if(this.state.show){
      document.body.classList.add('noscroll')
      let heightAvailable = window.innerHeight
      this.banner.current.classList.contains('fixed') ?
      this.banner.current.style.height =`${heightAvailable}px`
      :
       this.banner.current.style.height = `${heightAvailable - this.banner.current.getBoundingClientRect().y}px`
    }else{
      document.body.classList.remove('noscroll')
      this.banner.current.style.height = 'auto'
    }
  }


  stickyBanner =  () => {
    const bannerContainer = this.banner.current.parentElement
    const heightOfBanner = this.banner.current.getBoundingClientRect().height
    let obsOption = {
      root: null, //null = viewport
      theshold: 1,
      rootMargin: `-${heightOfBanner + 10}px`,//`-${heightOfBanner + 45}px` // + 45 is the margin apply to parent container
    }

    let bannerObserver =  new IntersectionObserver( this.fixedBanner  , obsOption)
     bannerObserver.observe(bannerContainer)
  }

  unfixedBanner = ([entry], observer) => {
    if (entry.isIntersecting) {
        this.banner.current.classList.remove('fixed')
    }
  }

   fixedBanner = ([entry], observer) => {
      if(!entry.isIntersecting){
           this.banner.current.classList.add('fixed')
      }else {
        this.banner.current.classList.remove('fixed')
      }
    }

    showHero = (e) => {
     this.heroImageRef.current.src =  e.target.currentSrc
    }

    defaultCenter() {
      return {
        lat: -36.85575384089139,
        lng: 174.7634199351231
      };
    }

  render(){
    // console.log(this.props.selectedHouse[0])
    // //${this.state.activatedBanner}
    let  selectedHouseCoordonate   = {...this.props.selectedHouse[0]}
    return (
      <div  ref={this.banner}
            className={`banner`}
            id="banner-container"
      >
        <div className='wrap-detail-hearder'>
          <div>
            <h3 > { this.props.selectedHouse[0]?.name }</h3>
           <h3 > { this.props.selectedHouse[0]?.price } </h3>
          </div>
           <div>
             <div className='btn btn-danger' onClick={this.dismissBanner} >X</div>
             <div className='btn btn-success' style={{width: '120px'}} onClick={this.showDetail} >{this.state.show ? 'Hide' : 'Show more'}</div>
           </div>
        </div>
          <div className={this.state.show ? '' : 'detail-none'}>
            <div className='wrap-detail'>
               <h4 > { this.props.selectedHouse[0]?.address } </h4>
               <div className='wrap-image-detail'>
                <div className="carousel">
                <div className="hero-image">
                  <img src={this.props.selectedHouse[0]?.image_urls.src[0]} alt="" className='main-photo' ref={this.heroImageRef } id="hero-image"/>
                </div>
                  <div className="image-container" id="imgs">
                   { this.props.selectedHouse[0]?.image_urls.src.map(  (img, index)  =>
                     {
                        return <ThumbnailCarousel key={index} src={img}  alt={ this.props.selectedHouse[0]?.name } showHero={this.showHero} />
                      }
                    )
                   }
                  </div>
                </div>

                 <div className="buttons-container">
                        <button className="carousel-btn" id="prev">prev</button>
                        <button className="carousel-btn" id="next">next</button>
                  </div>

               </div>
             </div>

             <GoogleMapReact bootstrapURLKeys={{
                                key: 'AIzaSyBzNGNF-pcCSHvOldGNWsSayZmGFzq1i-8',
                                language: 'en',
                                region: 'nz',
                                libraries:['places', 'geometry', 'drawing', 'visualization'],
                              }}
                              defaultCenter={this.defaultCenter()}
                              defaultZoom={14}>
             <Marker lat={selectedHouseCoordonate.lat} lng={selectedHouseCoordonate.lng} />
            </GoogleMapReact>
            <div>
               <h3 > { this.props.selectedHouse[0]?.name }</h3>
            <h3 > { this.props.selectedHouse[0]?.price } </h3>
            <h3 > { this.props.selectedHouse[0]?.name }</h3>
           <h3 > { this.props.selectedHouse[0]?.price } </h3>
            <h3 > { this.props.selectedHouse[0]?.name }</h3>
           <h3 > { this.props.selectedHouse[0]?.price } </h3>
            </div>

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
