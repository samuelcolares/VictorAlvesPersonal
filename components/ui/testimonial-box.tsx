"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import TestimonialCard from "./testimonial-card";
import Image from "next/image";

const TestCards = [
  {
    image: "/images/feedbacks/testimonial/vitoriagomes.png",
    instagram: "vitoriagomys",
    depoimento: `Indico muito a consultoria do Victor. A forma como ele monta os treinos e demonstra interesse em entender cada ponto do seu objetivo é demais.`,
    mes: "setembro",
    ano: 2022,
  },
];

const TestimonialBox = () => {
  const mappedCards = TestCards.map((item, idx) => (
    <SwiperSlide key={idx}>
      <TestimonialCard
        instagram={item.instagram}
        mes={item.mes}
        ano={item.ano}
        depoimento={item.depoimento}
        image={
          <Image
            src={item.image}
            alt={item.instagram}
            width={60}
            height={60}
            className="w-full h-full object-cover"
          />
        }
      />
    </SwiperSlide>
  ));

  return (
    <div className="w-[55rem] overflow-hidden">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        // creativeEffect={{
        //   prev: {
        //     shadow: true,
        //     translate: [0, 0, -800],
        //     rotate: [180, 0, 0],
        //   },
        //   next: {
        //     shadow: true,
        //     translate: [0, 0, -800],
        //     rotate: [-180, 0, 0],
        //   },
        // }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper4"
      >
        {mappedCards}
        {/* <SwiperSlide>
          <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-dark"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-primary500"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-dark"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-primary600"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-primary500"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-red-900"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-slate-400"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-primary800"/>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default TestimonialBox;
