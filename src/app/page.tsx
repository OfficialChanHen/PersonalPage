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
    <div className="flex flex-col bg-parchment">
      {/* Card Section (First Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-end items-center" ref={cardRef}>
        <InfoCard/>
        <SectionButton up={false} label={"Projects"} imgSize={24} buttonAction={scrollToProjects}/>
      </div>

      {/* Projects Section (Second Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-between items-center" ref={projectsRef}>
        <SectionButton up={true} label={"Contact Card"} imgSize={24} buttonAction={scrollToCard}/>
        <ProjectSldier/>
        <SectionButton up={false} label={"Resume"} imgSize={24} buttonAction={scrollToResume}/>
      </div>

      {/* Resume Section (Third Section) */}
      <div className="min-w-screen min-h-screen flex flex-col justify-center items-center">
        <SectionButton up={true} label={"Resume"} imgSize={24} buttonAction={scrollToProjects}/>
        <div className="relative w-[60vw] h-[70vh] max-w-[650px] my-auto drop-shadow-xl/40" ref={resumeRef}>
          <Image src="/Official-Resume.png" alt="Resume" fill/>
        </div>
      </div>
    </div>
  );
}
