"use client";
import React from "react";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import {
  PenSquare,
  ClipboardList,
  Dumbbell,
  Camera,
  Rocket,
} from "lucide-react";
import { Card, MobileCard } from "@/components/ui/card";

import styled from "styled-components";

const Consultoria = styled.section`
  .mySwiperCards {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    padding: 2rem 1rem;
    /* padding-bottom: 1.5rem; */
    gap: 0;
    .mySwiperCards {
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
    }
  }
`;

const cartoes = [
  {
    icon: <PenSquare className="w-2.5 h-2.5  min-h-[2.5rem]" />,
    title: "ANAMNESE",
    desc: "Será enviada uma ficha de anamnese para poder entender sua rotina, hábitos, particularidades, preferências e objetivos. ",
  },
  {
    icon: <ClipboardList className="w-2.5 h-2.5  min-h-[2.5rem]" />,
    title: "Planejamento",
    desc: "Concluída a anamnese, irei iniciar a montagem de um planejamento de treino com base em todas as suas individualidades e informações.",
  },
  {
    icon: <Dumbbell className="w-2.5 h-2.5  min-h-[2.5rem]" />,
    title: "Implementar",
    desc: "Chegou a hora de iniciar seu novo protocolo de treinamentos! Lembre-se que estarei disponível para responder suas dúvidas referentes aos exercícios.",
  },
  {
    icon: <Camera className="w-2.5 h-2.5  min-h-[2.5rem]" />,
    title: "Feedback",
    desc: "Após um período de protocolo você poderá enviar fotos para avaliação física e analisaremos juntos os resultados.",
  },
  {
    icon: <Rocket className="w-2.5 h-2.5  min-h-[2.5rem]" />,
    title: "EVOLUÇÃO CONTÍNUA",
    desc: "A partir deste momento retornamos a etapa de anamnese para poder aperfeiçoar e otimizar seus resultados para o próximo protocolo de treinamentos.",
  },
];

const Servicos = () => {
  const cardmaps = cartoes.map((item, idx) => (
    <Card
      key={idx}
      title={item.title}
      desc={item.desc}
      icon={item.icon}
      idx={idx + 1}
    />
  ));
  return (
    <Consultoria
      className="scroll bg-white lg:py-2 lg:px-[5em] lg:flex flex-col items-center gap-1.25 overflow-hidden"
      id="consultoria"
    >
      <div className="flex w-full self-start items-center justify-between mb-1 lg:mb-0">
        <div className="flex flex-col gap-0.75">
          <Heading titleBold="consultoria" title="online" color="dark" />
          <p className="text-1.25 font-medium leading-button tracking-wide">
            Como funciona a consultoria? Entenda um pouco de cata etapa e
            venha fazer parte do time!
          </p>
          <h3 className="text-1.25 font-medium leading-button tracking-wide ">
            A partir de{" "}
            <span className="font-bold text-primary950">R$ 149,90!</span>
          </h3>
        </div>
        <Button text="Saiba Mais" classname="lg:block hidden" />
      </div>

      <div className="lg:flex hidden">{cardmaps}</div>
      <div className="w-full">
        <MobileCard cartoes={cartoes} />
        <Button text="Saiba Mais" classname="lg:hidden mx-auto mb-2" />
      </div>

      <div className="flex w-full self-start items-center justify-between">
        <div className="flex flex-col gap-0.75">
          <Heading titleBold="Planilhas" title="detreino" color="dark" />
          <p className="text-1.25 font-medium leading-button tracking-wide">
            Planilhas de musculação prontas, com semanas periodizadas e treinos
            para você que está começando!
          </p>
          <h3 className="text-1.25 font-medium leading-button tracking-wide">
            A partir de{" "}
            <span className="font-bold text-primary950">R$ 49,90!</span>
          </h3>
          <Button text="compre aqui" classname="w-fit self-center lg:self-start" />
        </div>
      </div>
    </Consultoria>
  );
};

export default Servicos;
