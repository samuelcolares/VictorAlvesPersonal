"use client";
import React from "react";
import Heading from "@/components/ui/heading";
import PlanosCards from "@/components/ui/planos-card";

const Planos = () => {
  return (
    <section
      className="scroll bg-white py-2 px-[5rem] flex flex-col"
      id="planos"
    >
      <div className="flex flex-col items-center justify-center gap-0.75 mb-2">
        <Heading
          titleBold="escolhaseu"
          title="plano"
          color="text-dark"
          className="text-center"
        />
        <p className="text-1.25 font-medium leading-button tracking-wide">
          Para mais informações referente ao plano, entre em contato comigo
          clicando no botão!
        </p>
      </div>
      <PlanosCards />
    </section>
  );
};

export default Planos;
