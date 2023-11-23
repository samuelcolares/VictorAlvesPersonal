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
        <Heading titleBold="sobre" title="mim" color="text-white" />
        <p className="hidden text-1.25 lg:block text-white font-medium leading-[1.5rem] tracking-[0.025rem]">
          Olá, me chamo Victor Alves, sou Profissional de Educação Física,
          treinador presencial e online, sou especialista em treinamento
          feminino, postura e biomecânica. Ao longo da minha carreira já ajudei
          mais de 500 alunos e alunas de diversas cidades e países. Na minha
          consultoria online você terá um acompanhamento totalmente
          individualizado, onde o meu objetivo é te ajudar a alcançar os
          resultados que você deseja, onde irei avaliar, saber suas preferências
          para que assim desenvolva um treino perfeito para você.
        </p>
        <p className="lg:hidden leading-6 text-white">
        Olá, me chamo Victor Alves, sou Profissional de Educação Física,
          treinador presencial e online, sou especialista em treinamento
          feminino, postura e biomecânica. Ao longo da minha carreira já ajudei
          mais de 500 alunos e alunas de diversas cidades e países. Na minha
          consultoria online você terá um acompanhamento totalmente
          individualizado, onde o meu objetivo é te ajudar a alcançar os
          resultados que você deseja, onde irei avaliar, saber suas preferências
          para que assim desenvolva um treino perfeito para você.
        </p>
      </article>
    </About>
  );
};

export default SobreMim;
