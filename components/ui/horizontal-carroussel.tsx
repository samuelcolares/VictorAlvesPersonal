"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const SW = styled.div`
  .mySwiper {
    height: 100%;
  }
`;

const HorizontalCarroussel = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted)
    return (
      <SW className="lg:h-[60.625rem] w-full overflow-hidden" />
    );
  return (
    <SW className="lg:h-[60.625rem] w-full overflow-hidden">
      <Swiper
        slidesPerView={1.8}
        centeredSlides={true}
        spaceBetween={10}
        className="mySwiper w-full"
        // loop={true}
      >
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/kauan.png"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[13.5805rem] h-[10rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/samuel.png"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[13.5805rem] h-[10rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/ss.png"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[13.5805rem] h-[10rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/kauan.png"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[13.5805rem] h-[10rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/samuel.png"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[13.5805rem] h-[10rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/ss.png"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[13.5805rem] h-[10rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
      </Swiper>
    </SW>
  )
}

export default HorizontalCarroussel
