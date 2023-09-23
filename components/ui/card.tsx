"use client";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const Circle = styled.div`
  background-image: linear-gradient(180deg, #3e4095 0%, #1d1e32 100%);
`;

type CardProps = {
  idx?: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export const Card: React.FC<CardProps> = ({ icon, title, desc, idx }) => {
  return (
    <article>
      <div className="flex flex-col gap-0.5 px-1 mb-1.25">
        <span className="w-1.25 h-1.25 text-primary950 flex items-center justify-center text-1.5">
          {idx}
        </span>
        <div className="flex items-center justify-center">
          <Circle className="w-1.5 h-1.5 rounded-[50%]" />
          <div className="bg-primary950 w-full h-[.25rem] " />
        </div>
      </div>
      <div className="w-[22.5rem] h-[26.875rem] flex flex-col items-center py-3.25 px-2.5 bg-white rounded-xl shadow-card lg:hover:scale-110 lg:hover:shadow-2xl transition">
        {icon}
        <div className="py-1 text-center flex flex-col gap-1">
          <h4 className="font-semibold text-1.5 leading-8 uppercase">
            {title}
          </h4>
          <p className="text-1.25 font-medium leading-button">{desc}</p>
        </div>
      </div>
    </article>
  );
};

type MobileCardProps = {
  cartoes: CardProps[];
};

export const MobileCard: React.FC<MobileCardProps> = ({ cartoes }) => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  const mappedCards = cartoes.map((item, idx) => (
    <SwiperSlide key={idx}>
      <div className="w-[17.5rem] h-[18.875rem] flex flex-col items-center lg:py-3.25 lg:px-2.5 p-2.5 bg-white rounded-xl shadow-mobileCard my-1 mx-auto">
        {item.icon}
        <div className="py-1 text-center flex flex-col gap-0.5">
          <h4 className="font-semibold text-1.25 leading-8 uppercase">
            {item.title}
          </h4>
          <p className="text-1 font-medium">{item.desc}</p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      pagination={{ clickable: true }}
      className="mySwiperCards"
      effect={"cards"}
      cardsEffect={{ slideShadows: false }}
      grabCursor={true}
      modules={[EffectCards, Pagination]}
    >
      {mappedCards}
    </Swiper>
  );
};
