"use client";
import React from "react";
import Button from "./button";
import styled from "styled-components";
import { Dumbbell, Globe, TableProperties } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const PlanosWrapper = styled.div`
  height: 50.625rem;
  width: fit-content;
  margin: 000 auto;
  /* &:hover > :not(:hover) {
    height: 45rem;
    width: 29.25rem;
    background-color: #fafafa;
    color: #1a1b1a;
  } */
`;

const Card = styled.div`
  height: 45rem;
  width: 29.25rem;
  border: 0.25rem solid #3e4095;
  border-radius: 1.8rem;
  padding: 2.25rem 1.125rem;
  background-color: #fafafa;
  color: #1a1b1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2.25rem 0;
    /* width: 100%; */

    & > svg {
      align-self: center;
      width: 1.98rem;
      height: 1.98rem;
    }

    & > h2 {
      align-self: center;
      margin-top: 1.125rem;
      margin-bottom: 1.625rem;
      font-size: 2.25rem;
      line-height: 2.925rem;
      letter-spacing: 0.045rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    & > ul {
      margin-left: -1rem;
      list-style-type: disc;
      display: flex;
      flex-direction: column;
      gap: 0.88rem;
      li {
        font-size: 1.35rem;
        line-height: 1.8rem; /* 133.333% */
        letter-spacing: 0.027rem;
      }
    }
  }

  & > h3 {
    text-align: center;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.925rem;
    letter-spacing: 0.036rem;
  }

  &.principal {
    width: 32rem;
    height: 50.625rem;
    background-color: #1a1b1a;
    color: #fafafa;
    gap: 1.25rem;

    & > div {
      padding: 2.5rem 0;

      & > svg {
        width: 2.75rem;
        height: 2.75rem;
      }

      & > h2 {
        align-self: center;
        margin-top: 1.25rem;
        font-size: 2.5rem;
        line-height: 3.25rem;
        letter-spacing: 0.05rem;
      }

      & > ul {
        margin-left: 2rem;
        gap: 1rem;
        li {
          font-size: 1.5rem;
          line-height: 2rem;
          letter-spacing: 0.03rem;
        }
      }
    }

    & > h3 {
      text-align: center;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.925rem;
      letter-spacing: 0.036rem;
    }
  }
`;

export const PlanosCards = () => {
  return (
    <PlanosWrapper className="group lg:flex gap-2 items-center justify-center hidden">
      <Card className="transition-all">
        <div>
          <TableProperties />
          <h2>Planilha de Treino</h2>
          <ul>
            <li>Planilha com foco no seu objetivo</li>
            <li>Planejamento para 4 ou 8 semanas</li>
            <li>Vídeos dos exercícios</li>
          </ul>
        </div>
        <h3>
          A partir de <span className="font-bold">R$ 49,90</span>
        </h3>
        <Button text="comprar aqui" />
      </Card>
      <Card className="transition-all principal">
        <div>
          <Globe />
          <h2>Consultoria Online</h2>
          <ul>
            <li>Treino individualizado</li>
            <li>Planejamento para 4 ou 8 semanas</li>
            <li>Vídeos dos exercícios</li>
            <li>Acompanhamento de evolução</li>
            <li>Ajustes com base no feedback semanal</li>
            <li>Esclarecimento de dúvidas 24hrs</li>
            <li>Chamada de vídeo para alinhamento</li>
            <li>Avaliação postural e funcional online</li>
          </ul>
        </div>
        <h3>
          A partir de <span className="font-bold">R$ 149,90</span>
        </h3>
        <Button text="Saber Mais" />
      </Card>
      <Card className="transition-all">
        <div>
          <Dumbbell />
          <h2>Personal Training</h2>
          <ul>
            <li>Treino individualizado</li>
            <li>Acompanhamento de evolução</li>
            <li>Treinos e ajustes presenciais</li>
            <li>Apenas Fortaleza e Eusébio (CE)</li>
          </ul>
        </div>
        <h3>
          A partir de <span className="font-bold">R$ 219,90</span>
        </h3>

        <Button text="Saber Mais" />
      </Card>
    </PlanosWrapper>
  );
};

const CardMobile = styled.div`
  height: 38rem;
  width: 100%;
  border: 0.25rem solid #3e4095;
  border-radius: 1.8rem;
  padding: 1.125rem;
  background-color: #fafafa;
  color: #1a1b1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    /* width: 100%; */

    & > svg {
      align-self: center;
      width: 1.98rem;
      height: 1.98rem;
    }

    & > h2 {
      align-self: center;
      margin-top: 1.125rem;
      margin-bottom: 1.625rem;
      font-size: 1.825rem;
      line-height: 2.925rem;
      letter-spacing: 0.045rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    & > ul {
      /* margin-left: -.5rem; */
      list-style-type: disc;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      li {
        font-size: 1rem;
        line-height: 1.8rem; /* 133.333% */
        letter-spacing: 0.027rem;
      }
    }
  }

  & > h3 {
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.925rem;
    letter-spacing: 0.036rem;
  }
`;
const CardMobileWrapper = styled.div`
  .mySwiperPlanos {
    display: block;
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
    .swiper-slide-active {
      & > div {
        background: linear-gradient(0deg, black, #3e4095) !important;
        color: #f5f5f5;
        transition: color 1s cubic-bezier(0.4, 0, 0.2, 1);
        border-color: white;
      }
    }
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
        // loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <CardMobile className="transition-all">
            <div>
              <TableProperties />
              <h2>Planilha de Treino</h2>
              <ul>
                <li>Planilha com foco no seu objetivo</li>
                <li>Planejamento para 4 ou 8 semanas</li>
                <li>Vídeos dos exercícios</li>
              </ul>
            </div>
            <h3>
              A partir de <span className="font-bold">R$ 49,90</span>
            </h3>
            <Button text="comprar aqui" />
          </CardMobile>
        </SwiperSlide>
        <SwiperSlide>
          <CardMobile className="transition-all principal">
            <div>
              <Globe />
              <h2>Consultoria Online</h2>
              <ul>
                <li>Treino individualizado</li>
                <li>Planejamento para 4 ou 8 semanas</li>
                <li>Vídeos dos exercícios</li>
                <li>Acompanhamento de evolução</li>
                <li>Ajustes com base no feedback semanal</li>
                <li>Esclarecimento de dúvidas 24hrs</li>
                <li>Chamada de vídeo para alinhamento</li>
                <li>Avaliação postural e funcional online</li>
              </ul>
            </div>
            <h3>
              A partir de <span className="font-bold">R$ 149,90</span>
            </h3>
            <Button text="Saber Mais" />
          </CardMobile>
        </SwiperSlide>
        <SwiperSlide>
          <CardMobile className="transition-all">
            <div>
              <Dumbbell />
              <h2>Personal Training</h2>
              <ul>
                <li>Treino individualizado</li>
                <li>Acompanhamento de evolução</li>
                <li>Treinos e ajustes presenciais</li>
                <li>Apenas Fortaleza e Eusébio (CE)</li>
              </ul>
            </div>
            <h3>
              A partir de <span className="font-bold">R$ 219,90</span>
            </h3>
            <Button text="comprar aqui" />
          </CardMobile>
        </SwiperSlide>
      </Swiper>
    </CardMobileWrapper>
  );
};
