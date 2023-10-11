"use client";
import Image from "next/image";
import React from "react";
import Line from "@/components/ui/line";
import Heading from "@/components/ui/heading";
import styled from "styled-components";

const About = styled.section`
  @media screen and (max-width: 1024px) {
    padding: 2rem 1rem;
    gap: 1.25rem;
    & > div {
      height: 10.27906rem;
      min-width: 100%;

      div {
        width: 11.56963rem;
        height: 5.47775rem;
        right: -0.29rem;
        bottom: -0.56rem;
      }

      .line {
        width: 3.43894rem;
        height: 3.34069rem;
        top: -0.47rem;
        left: -0.47rem;

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    & > article {
      width: 100%;
      padding: 0;
    }
  }
`;

const SobreMim = () => {
  return (
    <About
      className="lg:px-[5rem] lg:py-4 bg-dark flex lg:flex-row flex-col justify-evenly items-center"
      id="sobremim"
    >
      <div className="lg:!h-[25rem] sm:!h-[20rem] lg:min-w-[52.125rem] relative">
        <Line classname="line absolute top-[-1rem] left-[-1rem]" />
        <Image
          src={"/images/sobremim.png"}
          alt="Victor fazendo remada unilateral"
          width={821}
          height={400}
          className="w-full h-full object-cover rounded-lg relative z-10"
        />
        <div className="bg-primary700 w-[29.4375rem] h-[13.9375rem] rounded absolute bottom-[-1rem] right-[-1rem]" />
      </div>
      <article className="grow-1 w-[58.68rem] flex flex-col justify-center lg:gap-1 gap-0.75 px-2.5 py-[0.1875rem]">
        <Heading
          titleBold="sobre"
          title="mim"
          color="text-white"
        />
        <p className="hidden text-1.25 lg:block text-white font-medium leading-[1.5rem] tracking-[0.025rem]">
          Me chamo Victor Alves, sou praticante de musculação a 12 anos,
          Profissional de Educação Física, Treinador presencial e online.
          Durante minha carreira, já atendi mais de 400 alunos e alunas, de
          diferentes cidades e países. O meu objetivo é ajudar você a atingir
          suas metas, e por isso, através de uma abordagem individualizada e
          adaptada às suas necessidades, vou te ajudar a alcançar os resultados
          que você deseja. Levarei em consideração seus hábitos de vida,
          preferências e metas específicas para desenvolver um plano de
          treinamento que se encaixe perfeitamente em sua rotina.
        </p>
        <p className="lg:hidden leading-6 text-white">
          Levando em consideração os seus hábitos de vida, preferências e metas
          desenvolvo planos de treinamento individualizados que se encaixem na
          sua rotina. Especializado em postura, biomecânica, treinamento
          feminino e pós-graduando em reabilitação física já atendi mais de 500
          alunos de diferentes cidades e países, muito prazer, Victor Alves.
        </p>
      </article>
    </About>
  );
};

export default SobreMim;
