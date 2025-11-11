"use client"

import InfoCard from "@/app/components/ui/InfoCard";
import Image from "next/image";
import { useRef } from "react";
import { MdOutlineKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";
import ProjectSldier from "@/app/components/ui/ProjectSlider";

export default function Home() {
  const cardRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const resumeRef = useRef<null | HTMLDivElement>(null);
  
  const scrollToCard = () => {
    cardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col bg-parchment">
      {/* Card Section (First Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-end items-center" ref={cardRef}>
        <InfoCard/>
        <div className="flex flex-col justify-center items-center mb-3 text-indigodye hover:text-honolulublue" onClick={scrollToProjects}>
          <button>Projects</button>
          <MdOutlineKeyboardDoubleArrowDown size={24}/>
        </div>
      </div>

      {/* Projects Section (Second Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-between items-center" ref={projectsRef}>
        <div className="flex flex-col justify-center items-center mt-3 text-indigodye hover:text-honolulublue" onClick={scrollToCard}>
          <MdKeyboardDoubleArrowUp size={24}/>
          <button>Contact Card</button>
        </div>
        <ProjectSldier/>
        <div className="flex flex-col justify-center items-center mb-3 text-indigodye hover:text-honolulublue" onClick={scrollToResume}>
          <button>Resume</button>
          <MdOutlineKeyboardDoubleArrowDown size={24}/>
        </div>
      </div>

      {/* Resume Section (Third Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-3 mb-auto text-indigodye hover:text-honolulublue" onClick={scrollToProjects}>
          <MdKeyboardDoubleArrowUp size={24}/>
          <button>Projects</button>
        </div>
        <div className="relative w-[60vw] h-[70vh] max-w-[650px] mb-auto drop-shadow-xl/40" ref={resumeRef}>
          <Image src="/Official-Resume.png" alt="Resume" fill/>
        </div>
      </div>
    </div>
  );
}
