import React, { Component } from 'react';
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



class carousel extends Component {

  render() {
 
    return (
      <Carousel autoPlay showThumbs={false} className="carousel">
        <div>
          <img src="https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg" className="carousel-inner" alt='banner'/>
          
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg" className="carousel-inner" alt='banner' />
          
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/99/dc/88/99dc88e11e5cdb212562800d90bcd790.jpg"  className="carousel-inner" alt='banner' />
         
        </div>
        <div>
          <img src="https://www.pngitem.com/pimgs/m/358-3586075_ledtv-bkdrop1-min-led-tv-banner-png-transparent.png"  className="carousel-inner" alt='banner' />
         
        </div>
      </Carousel>
    )
  }

}

export default carousel;
