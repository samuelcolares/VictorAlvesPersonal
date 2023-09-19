"use client";
import React from "react";
import { cn } from "@/lib/util";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ text, classname }: { text: string; classname?: string }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center px-6 bg-white h-12 border border-primary950 shadow-button rounded hover:shadow-none lg:hover:bg-primary950 transition text-primary950 lg:hover:text-white",
        classname
      )}
    >
      <span className=" text-base font-bold uppercase leading-button tracking-button">
        {text}
      </span>
    </button>
  );
};

export default Button;
