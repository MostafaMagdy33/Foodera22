
import React, { useRef, useState } from 'react';
import { Col , Row , Container } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
        <section id='Testimonials'  className='sec7 Container'>
          <Row>
<div> <h1>Testimonials</h1></div>
      <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper col-lg-12 md-12 sm-12"
      >
        <SwiperSlide className='Slide1'><img src="/img/1 (1).jpg" alt="" />
<p>"Far far away, behind the word mountains, far from <br></br> the countries Vokalia and Consonantia, there live the <br></br> blind texts. Separated they live."</p>
<h6>Maccy Doe - Front End</h6></SwiperSlide>
        <SwiperSlide className='Slide2'>  <img src="/img/23.jpg" alt="" />
<p>"Far far away, behind the word mountains, far from <br></br> the countries Vokalia and Consonantia, there live the <br></br> blind texts. Separated they live far from the countries <br></br> Vokalia."</p>
<h6>Johnthan Doe - UX Designer</h6></SwiperSlide>
        <SwiperSlide className='Slide3'>        <img src="/img/man-6153295_1280.jpg" alt="" />
        <p>"Far far away, behind the word mountains, far from <br></br> the countries Vokalia and Consonantia, there live the <br></br> blind texts. Separated they live far from the countries <br></br> Vokalia."</p>
<h6>Simab Dave - Web Designe</h6></SwiperSlide>
        
      </Swiper>
      </Row>
    </section>
    </>
  );
}