"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { NavbarDesktop, NavbarMobile } from "../ui/navbar";

const Landing = styled.header`
  font-size: 1em;
  height: 100vh;
  background: url("./images/section_home.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  box-shadow: 0px -6.25em 6.25em 0em #1a1b1a inset;
  overflow: hidden;

  div.landing-button-wrapper {
    &:hover .effect {
      top: 0;
      left: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    /* height: 800px; */
    background: url("./images/section_home_mobile.png") no-repeat center;
    background-color: #1a1b1abf;
    background-blend-mode: overlay;
    background-size: cover;
    justify-content: space-between;

    .landing_mobile {
      margin-bottom: 1rem;
      align-self: flex-end;
      gap: 1rem;
      padding: 0 1rem;
      h1 {
        width: 10.892rem;
        height: 3rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.5rem;
        text-shadow: -4px 4px 40px rgba(18, 18, 18, 0.841);
      }
      .landing-button-wrapper {
        width: 18.375rem;
        div {
          padding: 0.5rem 0.75rem;
          flex-direction: column;
          gap: 0.5rem;
        }
        a {
          height: 2.5rem;
          padding: 0rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5rem;
        }
        h2 {
          font-size: 1rem;
        }
      }
      .effect {
        top: 2.5rem;
      }
    }
  }
`;

const LandingSection = () => {
  return (
    <Landing className="scroll bg-dark relative z-[100] lg:static flex lg:flex-col lg:py-1 lg:px-[5rem] pt-1 pb-2">
      {/* <NavbarMobile /> */}
      <NavbarDesktop />
      <section className="landing_mobile flex lg:flex-1 flex-col justify-center items-start gap-2 w-[50rem] animate-ping-test">
        <h1
          aria-label="Logo Victor Alves"
          className="h-[8.5rem] w-[30.86rem]"
        >
          <Image
            className="w-full h-full object-cover"
            src={"/images/VALOGO.png"}
            width={1681}
            height={483}
            alt="Victor Alves Logo"
            draggable={false}
          />
        </h1>
        <p className="text-white text-xl lg:text-1.25 lg:font-semibold leading-button tracking-button drop-shadow-landing lg:w-[80%]">
          Transforme seu corpo e alcance seus objetivos com uma consultoria
          online ou presencial. Seja qual for o seu nível de condicionamento
          físico ou sua rotina agitada, estou aqui para te ajudar a conquistar o
          melhor físico da sua vida!
        </p>
        <div className="landing-button-wrapper relative w-[36.4375rem]">
          <div className="landing-card bg-white py-1 px-1.5 flex items-center justify-center gap-0.75 border rounded relative z-[2] w-full">
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
          <div className="effect rounded absolute w-full lg:h-[5rem] h-[5.375rem] shadow-landing border-[.25rem] border-primary500 z-[0] lg:top-1.75 lg:left-1.25 left-[1.38rem] top-[1.78rem] transition-all" />
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
