import Servicos from "./_components/section01-explantion";
import React from "react";
import ConsultoriaPlanos from "./_components/section02-planos";
import ConsultoriaNav from "./_components/consultoria-nav";

const ConsultoriaPage = () => {
  return (
    <main className="lg:pt-2 bg-white">
      <ConsultoriaNav />
      <Servicos />
      <ConsultoriaPlanos />
    </main>
  );
};

export default ConsultoriaPage;
