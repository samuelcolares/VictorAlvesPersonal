"use client";
import React from "react";
import styled from "styled-components";
import VideosExplicativos from "@/components/sections/section04-videosexplicativos";
import Feedbacks from "@/components/sections/section05-feedbacks";

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
      <VideosExplicativos />
      <Feedbacks/>
    </Wrapper>
  );
};

export default VideosPlusFeedbacks;
