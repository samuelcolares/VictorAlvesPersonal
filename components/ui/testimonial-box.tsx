"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import TestimonialCard from "./testimonial-card";
import Image from "next/image";

const TestCards = [
  {
    image: "/images/feedbacks/testimonial/vitoriagomes.jpg",
    instagram: "vitoriagomys",
    depoimento: `Indico muito a consultoria do Victor. A forma como ele monta os treinos e demonstra interesse em entender cada ponto do seu objetivo é demais.`,
    mes: "setembro",
    ano: 2022,
  },
  {
    image: "/images/feedbacks/testimonial/ingridlima.jpg",
    instagram: "ingriiddlima",
    depoimento: `Estou em acompanhamento com o Victor já faz um tempo e indico de olhos fechados. Um excelente profissional e super atencioso. Está sempre ali dando um suporte e o treino é individualizado de acordo com sua necessidade. Se você entrar nesse time, a evolução é garantida!`,
    mes: "Dezembro",
    ano: 2022,
  },
  {
    image: "/images/feedbacks/testimonial/andressa.jpg",
    instagram: "andressabsh",
    depoimento: `Excelente profissional, sempre atencioso e prestativo. Desde que iniciei o acompanhamento com o Victor, notei o quanto é importante ter um treino especializado e um bom profissional nos acompanhando. Indico de olhos fechados.`,
    mes: "Junho",
    ano: 2023,
  },
  {
    image: "/images/feedbacks/testimonial/edison.jpg",
    instagram: "edisonnt",
    depoimento: `Estou na consultoria do Victor a um pouco mais de um ano e super indico, tive resultados sensacionais e pude ver o quão qualificado ele é como profissional e além disso, uma excelente pessoa!!!`,
    mes: "Maio",
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
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper4"
      >
        {mappedCards}
      </Swiper>
    </div>
  );
};

export const TestimonialBoxMobile = () => {
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
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper4 w-full"
      >
        {mappedCards}
      </Swiper>
    </div>
  );
};
