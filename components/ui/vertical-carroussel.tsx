"use client"
import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const SW = styled.div`
  position: relative;
  .mySwiper {
    height: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    background: linear-gradient(#1a1b1a, transparent);
    top: 0;
    left: 0;
    z-index: 10;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    background: linear-gradient(360deg, #1a1b1a, transparent);
    bottom: 0;
    left: 0;
    z-index: 10;
  }
`;

const VerticalCarroussel = () => {
  return (
    <SW className="lg:h-[60.625rem] w-fit overflow-hidden">
    <Swiper
      direction="vertical"
      slidesPerView={1.8}
      // autoplay={{
      //   delay: 500,
      //   disableOnInteraction: false,
      // }}
      centeredSlides={true}
      spaceBetween={10}
      modules={[Autoplay]}
      className="mySwiper"
      loop={true}
    >
      <SwiperSlide>
        <div className="bg-white w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]" />
      </SwiperSlide>
    </Swiper>
  </SW>
  )
}

export default VerticalCarroussel
