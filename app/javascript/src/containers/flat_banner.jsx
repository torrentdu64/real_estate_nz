import React, {Component} from 'react';

import GoogleMapReact from 'google-map-react';
import Marker from './marker';


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
    this.unstickyParent = this.props.unsticky
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
    //let interval = setInterval(run , 2000)

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





    function resetInterval(){
      clearInterval(interval)
      interval = setInterval(run , 2000)
    }

    next.addEventListener('click', ( ) => {
      idx++
      changeImage()
      //resetInterval()
    })

    prev.addEventListener('click', ( ) => {
      idx--
      changeImage()
      //resetInterval()
    })
  }





  dismissBanner = async () => {

     await this.setState({
      show: false
    })

    // this.setState({
    //   activatedBanner: ['']
    // })

    //this.banner.current.classList.remove('fixed')
    this.banner.current.classList.remove('active-banner')

    this.stickyBanner()
    //this.banner.current.classList.remove('fixed')
    //debugger

    // if(this.state.show === false){
    //   document.body.classList.remove('noscroll')
    // }
   document.body.classList.remove('noscroll')
      document.getElementById('banner-container').style.height = 'auto'
  }

  showDetail = async  () => {
    await this.setState({
      show: !this.state.show
    })

    if(this.state.show){
      document.body.classList.add('noscroll')
      if(document.getElementById('banner-container').classList.contains('fixed')){
        document.getElementById('banner-container').style.height ='100vh'
      }else{
        document.getElementById('banner-container').style.height ='85vh'
      }
    }else{
      document.body.classList.remove('noscroll')
      document.getElementById('banner-container').style.height = 'auto'
    }
  }


  stickyBanner =  () => {
    //const banner = document.querySelector('.banner')
     const test = document.querySelector('.banner-container')

    const heightOfBanner = this.banner.current.getBoundingClientRect().height
    let obsOption = {
      root: null, //null = viewport
      theshold: 1,
      rootMargin: `-${heightOfBanner + 10}px`,//`-${heightOfBanner + 45}px` // + 45 is the margin apply to parent container
    }

    let obsOption2 = {
      root: null, //null = viewport
      theshold: 1,
    }

    let bannerObserver =  new IntersectionObserver( this.fixedBanner  , obsOption)

     bannerObserver.observe(test)

    //bannerObserver.root.style.border = "2px solid #44aa44";
    // buggy need some search about Parent Ref
    //const unsticky = this.banner.current.parentNode.childNodes[0]

    // const unsticky = document.getElementById('unsticky')

    // let bannerObserver2 =  new IntersectionObserver( this.unfixedBanner, obsOption2)
    //  bannerObserver2.observe(unsticky)
  }

  unfixedBanner = ([entry], observer) => {

    if (entry.isIntersecting) {

        this.banner.current.classList.remove('fixed')
        //observer.unobserve(entry.target)
    }

  }



   fixedBanner = (entries, observer) => {
   const [entry] = entries


      if(!entry.isIntersecting){

           this.banner.current.classList.add('fixed')
          //observer.disconnect(entry.target)
      }else {

        this.banner.current.classList.remove('fixed')
      }
    }

    showHero(e){
     document.getElementById('hero-image').src =  e.target.currentSrc
    }

    defaultCenter() {
        return {
          lat: 48.885707,
          lng: 2.343543
        };
      }









  render(){
    console.log(this.props.selectedHouse[0])
    //${this.state.activatedBanner}
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
                  <img src={this.props.selectedHouse[0]?.image_urls.src[0]} alt="" className='main-photo' ref={ this.heroImageRef } id="hero-image"/>
                </div>
                  <div className="image-container" id="imgs">
                 { this.props.selectedHouse[0]?.image_urls.src.map(  (img, index)  => {
                                     return  <img

                                               key={index}
                                               src={img}
                                               alt={ this.props.selectedHouse[0]?.name }
                                               className='photo'
                                               onClick={this.showHero}
                                           />
                                   })}
                  </div>


                </div>

                 <div className="buttons-container">
                        <button className="carousel-btn" id="prev">prev</button>
                        <button className="carousel-btn" id="next">next</button>
                  </div>

               </div>

             </div>

            <GoogleMapReact  defaultZoom={12} defaultCenter={this.defaultCenter()} >
             <Marker lat={selectedHouseCoordonate.lat} lng={selectedHouseCoordonate.lng} />
            </GoogleMapReact>

              <h3 > { this.props.selectedHouse[0]?.name }</h3>
           <h3 > { this.props.selectedHouse[0]?.price } </h3>
            <h3 > { this.props.selectedHouse[0]?.name }</h3>
           <h3 > { this.props.selectedHouse[0]?.price } </h3>
            <h3 > { this.props.selectedHouse[0]?.name }</h3>
           <h3 > { this.props.selectedHouse[0]?.price } </h3>
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
