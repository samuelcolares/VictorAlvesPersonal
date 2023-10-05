"use client";
import React from "react";
import Heading from "@/components/ui/heading";
import { PlanosCards, PlanosCardsMobile } from "@/components/ui/planos-card";

const Planos = () => {
  return (
    <section
      className="scroll bg-white lg:py-2 lg:px-[5rem] px-0 py-2 flex flex-col"
      id="planos"
    >
      <div className="flex flex-col items-center justify-center gap-0.75 mb-1">
        <h2 className="uppercase w-[15.6875rem] text-2.5 font-bold tracking-wider leading-[3.25rem] text-center border-b-4 border-primary400">
          planos
        </h2>
        <p className="hidden lg:block text-1.25 leading-button tracking-wide w-[60rem] text-center">
          Além de planilhas de musculação prontas, com semanas periodizadas e
          treinos para você que está começando, os planos de consultoria online
          e personal training ajudam você a conquistar a saúde e físico que
          deseja.
        </p>
      </div>
      <PlanosCards />
      <PlanosCardsMobile />
    </section>
  );
};

export default Planos;
