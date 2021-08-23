import React from 'react';
import Poster from './Poster.png';
import DarthVeider from './DarthVeider.png';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './Slider.scss'

SwiperCore.use([Navigation]);

const Slider = () => {
  return (
    <div className='slider'>
      <Swiper
        spaceBetween={300}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='slideItems'>
          <img src={Poster} alt='movies' className='poster' />
          <div className='mt-3'>
            <Link to='/movies/'>
              <button type="button" className="btn btn-primary">Buy a DVD</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slideItems'>
          <img src={DarthVeider} alt='figurines' />
          <div className='mt-3'>
            <Link to='/figurine'>
              <button type="button" className="btn btn-primary">Buy a collectible figurine</button>
            </Link>
          </div>
        </SwiperSlide>

      </Swiper>
    </div >
  );
};

export default Slider;

