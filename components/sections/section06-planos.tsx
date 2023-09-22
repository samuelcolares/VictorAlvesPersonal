"use client";
import React from "react";
import Heading from "@/components/ui/heading";
import {PlanosCards, PlanosCardsMobile} from "@/components/ui/planos-card";

const Planos = () => {
  return (
    <section
      className="scroll bg-white lg:py-2 lg:px-[5rem] p-1 pb-2 flex flex-col"
      id="planos"
    >
      <div className="flex flex-col items-center justify-center gap-0.75 mb-2">
        <Heading
          titleBold="escolhaseu"
          title="plano"
          color="text-dark"
          className="lg:text-center lg:px-2 lg:self-auto self-start"
        />
        <p className="text-1.25 font-medium leading-button tracking-wide">
          Para mais informações referente ao plano, entre em contato comigo
          clicando no botão!
        </p>
      </div>
      <PlanosCards />
      <PlanosCardsMobile />
    </section>
  );
};

export default Planos;
