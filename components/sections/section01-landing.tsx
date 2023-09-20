"use client";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Landing = styled.header`
  font-size: 1em;
  height: 100vh;
  background: url("./images/section_home.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: 0px -6.25em 6.25em 0em #1a1b1a inset;
  padding: 1em 5em;
  /* font-size: 1em;
  nav,
  a,
  section,
  p {
    font-size: 16px;
  } */
  div.landing-button-wrapper {
    &:hover .effect {
      top: 0;
      left: 0;
    }
  }
`;

const links = [
  { link: "PLANOS", href: "/planos" },
  { link: "FEEDBACKS", href: "/feedbacks" },
  { link: "PLANILHAS PRONTAS", href: "/planilhas" },
  { link: "CONTATO", href: "/contato" },
];

const LandingSection = () => {
  return (
    <Landing className="flex flex-col">
      <nav className="flex items-center gap-[3.75rem] grow-1">
        {links.map((item, idx) => (
          <Link
            href={item.href}
            className="text-white font-semibold leading-8 px-1 py-0.625 flex items-center justify-center text-1.5 lg:hover:text-primary500 transition"
            key={idx}
          >
            {item.link}
          </Link>
        ))}
        <Link href={"https://www.instagram.com/victoralvespersonal_"} target="_blank" className="ml-auto text-white lg:hover:text-primary500 transition">
          <Instagram className="w-[2rem] h-[2rem]"/>
        </Link>
      </nav>
      <section className="flex flex-1 flex-col justify-center items-start gap-2 w-[50rem]">
        <h1 aria-label="Logo Victor Alves" className="h-[8.5rem] w-[30.86rem]">
          <Image
            className="w-full h-full object-cover"
            src={"/images/VALOGO.png"}
            width={1681}
            height={483}
            alt="Victor Alves Logo"
            draggable={false}
          />
        </h1>
        <p className="text-white text-xl font-semibold leading-button tracking-button drop-shadow-landing w-[80%]">
          Transforme seu corpo e alcance seus objetivos com uma consultoria
          online ou presencial. Seja qual for o seu nível de condicionamento
          físico ou sua rotina agitada, estou aqui para te ajudar a conquistar o
          melhor físico da sua vida!
        </p>
        <div className="landing-button-wrapper relative w-[36.4375rem]">
          <div className="bg-white py-1 px-1.5 flex items-center justify-center gap-0.75 border rounded relative z-10 w-full">
            <h2 className="text-1.5 font-semibold leading-8 tracking-[0.03rem] color-dark">
              Mais de 500 alunos atendidos
            </h2>
            <Link
              href={"#"}
              as={"button"}
              className="px-1.5 flex items-center justify-center h-3 font-bold leading-button tracking-button text-white bg-[#5754A8] lg:hover:scale-105 lg:hover:shadow-landing lg:hover:shadow-gray-950 transition rounded"
            >
              FAÇA PARTE DO TIME
            </Link>
          </div>
          <div className="effect rounded absolute w-full h-[5rem] shadow-landing border-[.25rem] border-primary500 top-1.75 left-1.25 transition-all" />
        </div>
      </section>
    </Landing>
  );
};

export default LandingSection;

/**
|--------------------------------------------------


{link:"PLANOS",
href: "/planos"
},
{link:"FEEDBACKS",
href: "/feedbacks"
},
{link:"PLANILHAS PRONTAS",
href: "/planilhas"
},
{link:"CONTATOS",
href: "/contatos"
},

|--------------------------------------------------
*/
