import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import '../styles/Swiper.scss'
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

const images = [
  'https://res.cloudinary.com/sownthari/image/upload/v1683423813/book-1_adpb14.png',
  'https://res.cloudinary.com/sownthari/image/upload/v1683423813/book-2_zkhvnp.png',
  'https://res.cloudinary.com/sownthari/image/upload/v1683423814/book-3_q6xnev.png',
  'https://res.cloudinary.com/sownthari/image/upload/v1683423814/book-4_idmjwv.png',
  'https://res.cloudinary.com/sownthari/image/upload/v1683423814/book-5_eycau7.png',
  'https://res.cloudinary.com/sownthari/image/upload/v1683423814/book-6_qw1bai.png'
];

const SwiperPart = ({ interval }) => {
  const params = {
    loop: true,
    autoplay: {
      delay: interval,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,   
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    }
  };

  return (
    
      <Swiper {...params}>
        <div className='swiper'>
        {images.map((image, index) => (
        <SwiperSlide key={index}>
          <span className='swiper-slide'><img src={image} alt={`slide ${index}`} /></span>
        </SwiperSlide>
      ))}
        </div>
        <img className="stand"src='https://res.cloudinary.com/sownthari/image/upload/v1683423980/stand_briyqf.png'></img>
      </Swiper>
    
  );
};

export default SwiperPart;







