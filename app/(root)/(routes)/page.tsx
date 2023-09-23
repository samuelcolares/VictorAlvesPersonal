"use client";
import VideosPlusFeedbacks from "@/components/sections-wrapper";
import LandingSection from "@/components/sections/section01-landing";
import SobreMim from "@/components/sections/section02-sobremim";
import Servicos from "@/components/sections/section03-services";
import Planos from "@/components/sections/section06-planos";
import { NavbarMobile } from "@/components/ui/navbar";
import Image from "next/image";

import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
    }, 1500);
  }, []);
  if (!isMounted)
    return (
      <main className="bg-black h-screen overflow-hidden flex items-center justify-center flex-col gap-2">
        <Image
          src={"/images/loading.png"}
          alt="loading logo"
          className="animate-pulse object-cover w-[300px] h-auto"
          width={1682}
          height={463}
          priority
        />
        <svg
          className="animate-spin h-5 w-5 text-primary950"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </main>
    );
  return (
    <main className="bg-dark">
      <LandingSection />
      <SobreMim />
      <Servicos />
      <VideosPlusFeedbacks />
      <Planos />
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
