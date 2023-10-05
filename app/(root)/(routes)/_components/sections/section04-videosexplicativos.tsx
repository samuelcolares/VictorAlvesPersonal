"use client";
import React from "react";
import styled from "styled-components";
import GifCard from "../../../../../components/ui/gif-card";
import Heading from "../../../../../components/ui/heading";

const CardsWrapper = styled.div`
  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, minmax(0, auto));

    & > div:first-child, & > div:last-child {
      display: none;
    }
  }
`;

const videosGif = ["gif1", "gif2", "gif3", "gif4", "gif5", "gif6"];

const mobileGif = [
  "/images/videos/ezgif.com-crop.gif",
  "/images/videos/ezgif.com-crop-2.gif",
  "/images/videos/ezgif.com-crop-7.gif",
];

const VideosExplicativos = () => {
  return (
    <section
      className="scroll lg:py-2 lg:px-[5rem] px-1 py-2 flex justify-between lg:items-center flex-col lg:flex-row lg:gap-0 gap-1.5"
      id="videos"
    >
      <article className="flex flex-col gap-0.5 lg:gap-2 shrink-0 lg:w-[46.9375rem]">
        <Heading titleBold="vídeos" title="explicativos" color="text-white" />
        <p className="lg:text-1.5 lg:leading-button tracking-wide text-white w-[95%]">
          Juntamente à planilha de treino, a consultoria online conta com vídeos
          dos exercícios, variações, alongamentos e mobilidade para te auxiliar
          no aprendizado. Tudo adaptado e feito sob medida para você, com base nas suas
          especificações e objetivo. E para qualquer dúvida referente à algum exercício, meu Whatsapp está disponível para lhe auxiliar.
        </p>
      </article>
      <CardsWrapper className="hidden lg:grid grid-cols-gifcard w-fit gap-x-2 gap-y-1">
        <GifCard/>

      </CardsWrapper>
      <div className="lg:hidden flex gap-[0.25rem] justify-center">
        <GifCard />
      </div>
    </section>
  );
};

export default VideosExplicativos;
