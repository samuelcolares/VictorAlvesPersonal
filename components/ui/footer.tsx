"use client";
import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/util";

const Footer = () => {
  const start = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const pathname = usePathname();
  const footerHome =
    "flex flex-col lg:flex-row lg:space-between py-2.5 items-center justify-evenly bg-white gap-2";
  return (
    <footer
      className={cn(
        "flex flex-col lg:flex-row lg:space-between py-2.5 items-center justify-evenly bg-white gap-2",
        pathname === `/consultoria` && "bg-dark"
      )}
    >
      <Image
        src={pathname === '/' ? "/images/footer.png" : "/images/Mfooter.png"}
        alt="footer"
        width={131}
        height={37}
        className="order-last lg:order-none"
      />
      <span className={cn("text-primary500", pathname === `/consultoria` && "text-primary300")}>
        2023{" "}
        <Link href={"https://www.instagram.com/sevenstudio.dev/"}>
          Seven Studio{" "}
        </Link>{" "}
        - Todos os direitos reservados
      </span>
      <div
        className={cn("flex gap-0.5 text-dark items-center cursor-pointer order-first lg:order-none", pathname === `/consultoria` && "text-white")}
        onClick={start}
      >
        <span>Voltar ao topo</span>
        <ArrowUp className={cn("w-1 h-1 animate-bounce text-dark", pathname === `/consultoria` && "text-white")} />
      </div>
    </footer>
  );
};

export default Footer;
