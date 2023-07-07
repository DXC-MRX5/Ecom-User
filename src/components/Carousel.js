import React from "react";
import Slider from "react-slick";
import bg1 from "../assets/abg1.jpg";
import bg2 from "../assets/abg2.jpg";
import bg3 from "../assets/abg3.jpg";
import bg4 from "../assets/abg4.jpg";
import bg5 from "../assets/abg5.jpg";
import bg6 from "../assets/abg6.jpg";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
      return (
        <div className="carousel">
          <Slider {...settings}>
            <div className="offer-cntnr">
              <img src={bg1} alt=""/>
            </div>
            <div className="offer-cntnr">
              <img src={bg2} alt=""/>
            </div>
            <div className="offer-cntnr">
              <img src={bg3} alt=""/>
            </div>
            <div className="offer-cntnr">
              <img src={bg4} alt=""/>
            </div>
            <div className="offer-cntnr">
              <img src={bg5} alt=""/>
            </div>
            <div className="offer-cntnr">
              <img src={bg6} alt=""/>
            </div>
          </Slider>
        </div>
      );
  
}

export default Carousel