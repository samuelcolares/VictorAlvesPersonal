"use client";
import { CheckCircle, CheckCircle2 } from "lucide-react";
import React from "react";
import Planos from "./planos";
import styled from "styled-components";
const consultoria = [
  "Treino individualizado",
  "Vídeos dos exercícios",
  "Acompanhamento de evolução",
  "Ajustes com base no feedback semanal",
  "Esclarecimento de dúvidas 24hrs",
];

const PlanosWrapper = styled.div`
  @media screen and (max-width: 1230px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    &>div{
      margin-left: 0;
    }
  }
`;

const ConsultoriaPlanos = () => {
  return (
    <section className="lg:py-2.5 lg:px-[5em] py-2 px-1 bg-dark flex flex-col lg:flex-row lg:justify-between lg:items-center gap-1">
      <div className="lg:w-[30.3125rem]">
        <h2 className="text-1.25 lg:text-2.5 text-white border-b-4 border-primary500 w-[18.5rem] lg:w-full">
          EM <span className="font-bold">TODOS</span> OS PLANOS DA{" "}
          <span className="font-bold">CONSULTORIA</span>, ESTÁ INCLUSO:
        </h2>
        <ul className="flex flex-col gap-2 mt-2">
          {consultoria.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-0.5 lg:text-1.25 text-white"
            >
              <CheckCircle className="w-1.5 h-1.5 text-primary500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <PlanosWrapper className="flex">
        <Planos plano="prata" preço="R$ 149,90" />
        <Planos plano="ouro" preço="R$ 397,90" classname="-ml-1 z-30" />
        <Planos plano="diamante" preço="R$ 697,90" classname="-ml-1 z-40" />
      </PlanosWrapper>
    </section>
  );
};

export default ConsultoriaPlanos;
