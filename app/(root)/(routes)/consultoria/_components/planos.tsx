"use client";
import { cn } from "@/lib/util";
import { CheckCircle } from "lucide-react";
import React from "react";

type PlanosProps = {
  plano: string;
  preço: string;
  classname?: string;
};

const Planos: React.FC<PlanosProps> = ({ plano, preço, classname }) => {
  return (
    <div
      className={cn(
        "lg:w-[23rem] w-full px-2 lg:py-2.5 py-1 relative flex flex-col lg:gap-2 bg-white shadow-planosConsultoria rounded-xl overflow-hidden",
        classname
      )}
    >
      <h3 className="text-1.5 lg:text-2 font-semibold tracking-wider leading-8 lg:leading-10 uppercase">
        Plano {plano}
      </h3>
      <div className="flex items-center gap-[0.75rem] mb-1 lg:mb-0">
        <p className="text-1.5 lg:text-2.75 font-semibold leading-[3.25rem] tracking-wider">
          {plano === "prata" && "R$ 149,90"}
          {plano === "ouro" && "R$ 397,90"}
          {plano === "diamante" && "R$ 697,90"}
        </p>
        <span className="lg:text-1 text-0.75">
          {plano === "prata" && "mensal"}
          {plano === "ouro" && "trimestral"}
          {plano === "diamante" && "semestral"}
        </span>
      </div>
      <div className="flex items-center gap-0.5 mb-0.75 lg:mb-0">
        <CheckCircle className="w-1.5 h-1.5 text-primary500" />
        <p className="text-1.25">
          {plano === "prata" && "Um protocolo de treinamento"}
          {plano === "ouro" && "Três protocolos de treinamento"}
          {plano === "diamante" && "Seis protocolo de treinamento"}
        </p>
      </div>
      <button className="h-[2.7rem] px-[1.35rem] bg-primary700 w-fit mx-auto rounded-[0.225rem] lg:hover:bg-primary600 transition-all text-white uppercase font-bold tracking-wide leading-7">
        comprar esse
      </button>
      {plano === "prata" && (
        <div className="h-[1.5rem] w-full bg-prata absolute top-0 left-[30%] z-10 rotate-45" />
      )}
      {plano === "ouro" && (
        <div className="h-[1.5rem] w-full bg-ouro absolute top-0 left-[30%] z-10 rotate-45" />
      )}
      {plano === "diamante" && (
        <div className="h-[1.5rem] w-full bg-diamante absolute top-0 left-[30%] z-10 rotate-45" />
      )}
    </div>
  );
};

export default Planos;
