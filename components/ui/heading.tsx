"use client"
import { cn } from "@/lib/util";
import React from "react";

type HeadingProps = {
  titleBold: string;
  title: string;
  className?: string;
  color: string;
};

const Heading: React.FC<HeadingProps> = ({ title, titleBold, className, color }) => {
  return (
    <h2
      className={cn(
        "text-2.5 tracking-tight uppercase w-[26.875rem] border-b-[.25rem] border-primary700 leading-[3.25rem]",
        `${className} `
      )}
    >
      <span className={cn("font-bold", color)}>{titleBold}</span>
      <span className={color}>{title}</span>
    </h2>
  );
};

export default Heading;
