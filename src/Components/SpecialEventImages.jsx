import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageCarousel = ({ images }) => {
  const sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    nextArrow: <Button className="slick-arrow slick-next bg-black"><FontAwesomeIcon icon=" fa-solid fa-arrow-right" /></Button>,
    prevArrow: <Button className="slick-arrow slick-prev"><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></Button>,    
    arrows:false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="relative pt-24 ">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={image} className={`transition-transform duration-300 transform hover:scale-150 ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}>
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;