class House {

  constructor(name, imageUrl, price, priceCurrency, lat, lng ) {


    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.priceCurrency = priceCurrency;
    this.lat = lat;
    this.lng = lng;
    this.isActive = {
                      status: false,
                      info: false
                     }



  }

  toggleTheStatus () {
    return this.isActive.status = !this.isActive.status
  }

  toggleHiddenDescription() {
    debugger
    if ( this.isActive.status){
      this.isActive.info = true
    }else{
      this.isActive.info = false
    }
  }

  descriptionInfo(clicked) {
    if(clicked){
      return this.isActive.info = true
    }
    return this.isActive.info = false
  }


}

export default House
