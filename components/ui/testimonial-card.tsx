"use client";
import { Quote } from "lucide-react";
import React, { useEffect, useState } from "react";

type CardProps = {
  image: React.ReactNode;
  instagram: string;
  depoimento: string;
  mes: string;
  ano: number;
};

const TestimonialCard: React.FC<CardProps> = ({
  image,
  instagram,
  depoimento,
  mes,
  ano,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted)
    return (
      <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-transparent flex flex-col gap-0.75 justify-between cursor-default" />
    );

  return (
    <div className="w-[55rem] p-1.5 rounded h-[16.9375rem] bg-white flex flex-col gap-0.75 justify-between cursor-default">
      <header className="flex items-center gap-0.75">
        <div className="rounded-full w-3.75 h-3.75 border-[.2rem] border-primary950 overflow-hidden">
          {image}
        </div>
        <p className="text-1.5 font-bold leading-button tracking-wide">
          <span className="text-primary950 text-2 mr-[.125rem]">@</span>
          {instagram}
        </p>
      </header>
      <div className="flex">
        <Quote className="rotate-180 text-primary950 h-3 w-3" />
        <p className="text-1.5 text-dark font-medium leading-[1.5rem] tracking-wide px-1 py-1">
          {depoimento}
        </p>
        <Quote className="self-end text-primary950 h-3 w-3" />
      </div>
      <footer className="text-1.25">
        Faz parte do{" "}
        <span className="font-bold">
          <span className="text-primary950">#VA</span>TEAM
        </span>{" "}
        desde {mes} de {ano}.
      </footer>
    </div>
  );
};

export default TestimonialCard;
