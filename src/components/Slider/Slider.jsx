import { A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './slider.scss';

import Five from '../../img/slider/photoFive.png';
import Four from '../../img/slider/photoFour.jpeg';
import One from '../../img/slider/photoOne.jpg';
import Three from '../../img/slider/photoThree.jpg';
import Two from '../../img/slider/photoTwo.jpg';

import { useMediaQuery } from '@mui/material';

const Slider = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <section className="slider">
      <Swiper
        modules={[A11y, Autoplay]}
        slidesPerView={isSmallScreen ? 1 : 3}
        spaceBetween={52}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="custom-swiper-slider"
      >
        <SwiperSlide>
          <div className="slide">
            <img src={One} alt="PhotoOne" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Two} alt="PhotoTwo" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Three} alt="PhotoThree" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Four} alt="PhotoFour" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src={Five} alt="PhotoFive" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
