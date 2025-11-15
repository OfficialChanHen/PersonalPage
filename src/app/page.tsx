"use client"

import InfoCard from "@/app/components/ui/InfoCard";
import Image from "next/image";
import { useRef } from "react";
import ProjectSldier from "@/app/components/ui/ProjectSlider";
import SectionButton from "@/app/components/SectionButton";
import ScrollFadeIn from "@/app/components/ScrollFadeIn";
import ScrollFloatUp from "./components/ScrollFloatUp";

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
    <div className="flex flex-col w-full bg-parchment">
      {/* Card Section (First Section) */}
      <ScrollFadeIn>
        <div className="w-full min-h-screen flex flex-col justify-end items-center gap-4 py-4" ref={cardRef}>
          <InfoCard/>
          <SectionButton up={false} label={"Projects"} buttonAction={scrollToProjects}/>
        </div>
      </ScrollFadeIn>

      {/* Projects Section (Second Section) */}
      <ScrollFadeIn>
        <div className="w-full min-h-screen flex flex-col justify-between items-center gap-4 py-4" ref={projectsRef}>
          <SectionButton up={true} label={"Contact Card"} buttonAction={scrollToCard}/>
          <ProjectSldier/>
          <SectionButton up={false} label={"Resume"} buttonAction={scrollToResume}/>
        </div>
      </ScrollFadeIn>

      {/* Resume Section (Third Section) */}
      <ScrollFadeIn>
        <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 py-4" ref={resumeRef}>
          <SectionButton up={true} label={"Projects"} buttonAction={scrollToProjects}/>
            <ScrollFloatUp className="relative aspect-[8.5/11] w-2/3 max-w-[650px] my-auto drop-shadow-xl/40">
              <Image src="/Official-Resume.png" alt="Resume" fill/>
            </ScrollFloatUp>
        </div>
      </ScrollFadeIn>
    </div>
  );
}
