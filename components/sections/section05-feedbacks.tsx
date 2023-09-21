"use client";
import React from "react";
import Heading from "../ui/heading";

import styled from "styled-components";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import GifCard from "../ui/gif-card";
import Button from "../ui/button";
import VerticalCarroussel from "../ui/vertical-carroussel";
import TestimonialBox from "../ui/testimonial-box";

const Feedbacks = () => {
  return (
    <section className="scroll py-2 px-[5rem]" id="feedbacks">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col gap-0.75">
          <Heading
            className="w-[18.75rem]"
            color="text-white"
            titleBold="FEED"
            title="backs"
          />
          <p className="text-1.25 text-white font-medium leading-button tracking-wide">
            Confira algumas evoluções e comentários de quem faz parte do{" "}
            <span className="border-b border-primary500 font-bold">
              <span className="text-primary400">#VA</span>TEAM!
            </span>{" "}
            Venha também fazer parte dessas evoluções.
          </p>
        </div>
        <Button text="Ver mais resultados" />
      </div>
      <div className="flex items-center gap-3">
        <VerticalCarroussel />
        <div className="flex flex-col gap-2">
          <TestimonialBox />
          <TestimonialBox />
          {/* <TestimonialBox /> */}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
