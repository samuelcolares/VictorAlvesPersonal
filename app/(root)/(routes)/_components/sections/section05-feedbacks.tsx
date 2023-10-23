"use client";
import React from "react";
import Heading from "@/components/ui/heading";

import styled from "styled-components";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import Button from "@/components/ui/button";
import VerticalCarroussel from "@/components/ui/vertical-carroussel";
import {
  TestimonialBox,
  TestimonialBoxMobile,
} from "@/components/ui/testimonial-box";
import HorizontalCarroussel from "@/components/ui/horizontal-carroussel";
import Link from "next/link";

const Feedbacks = () => {
  return (
    <section
      className="scroll lg:block lg:py-2 lg:px-[5rem] px-1 py-2 flex flex-col gap-0.75"
      id="feedbacks"
    >
      <div className="flex items-center justify-between lg:mb-2">
        <div className="flex flex-col gap-0.75">
          <Heading color="text-white" titleBold="FEED" title="backs" />
          <p className="lg:text-1.25 text-white font-medium leading-button tracking-wide">
            Confira algumas evoluções e comentários de quem faz parte do{" "}
            <span className="border-b border-primary500 font-bold">
              <span className="text-primary400">#</span>
              <span>TEAM</span>
              <span className="text-primary400">ALVES</span>
            </span>{" "}
            <span className=" ">
              e venha também fazer parte dessas evoluções.
            </span>
          </p>
        </div>
        <Link
          href={"https://instagram.com/victoralvespersonal_"}
          target="_blank"
        >
          <Button text="Ver mais resultados" classname="hidden lg:block" />
        </Link>
      </div>
      <div className="lg:flex items-center gap-3 hidden">
        <VerticalCarroussel />
        <div className="flex flex-col gap-2">
          <TestimonialBox variant={1}/>
          <TestimonialBox variant={2}/>
          {/* <TestimonialBox /> */}
        </div>
      </div>
      <div className="w-full lg:hidden">
        <HorizontalCarroussel />
      </div>
      <div className="w-full lg:hidden">
        <TestimonialBoxMobile />
      </div>
      <Link
        href={"https://instagram.com/victoralvespersonal_"}
        target="_blank"
      >
        <Button text="Ver mais resultados" classname="lg:hidden mx-auto" />
      </Link>
    </section>
  );
};

export default Feedbacks;
