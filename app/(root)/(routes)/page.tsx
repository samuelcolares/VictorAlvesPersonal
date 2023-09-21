import VideosPlusFeedbacks from "@/components/sections-wrapper";
import LandingSection from "@/components/sections/section01-landing";
import SobreMim from "@/components/sections/section02-sobremim";
import Servicos from "@/components/sections/section03-services";
import Planos from "@/components/sections/section06-planos";
import { NavbarMobile } from "@/components/ui/navbar";

import React from "react";

const HomePage = () => {
  return (
    <main>

      <LandingSection />
      <SobreMim />
      {/* <div className="h-[100vh] scroll bg-dark" id="sobremim"></div> */}
      <div className="h-[100vh] scroll bg-white" id="consultoria"></div>
      <div className="h-[100vh] scroll bg-dark" id="videos"></div>
      <div className="h-[100vh] scroll bg-dark" id="feedbacks"></div>
      <div className="h-[100vh] scroll bg-white" id="planos"></div>
      {/* 
      <Servicos />
      <VideosPlusFeedbacks />
      <Planos/> */}
    </main>
  );
};

export default HomePage;

/**
|--------------------------------------------------


primary100 :"#DFD8FE",
primary200 :"#C8BFFA",
primary300 :"#B1A8F3",
primary400 :"#9991E7",
primary500 :"#827BD7",
primary600 :"#6C67C2",
primary700 :"#5754A8",
primary800 :"#45438A",
primary900 :"#34326A",
primary950 :"#3E4095",
primaryBlue01 :"#3E4095",


|--------------------------------------------------
*/
