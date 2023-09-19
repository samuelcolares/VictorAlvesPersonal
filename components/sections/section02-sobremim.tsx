import Image from "next/image";
import React from "react";
import Line from "@/components/ui/line";
import Heading from "@/components/ui/heading";

const SobreMim = () => {
  return (
    <section className="px-[5rem] py-4 bg-dark flex  items-center">
      <div className="h-[25rem] w-[52.125rem] relative">
        <Line classname="absolute top-[-1rem] left-[-1rem]" />
        <Image
          src={"/images/sobremim.png"}
          alt="Victor fazendo remada unilateral"
          width={821}
          height={400}
          className="w-full h-full object-cover rounded-lg relative z-10"
        />
        <div className="bg-primary700 w-[29.4375rem] h-[13.9375rem] rounded absolute bottom-[-1rem] right-[-1rem]" />
      </div>
      <article className="grow-1 w-[58.68rem] flex flex-col justify-center gap-1 px-2.5 py-[0.1875rem]">
        {/* <h2 className="uppercase text-2.5 leading-[3.25rem] border-b-primary700 border-b-4 w-[15.125rem] tracking-[-0.01rem] text-white">
          <span className="font-bold">sobre</span>mim
        </h2> */}
        <Heading titleBold="sobre" title="mim" className="w-[15.125rem]" color="text-white"/>
        <p className="text-1.25 text-white font-medium leading-[1.5rem] tracking-[0.025rem]">
          Me chamo Victor Alves, sou praticante de musculação a 12 anos,
          Profissional de Educação Física, Treinador presencial e online.
          Durante minha carreira, já atendi mais de 400 alunos e alunas, de
          diferentes cidades e países. O meu objetivo é ajudar você a atingir
          suas metas, e por isso, através de uma abordagem individualizada e
          adaptada às suas necessidades, vou te ajudar a alcançar os resultados
          que você deseja. Levarei em consideração seus hábitos de vida,
          preferências e metas específicas para desenvolver um plano de
          treinamento que se encaixe perfeitamente em sua rotina.
        </p>
      </article>
    </section>
  );
};

export default SobreMim;
