"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const SWM = styled.div`
  .mySwiper {
    height: 100%;
    .swiper-slide > img {
      margin: 0 auto;
    }
  }
`;

const HorizontalCarroussel = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted)
    return <SWM className="lg:h-[60.625rem] w-full overflow-hidden" />;
  return (
    <SWM className="lg:h-[60.625rem] w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        className="mySwiper w-full"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/kauan.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[100%] h-[15rem] rounded-[0.565rem] mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/samuel.png"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[100%] h-[15rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/ss.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[100%] h-[15rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/andressa.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[100%] h-[15rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/feedbacks/vertical/ingrid.jpg"}
            alt="Imagem de Evolução de Aluno"
            width={1351}
            height={995}
            className="object-cover w-[100%] h-[15rem] rounded-[0.565rem]"
          />
        </SwiperSlide>
      </Swiper>
    </SWM>
  );
};

export default HorizontalCarroussel;
