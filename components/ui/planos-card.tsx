"use client";
import React from "react";
import Button from "./button";
import styled from "styled-components";
import { CheckCircle, Dumbbell, Globe, TableProperties } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Link from "next/link";

const personalTraining = [
  "Treino individualizado",
  "Acompanhamento de evolução",
  "Treinos e avaliações presenciais",
  "Esclarecimento de dúvidas 24hrs",
  "Apenas Fortaleza e Eusébio (CE)",
];

const planilhasDeTreino = [
  "Planilha com foco no seu objetivo",
  "Planejamento para 4 a 8 semanas",
  "Vídeos dos exercícios",
];

const consultoriaOnline = [
  "Treino individualizado",
  "Planejamento para 4 a 8 semanas",
  "Vídeos dos exercícios",
  "Acompanhamento de evolução",
  "Ajustes com base no feedback semanal",
  "Esclarecimento de dúvidas 24hrs",
  "Avaliação postural e funcional online",
];

const Card = styled.div`
  display: flex;
  width: 25.625rem;
  height: 35rem;
  padding: 2.5rem 2rem;
  flex-direction: column;
  box-shadow: -12px 4px 12px 0px rgba(62, 64, 149, 0.12);
  border-radius: 0.75rem;
  background-color: #fafafa;
  align-items: flex-start;

  &.principal {
    width: 25.625rem;
    height: 42.5rem;
  }

  .all > button {
    box-shadow: 0.675rem 0.675rem 0.3125rem 0px #00000034;

    &:hover {
      box-shadow: 0 0 #0000;
    }
  }
`;

export const PlanosCards = () => {
  return (
    <div className="group lg:flex gap-2 items-center justify-center hidden">
      <Card className="transition-all">
        <div>
          <h3 className="text-2 font-semibold tracking-[0.04rem] leading-[2.5rem] text-dark">
            Planilha de Treino
          </h3>
          <h4 className="text-2.75 font-semibold tracking-wider leading-[3.25rem] text-dark">
            R$ 49,90
          </h4>
        </div>
        <ul className="flex flex-col gap-1.25 mt-2">
          {planilhasDeTreino.map((item, idx) => (
            <li key={idx} className="flex gap-0.5 items-center">
              <CheckCircle className="w-1.5 h-1.5 text-primary900" />
              <span className="text-1.25 tracking-wide leading-button">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Link href={"https://whatsa.me/5585992814760/?t=Oi%20Victor,%20tenho%20interesse%20nas%20planilha%20de%20treino,%20como%20funciona?"} className="mt-auto mx-auto" target="_blank">
          <Button text="comprar aqui" />
        </Link>
      </Card>
      <Card className="transition-all principal">
        <div>
          <h3 className="text-2 font-semibold tracking-[0.04rem] leading-[2.5rem] text-dark">
            Consultoria Online
          </h3>
          <span className="">A partir de:</span>
          <div className="flex gap-0.75 items-center">
            <h4 className="text-2.75 font-semibold tracking-wider leading-[3.25rem] text-dark">
              R$ 149,90
            </h4>
            <span className="">por mês</span>
          </div>
        </div>
        <ul className="flex flex-col gap-1.25 mt-2">
          {consultoriaOnline.map((item, idx) => (
            <li key={idx} className="flex gap-0.5 items-center">
              <CheckCircle className="w-1.5 h-1.5 text-primary900" />
              <span className="text-1.25 tracking-wide leading-button">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Link href={"/consultoria"} className="mt-auto mx-auto all">
          <Button
            text="Ver Todos"
            classname="bg-primary700 text-white border-0"
          />
        </Link>
      </Card>
      <Card className="transition-all">
        <div>
          <h3 className="text-2 font-semibold tracking-[0.04rem] leading-[2.5rem] text-dark">
            Personal Training
          </h3>
          <span className="">A partir de:</span>
          <div className="flex gap-0.75 items-center">
            <h4 className="text-2.75 font-semibold tracking-wider leading-[3.25rem] text-dark">
              R$ 219,90
            </h4>
            <span className="">por mês</span>
          </div>
        </div>
        <ul className="flex flex-col gap-1.25 mt-2">
          {personalTraining.map((item, idx) => (
            <li key={idx} className="flex gap-0.5 items-center">
              <CheckCircle className="w-1.5 h-1.5 text-primary900" />
              <span className="text-1.25 tracking-wide leading-button">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <Link href={"https://whatsa.me/5585992814760/?t=Oi%20Victor,%20tenho%20interesse%20no%20personal%20training,%20como%20funciona?"} className="mt-auto mx-auto" target="_blank">
          <Button text="Saber Mais" />
        </Link>
      </Card>
    </div>
  );
};

const CardMobile = styled.div`
  height: 45rem;
  display: flex;
  padding: 1.25rem 1rem;
  flex-direction: column;
  box-shadow: 0px 4px 20px 0px rgba(62, 64, 149, 0.62);
  border-radius: 0.75rem;
  background-color: #fafafa;
  align-items: flex-start;
  margin: 0rem 1rem;
  .all > button {
    box-shadow: 0.675rem 0.675rem 0.3125rem 0px #00000034;

    &:hover {
      box-shadow: 0 0 #0000;
    }
  }
`;
const CardMobileWrapper = styled.div`
  flex: 1;
  .mySwiperPlanos {
    display: block;
    padding: 1rem 0.25rem;
    .swiper-pagination {
      position: unset;
      margin-bottom: 1rem;
    }
    .swiper-pagination-bullet {
      width: 1.25rem;
      height: 0.25rem;
      border-radius: 5rem;
    }
    .swiper-pagination-bullet-active {
      background-color: #3e4095;
    }
    /* .swiper-slide-active {
      & > div {
        color: #f5f5f5;
        transition: color 1s cubic-bezier(0.4, 0, 0.2, 1);
        border-color: white;
      }
    } */
  }
`;
export const PlanosCardsMobile = () => {
  return (
    <CardMobileWrapper className="lg:hidden">
      <Swiper
        initialSlide={1}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        className="mySwiperPlanos w-full"
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <CardMobile className="transition-all">
            <div>
              <h3 className="text-2 font-semibold tracking-[0.04rem] leading-[2.5rem] text-dark">
                Planilha de Treino
              </h3>
              <h4 className="text-2.75 font-semibold tracking-wider leading-[3.25rem] text-dark">
                R$ 49,90
              </h4>
            </div>
            <ul className="flex flex-col gap-1.25 mt-2">
              {planilhasDeTreino.map((item, idx) => (
                <li key={idx} className="flex gap-0.5 items-center">
                  <CheckCircle className="w-1.5 h-1.5 text-primary900" />
                  <span className="text-1.25 tracking-wide leading-button">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link href={"#"} className="mt-auto mx-auto">
              <Button text="comprar aqui" />
            </Link>
          </CardMobile>
        </SwiperSlide>
        <SwiperSlide>
          <CardMobile className="transition-all principal">
            <div>
              <h3 className="text-2 font-semibold tracking-[0.04rem] leading-[2.5rem] text-dark">
                Consultoria Online
              </h3>
              <span className="">A partir de:</span>
              <div className="flex gap-0.75 items-center">
                <h4 className="text-2.75 font-semibold tracking-wider leading-[3.25rem] text-dark">
                  R$ 149,90
                </h4>
                <span className="">por mês</span>
              </div>
            </div>
            <ul className="flex flex-col gap-1.25 mt-2">
              {consultoriaOnline.map((item, idx) => (
                <li key={idx} className="flex gap-0.5 items-center">
                  <CheckCircle className="w-1.5 h-1.5 text-primary900" />
                  <span className="text-1.25 tracking-wide leading-button">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link href={"/consultoria"} className="mt-auto mx-auto all">
              <Button
                text="Ver Todos"
                classname="bg-primary700 text-white border-0"
              />
            </Link>
          </CardMobile>
        </SwiperSlide>
        <SwiperSlide>
          <CardMobile className="transition-all">
            <div>
              <h3 className="text-2 font-semibold tracking-[0.04rem] leading-[2.5rem] text-dark">
                Personal Training
              </h3>
              <span className="">A partir de:</span>
              <div className="flex gap-0.75 items-center">
                <h4 className="text-2.75 font-semibold tracking-wider leading-[3.25rem] text-dark">
                  R$ 219,90
                </h4>
                <span className="">por mês</span>
              </div>
            </div>
            <ul className="flex flex-col gap-1.25 mt-2">
              {personalTraining.map((item, idx) => (
                <li key={idx} className="flex gap-0.5 items-center">
                  <CheckCircle className="w-1.5 h-1.5 text-primary900" />
                  <span className="text-1.25 tracking-wide leading-button">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link href={"#"} className="mt-auto mx-auto">
              <Button text="Saber Mais" />
            </Link>
          </CardMobile>
        </SwiperSlide>
      </Swiper>
    </CardMobileWrapper>
  );
};
