import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './AdBanner.css';
import Banner1 from './Banner/Banner1';
import Banner2 from './Banner/Banner2';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


function AdBanner() {
  return (
    <section className="banner-section">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slider'>
          <Banner1/>
          {/* <div className="banner-container">
            <div className="banner">
              <div className="pict1">
                <img src="case.png" alt="" />
              </div>
              <div className="content">
                  <span>upto</span>
                  <h3>50% off</h3>
                  <p>offer ends after 5 days</p>
                  <a href="#" className='btn'>view offer</a>
              </div>
              <div className="pict2">
                <img src="case.png" alt="" />
              </div>
            </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <Banner2/>
          {/* <div className="banner-container">
              <div className="banner">
                <div className="pict1">
                  <img src="case.png" alt="" />
                </div>
                <div className="content">
                    <span>upto</span>
                    <h3>50% off</h3>
                    <p>offer ends after 5 days</p>
                    <a href="#" className='btn'>view offer</a>
                </div>
                <div className="pict2">
                  <img src="case.png" alt="" />
                </div>
              </div>
            </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <Banner1/>
          {/* <div className="banner-container">
              <div className="banner">
                <div className="pict1">
                  <img src="case.png" alt="" />
                </div>
                <div className="content">
                    <span>upto</span>
                    <h3>50% off</h3>
                    <p>offer ends after 5 days</p>
                    <a href="#" className='btn'>view offer</a>
                </div>
                <div className="pict2">
                  <img src="case.png" alt="" />
                </div>
              </div>
            </div> */}
        </SwiperSlide>
      </Swiper>
      {/* <div className="banner-container">
        <div className="banner">
          <i class='bx bx-chevron-left'></i>
          <div className="pict1">
            <img src="../case.png" alt="" />
          </div>
          <div className="content">
              <span>upto</span>
              <h3>50% off</h3>
              <p>offer ends after 5 days</p>
              <a href="#" className='btn'>view offer</a>
          </div>
          <div className="pict2">
            <img src="../case.png" alt="" />
          </div>
          <i class='bx bx-chevron-right' ></i>
        </div>
      </div> */}
    </section>
  )
}

export default AdBanner
