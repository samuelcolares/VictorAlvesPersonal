"use client";
import React from "react";
import styled from "styled-components";
import GifCard from "../ui/gif-card";
import Heading from "../ui/heading";

const CardsWrapper = styled.div``;

const videosGif = [
  "/images/videos/ezgif.com-crop.gif",
  "/images/videos/ezgif.com-crop-2.gif",
  "/images/videos/ezgif.com-crop-7.gif",
  "/images/videos/ezgif.com-crop-4.gif",
  "/images/videos/ezgif.com-crop-5.gif",
  "/images/videos/ezgif.com-crop-6.gif",
];

const mobileGif = [
  "/images/videos/ezgif.com-crop.gif",
  "/images/videos/ezgif.com-crop-2.gif",
  "/images/videos/ezgif.com-crop-7.gif",
];

const VideosExplicativos = () => {
  return (
    <section className="scroll lg:py-2 lg:px-[5rem] px-1 py-2 flex justify-between lg:items-center flex-col lg:flex-row lg:gap-0 gap-1.5" id="videos">
      <article className="flex flex-col gap-0.5 lg:gap-2 shrink-0 lg:w-[46.9375rem]">
        <Heading titleBold="vídeos" title="explicativos" color="text-white" />
        <p className="lg:text-1.5 lg:leading-button tracking-wide text-white w-[95%]">
          Juntamente á planilha de treino, a consultoria online conta com vídeos
          dos exercícios, variações, alongamentos e mobilidade para te auxiliar
          no aprendizado. Tudo adaptado e feito para você, com base nas suas
          especificações e objetivo.Além de vídeos, o meu WhatsApp estará aberto
          24hrs para eventuais dúvidas.
        </p>
      </article>
      <CardsWrapper className="hidden lg:grid grid-cols-gifcard w-fit gap-x-2 gap-y-1">
        {videosGif.map((item, idx)=> <GifCard src={item} key={idx}/>)}
      </CardsWrapper>
      <CardsWrapper className="lg:hidden flex gap-[0.25rem] justify-center">
        {mobileGif.map((item, idx)=> <GifCard src={item} key={idx}/>)}
      </CardsWrapper>
    </section>
  );
};

export default VideosExplicativos;
