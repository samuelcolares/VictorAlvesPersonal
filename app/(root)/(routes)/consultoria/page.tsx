import Servicos from "./_components/section01-explantion";
import { NavbarDesktop } from "@/components/ui/navbar";
import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const ConsultoriaPage = () => {
  return (
    <main className="pt-2 bg-white">
      <nav className="px-[5rem] hidden lg:flex items-center gap-[3.75rem] grow-1">
        <Link
          href={"/"}
          className="text-dark uppercase font-semibold leading-8 px-1 py-0.625 flex items-center justify-center text-1.5 lg:hover:text-primary500 transition"
        >
          Home
        </Link>

        <Link
          href={"https://www.instagram.com/victoralvespersonal_"}
          target="_blank"
          className="ml-auto text-dark lg:hover:text-primary500 transition"
        >
          <Instagram className="w-[2rem] h-[2rem]" />
        </Link>
      </nav>
      <Servicos />
      <section className="lg:py-2.5 lg:px-[5em] bg-dark">

      </section>
    </main>
  );
};

export default ConsultoriaPage;
