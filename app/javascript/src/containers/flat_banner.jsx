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
      show: false,
    }

    this.banner = React.createRef()
    this.unsticky = React.createRef() //document.getElementById('unsticky')
  }

  componentWillReceiveProps = async (nextProps) => {
    if(nextProps.selectedHouse[0] ){

      const header = document.getElementById("banner-container");
      header.classList.add('active-banner')


      //await this.setState( (state, props) => ({ activatedBanner: ['active-banner'] }))
      //  let sticky = window.pageYOffset;
      // if ( sticky < 150 ) {
      //    await this.setState( (state, props) => ({ activatedBanner: ['active-banner'] }))
      // }else{
      //    await this.setState( (state, props) => ( { activatedBanner: ['active-banner fixed'] }))
      // }
    }

     this.stickyBanner()



  }

  componentDidMount() {
   // this.stickyBanner()
  //window.addEventListener('scroll', this.listenToScroll)
  //this.carousel()
  }

  carousel(){
    const imgs = document.getElementById('imgs')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    const img = document.querySelectorAll('#imgs .photo')

    console.log(img)
    let idx = 0
    let interval = setInterval(run , 2000)

    function run(){
      idx++
      changeImage()
    }

    function changeImage(){
      if (idx > img.length - 1){
        idx = 0
      }else if (idx < 0){
        idx = img.length - 1
      }
      imgs.style.transform = `translateX(${idx * -800}px)`
    }

    function resetInterval(){
      clearInterval(interval)
      interval = setInterval(run , 2000)
    }

    next.addEventListener('click', ( ) => {
      idx++
      changeImage()
      resetInterval()
    })

    prev.addEventListener('click', ( ) => {
      idx--
      changeImage()
      resetInterval()
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
      const header = document.getElementById("banner-container");
      let sticky = header.offsetTop;
      if ( window.pageYOffset < 150 ) {
         header.classList.remove('fixed')
      }
      else  {
        header.classList.add('fixed')
        if(this.state.show){

         document.body.classList.add('noscroll')
        }
      }

  }

  dismissBanner = async () => {
    debugger
     await this.setState({
      show: false
    })

    this.setState({
      activatedBanner: ['']
    })



    if(this.state.show === false){
      document.body.classList.remove('noscroll')
    }
  }

  showDetail = async  () => {
    await this.setState({
      show: !this.state.show
    })

    if(this.state.show === false){
      document.body.classList.remove('noscroll')
    }
  }


  stickyBanner() {
    //const banner = document.querySelector('.banner')
    const heightOfBanner = this.banner.current.getBoundingClientRect().height
    const obsOption = {
      root: null, //null = viewport
      theshold: 0,
      rootMargin: `-${heightOfBanner + 45}px` // + 45 is the margin apply to parent container
    }

    const obsOption2 = {
      root: null, //null = viewport
      theshold: 0,

    }

    const bannerObserver = new IntersectionObserver( this.fixedBanner, obsOption)
    bannerObserver.observe(this.banner.current)


    const unsticky = this.banner.current.offsetParent.childNodes[0]
    const bannerObserver2 = new IntersectionObserver( this.unfixedBanner, obsOption2)
    bannerObserver2.observe(unsticky)
  }

  unfixedBanner = ([entry]) => {
    if (entry.isIntersecting) {
       this.banner.current.classList.remove('fixed')
    }
  }



   fixedBanner = async ([entry]) => {
      if(!entry.isIntersecting){
         await entry.target.classList.add('fixed')
      }
    }








  render(){
    console.log(this.props.selectedHouse[0])
    //${this.state.activatedBanner}
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
                  <div className="image-container" id="imgs">
                   <img
                      src={this.props.selectedHouse[0]?.image_url}
                      alt={ this.props.selectedHouse[0]?.name }
                      className='photo'
                  />
                   <img
                      src='https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg'
                      alt={ this.props.selectedHouse[0]?.name }
                      className='photo'
                  />
                   <img
                      src={this.props.selectedHouse[0]?.image_url}
                      alt={ this.props.selectedHouse[0]?.name }
                      className='photo'
                  />
                   <img
                      src={this.props.selectedHouse[0]?.image_url}
                      alt={ this.props.selectedHouse[0]?.name }
                      className='photo'
                  />
                  </div>
                  <div className="buttons-container">
                      <button className="carousel-btn" id="prev">prev</button>
                      <button className="carousel-btn" id="next">next</button>
                  </div>
                </div>
               </div>
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
