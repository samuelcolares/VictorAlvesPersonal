"use client";
import React from "react";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import {
  PenSquare,
  ClipboardList,
  Dumbbell,
  Camera,
  Rocket,
} from "lucide-react";
import Card from "../ui/card";

const cartoes = [
  {
    icon: <PenSquare className="w-2.5 h-2.5" />,
    title: "ANAMNESE",
    desc: "Será enviada uma ficha de anamnese para poder entender sua rotina, hábitos, particularidades e preferências e objetivos. ",
  },
  {
    icon: <ClipboardList className="w-2.5 h-2.5" />,
    title: "Planejamento",
    desc: "Após a anamnese, irei iniciar a montagem do planejamento de treino, com base em todas as suas individualidades e informações.",
  },
  {
    icon: <Dumbbell className="w-2.5 h-2.5" />,
    title: "Implementar",
    desc: "Irei lhe encaminhar o protocolo de treino e você irá poder conversar comigo pelo WhatsApp para tirar todas as dúvidas.",
  },
  {
    icon: <Camera className="w-2.5 h-2.5" />,
    title: "Feedback",
    desc: "Após um período de protocolo, você poderá enviar fotos para avaliação física, e analisaremos juntos os resultados.",
  },
  {
    icon: <Rocket className="w-2.5 h-2.5" />,
    title: "EVOLUÇÃO CONTÍNUA",
    desc: "Texto",
  },
];

const Servicos = () => {
  const cardmaps = cartoes.map((item, idx) => (
    <Card
      key={idx}
      title={item.title}
      desc={item.desc}
      icon={item.icon}
      idx={idx + 1}
    />
  ));
  return (
    <section className="bg-white py-2 px-[5em] flex flex-col items-center gap-1.25">
      <div className="flex w-full self-start items-center justify-between">
        <div className="flex flex-col gap-0.75">
          <Heading titleBold="consultoria" title="online" color="dark" />
          <p className="text-1.25 font-medium leading-button tracking-wide">
            Como funciona a minha consultoria? Entenda um pouco as etapas e
            venha fazer parte do time.
          </p>
          <h3 className="text-1.25 font-medium leading-button tracking-wide">
            A partir de{" "}
            <span className="font-bold text-primary950">R$ 149,90!</span>
          </h3>
        </div>
        <Button text="Saiba Mais" />
      </div>
      <div className="flex">{cardmaps}</div>
      <div className="flex w-full self-start items-center justify-between">
        <div className="flex flex-col gap-0.75">
          <Heading titleBold="Planilhas" title="detreino" color="dark" />
          <p className="text-1.25 font-medium leading-button tracking-wide">
            Planilhas de musculação prontas, com semanas periodizadas e treinos
            para você que está começando!
          </p>
          <h3 className="text-1.25 font-medium leading-button tracking-wide">
            A partir de{" "}
            <span className="font-bold text-primary950">R$ 49,90!</span>
          </h3>
        <Button text="compre aqui" classname="w-fit" />
        </div>
      </div>
    </section>
  );
};

export default Servicos;
