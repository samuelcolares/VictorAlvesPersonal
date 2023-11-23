"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import MenuIcon from "./menu-icon";
import { cn } from "@/lib/util";
import { useParams, usePathname, useRouter } from "next/navigation";

const homelinks = [
  { link: "Consultoria", href: "#consultoria" },
  // { link: "Consultoria", href: "/consultoria" },
  { link: "FEEDBACKS", href: "#feedbacks" },
  { link: "Planos", href: "#planos" },
  // { link: "CONTATO", href: "/contato" },
];

const consultorialinks = [{ link: "Home", href: "/" }];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const href = e.currentTarget.href;
  console.log(href);
  if (!href.includes("/consultoria")) {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export const NavbarDesktop = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);

  const realLinks = pathname === "/" ? homelinks : consultorialinks;

  return (
    <nav className="hidden lg:flex items-center gap-[3.75rem] grow-1">
      {realLinks.map((item, idx) => (
        <Link
          href={item.href}
          className="text-white uppercase font-semibold leading-8 px-1 py-0.625 flex items-center justify-center text-1.5 lg:hover:text-primary500 transition"
          key={idx}
          // onClick={handleScroll}
        >
          {item.link}
        </Link>
      ))}
      <Link
        href={"https://www.instagram.com/victoralvespersonal_"}
        target="_blank"
        className="ml-auto text-white lg:hover:text-primary500 transition"
      >
        <Instagram className="w-[2rem] h-[2rem]" />
      </Link>
    </nav>
  );
};

export const NavbarMobile = () => {
  return (
    <nav className=" lg:hidden absolute flex justify-end w-full items-center">
      <Link
        href={"https://www.instagram.com/victoralvespersonal_"}
        target="_blank"
        className="text-white transition p-1"
      >
        <Instagram className="w-[2rem] h-[2rem]" />
      </Link>
      {/* <Link
        href={"/consultoria"}
        className="text-white uppercase font-semibold leading-8 px-0.5 py-0.625 flex items-center justify-center text-1.25 lg:hover:text-primary500 transition"
      >
        Consultoria
      </Link> */}
    </nav>
  );
};
