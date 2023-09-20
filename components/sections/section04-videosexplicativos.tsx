"use client";
import React from "react";
import styled from "styled-components";
import GifCard from "../ui/gif-card";
import Heading from "../ui/heading";

const CardsWrapper = styled.div``;

const VideosExplicativos = () => {
  return (
    <section className="py-2 px-[5rem] flex justify-between items-center">
      <article className="flex flex-col gap-2 shrink-0 w-[46.9375rem]">
        <Heading titleBold="vídeos" title="explicativos" color="text-white" />
        <p className="text-1.5 leading-button tracking-wide text-white">
          Juntamente á planilha de treino, a consultoria online conta com vídeos
          dos exercícios, variações, alongamentos e mobilidade para te auxiliar
          no aprendizado. Tudo adaptado e feito para você, com base nas suas
          especificações e objetivo.Além de vídeos, o meu WhatsApp estará aberto
          24hrs para eventuais dúvidas.
        </p>
      </article>
      <CardsWrapper className="grid grid-cols-gifcard w-fit gap-x-2 gap-y-1">
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
        <GifCard />
      </CardsWrapper>
    </section>
  );
};

export default VideosExplicativos;
