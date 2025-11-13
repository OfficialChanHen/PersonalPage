"use client"

import InfoCard from "@/app/components/ui/InfoCard";
import Image from "next/image";
import { useRef } from "react";
import ProjectSldier from "@/app/components/ui/ProjectSlider";
import SectionButton from "@/app/components/SectionButton";

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
    <div className="flex flex-col min-w-screen bg-parchment">
      {/* Card Section (First Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-end items-center gap-4 py-4" ref={cardRef}>
        <InfoCard/>
        <SectionButton up={false} label={"Projects"} buttonAction={scrollToProjects}/>
      </div>

      {/* Projects Section (Second Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-between items-center gap-4 py-4" ref={projectsRef}>
        <SectionButton up={true} label={"Contact Card"} buttonAction={scrollToCard}/>
        <ProjectSldier/>
        <SectionButton up={false} label={"Resume"} buttonAction={scrollToResume}/>
      </div>

      {/* Resume Section (Third Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-center items-center gap-4 py-4">
        <SectionButton up={true} label={"Projects"} buttonAction={scrollToProjects}/>
        <div className="relative aspect-[8.5/11] w-2/3 max-w-[650px] my-auto drop-shadow-xl/40" ref={resumeRef}>
          <Image src="/Official-Resume.png" alt="Resume" fill/>
        </div>
      </div>
    </div>
  );
}
