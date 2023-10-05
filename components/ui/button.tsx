"use client";
import React from "react";
import { cn } from "@/lib/util";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  text,
  classname,
  children,
}: {
  text: string;
  classname?: string;
  children?: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center px-6 bg-white h-12 border-[0.0625rem] border-primary950 shadow-button rounded hover:shadow-none lg:hover:bg-primary950 transition text-primary950 lg:hover:text-white",
        classname
      )}
    >
      <span className=" text-base font-bold uppercase leading-button tracking-button">
        {text}
      </span>
      {children}
    </button>
  );
};

export default Button;
