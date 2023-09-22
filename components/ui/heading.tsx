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
        "text-1.25 lg:text-2.5 tracking-wide uppercase w-fit lg:pr-2.25 pr-1 border-b-[.25rem] border-primary700 lg:leading-[2.5rem] leading-5",
        `${className} `
      )}
    >
      <span className={cn("font-bold", color)}>{titleBold}</span>
      <span className={color}>{title}</span>
    </h2>
  );
};

export default Heading;
