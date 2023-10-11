"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

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
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted)
    return (
      <SW className="lg:h-[60.625rem] w-fit overflow-hidden" />
    );
  return (
    <SW className="lg:h-[60.625rem] w-fit overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={1.8}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={10}
        modules={[Autoplay]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/kauan.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/samuel.png"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/ss.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/ingrid.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/andressa.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/edison.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[42.21rem] h-[31.08431rem] rounded-[1.75619rem]"
          />
        </SwiperSlide>
      </Swiper>
    </SW>
  );
};

export default VerticalCarroussel;
