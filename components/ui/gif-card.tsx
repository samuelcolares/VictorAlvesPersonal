"use state";
import { cn } from "@/lib/util";
import { Loader2, LoaderIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GifCard = ({ src }: { src?: string }) => {
  // const [isMounted, setIsMounted] = useState<boolean>(false);
  // useEffect(() => setIsMounted(true), []);
  // if (!isMounted)
  //   return (
  //     <div className="lg:w-[16.875rem] lg:h-[16.875rem] w-[8.6663rem] h-[8.6663rem] bg-transparent shadow-gifcard border-[.25rem] border-gifcard rounded-xl overflow-hidden flex items-center justify-center">
  //       <Loader2 className="w-2 h-2 animate-spin" color="#FFF"/>
  //     </div>
  //   );

  return (
    <>
      <div className="w-[7.1663rem] h-[7.1663rem] lg:w-[16.875rem] lg:h-[16.875rem] flex-1 shadow-gifcard border-[0.2rem] lg:border-[.25rem] border-gifcard rounded-xl overflow-hidden bg-gif1 bg-cover"/>
      <div className="w-[7.1663rem] h-[7.1663rem] lg:w-[16.875rem] lg:h-[16.875rem] flex-1 shadow-gifcard border-[0.2rem] lg:border-[.25rem] border-gifcard rounded-xl overflow-hidden bg-gif2 bg-cover"/>
      <div className="w-[7.1663rem] h-[7.1663rem] lg:w-[16.875rem] lg:h-[16.875rem] flex-1 shadow-gifcard border-[0.2rem] lg:border-[.25rem] border-gifcard rounded-xl overflow-hidden bg-gif3 bg-cover"/>
      <div className="w-[7.1663rem] h-[7.1663rem] hidden lg:block lg:w-[16.875rem] lg:h-[16.875rem] flex-1 shadow-gifcard border-[0.2rem] lg:border-[.25rem] border-gifcard rounded-xl overflow-hidden bg-gif4 bg-cover"/>
      <div className="w-[7.1663rem] h-[7.1663rem] hidden lg:block lg:w-[16.875rem] lg:h-[16.875rem] flex-1 shadow-gifcard border-[0.2rem] lg:border-[.25rem] border-gifcard rounded-xl overflow-hidden bg-gif5 bg-cover"/>
      <div className="w-[7.1663rem] h-[7.1663rem] hidden lg:block lg:w-[16.875rem] lg:h-[16.875rem] flex-1 shadow-gifcard border-[0.2rem] lg:border-[.25rem] border-gifcard rounded-xl overflow-hidden bg-gif6 bg-cover"/>
    </>
  );
};

export default GifCard;
