"use state";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GifCard = ({ src }: { src: string }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted)
    return (
      <div className="lg:w-[16.875rem] lg:h-[16.875rem] w-[8.6663rem] h-[8.6663rem] bg-transparent shadow-gifcard border-[.25rem] border-gifcard rounded-xl overflow-hidden" />
    );

  return (
    <div className="lg:w-[16.875rem] lg:h-[16.875rem] flex-1 bg-white shadow-gifcard border-[0.2rem] lg:border-[.25rem] border-gifcard rounded-xl overflow-hidden">
      <Image
        src={src}
        alt=""
        width={420}
        height={420}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default GifCard;
