"use client"

import InfoCard from "@/app/components/ui/InfoCard";
import Image from "next/image";
import { useRef } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  const nextSectionRef = useRef<null | HTMLDivElement>(null);

  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-y-scroll flex flex-col bg-parchment">
      <div className="min-w-screen min-h-screen overflow-y-scroll flex flex-col justify-end items-center">
        <InfoCard/>
        <div>
          <button className="mb-2" onClick={handleScroll}>Next Section</button>
          <MdOutlineKeyboardDoubleArrowDown size={24}/>
        </div>
      </div>
      <div className="min-w-screen min-h-screen flex flex-col justify-center items-center">
        <button className="" onClick={handleScroll}>Next Section</button>
        <div className="relative w-[60vw] h-[70vh] max-w-[650px] drop-shadow-2xl/40" ref={nextSectionRef}>
          <Image src="/Official-Resume.png" alt="Resume" fill/>
        </div>
      </div>
    </div>
  );
}
