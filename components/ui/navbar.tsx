"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import MenuIcon from "./menu-icon";
import { cn } from "@/lib/util";
import { useParams, usePathname, useRouter } from "next/navigation";

const homelinks = [
  { link: "Consultoria", href: "/consultoria" },
  { link: "FEEDBACKS", href: "#feedbacks" },
  { link: "Planos", href: "#planos" },
  // { link: "CONTATO", href: "/contato" },
];

const consultorialinks = [{ link: "Home", href: "/" }];

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const href = e.currentTarget.href;
  console.log(href)
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
          onClick={handleScroll}
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
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [open, setOpen] = useState<boolean>(false);
  const openMenu = () => (open ? setOpen(false) : setOpen(true));
  // useEffect(() => {
  //   const button = buttonRef.current;
  //   const landing = document.querySelector("header")!;
  //   const sobremim = document.getElementById("sobremim")!;
  //   const consultoria = document.getElementById("consultoria")!;
  //   const videos = document.getElementById("videos")!;
  //   const feedbacks = document.getElementById("feedbacks")!;
  //   // const planos = document.getElementById("planos")!;

  //   const handleScroll = () => {
  //     const buttonPosition =
  //       button!.getBoundingClientRect().top + window.scrollY;
  //     if (window.scrollY > landing.clientHeight + sobremim.clientHeight) {
  //       setBackgroundColor("#1A1B1A");
  //     } else {
  //       setBackgroundColor("#F5f5f5");
  //     }

  //     if (
  //       window.scrollY >
  //         landing.clientHeight +
  //           sobremim.clientHeight +
  //           consultoria.clientHeight &&
  //       window.scrollY <
  //         landing.clientHeight +
  //           sobremim.clientHeight +
  //           consultoria.clientHeight +
  //           videos.clientHeight +
  //           feedbacks.clientHeight
  //     ) {
  //       setBackgroundColor("#F5f5f5");
  //     }

  //     if (
  //       window.scrollY >
  //       landing.clientHeight +
  //         sobremim.clientHeight +
  //         consultoria.clientHeight +
  //         videos.clientHeight +
  //         feedbacks.clientHeight
  //     ) {
  //       setBackgroundColor("#1A1B1A");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [backgroundColor]);
  // return (
  //   <nav className={cn("px-1 absolute z-[100] lg:hidden", open && "fixed")}>
  //     <button
  //       className="menuicon relative z-[500]"
  //       ref={buttonRef}
  //       onClick={openMenu}
  //     >
  //       <MenuIcon fill={backgroundColor} open={open} />
  //     </button>
  //     {open && (
  //       <div className="fixed inset-0 bg-stone-950/60 z-[1] flex flex-col items-center justify-center">
  //         <Link
  //           href={"https://www.instagram.com/victoralvespersonal_"}
  //           target="_blank"
  //           className="text-white animate-ping-test fixed top-[1.5rem] right-1"
  //         >
  //           <Instagram className="w-[2rem] h-[2rem]" />
  //         </Link>
  //         {links.map((item, idx) => (
  //           <Link
  //             href={item.href}
  //             className="text-white uppercase font-semibold leading-8 px-1 py-0.625 flex items-center justify-center text-1.5 lg:hover:text-primary500 transition animate-ping-test"
  //             key={idx}
  //             onClick={handleScroll}
  //           >
  //             {item.link}
  //           </Link>
  //         ))}
  //       </div>
  //     )}
  //   </nav>
  // );
};
