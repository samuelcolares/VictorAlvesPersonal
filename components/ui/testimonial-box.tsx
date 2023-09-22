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

export const TestimonialBox = () => {
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
      </Swiper>
    </div>
  );
};

export const TestimonialBoxMobile = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        grabCursor={true}
        effect={"creative"}
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
        className="mySwiper4 w-full"
      >
        <SwiperSlide>
          <TestimonialCard
            instagram={TestCards[0].instagram}
            mes={TestCards[0].mes}
            ano={TestCards[0].ano}
            depoimento={TestCards[0].depoimento}
            image={
              <Image
                src={TestCards[0].image}
                alt={TestCards[0].instagram}
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            instagram={TestCards[0].instagram}
            mes={TestCards[0].mes}
            ano={TestCards[0].ano}
            depoimento={TestCards[0].depoimento}
            image={
              <Image
                src={TestCards[0].image}
                alt={TestCards[0].instagram}
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            instagram={TestCards[0].instagram}
            mes={TestCards[0].mes}
            ano={TestCards[0].ano}
            depoimento={TestCards[0].depoimento}
            image={
              <Image
                src={TestCards[0].image}
                alt={TestCards[0].instagram}
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
