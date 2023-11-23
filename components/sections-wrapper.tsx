"use client";
import React from "react";
import styled from "styled-components";
import VideosExplicativos from "@/app/(root)/(routes)/_components/sections/section04-videosexplicativos";
import Feedbacks from "@/app/(root)/(routes)/_components/sections/section05-feedbacks";
import ConsultoriaPlanos from "@/app/(root)/(routes)/consultoria/_components/section02-planos";

const Wrapper = styled.div`
  background-image: url("./images/logo-bg.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width:1024px) {
    background-position:left;
  }
`;

const VideosPlusFeedbacks = () => {
  return (
    <Wrapper>
      <ConsultoriaPlanos />
      <VideosExplicativos />
      <Feedbacks/>
    </Wrapper>
  );
};

export default VideosPlusFeedbacks;
