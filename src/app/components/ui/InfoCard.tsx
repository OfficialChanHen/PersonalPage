"use client"

import useResponsiveIconSize from "@/app/hooks/useResponsiveIconSize";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function InfoCard() {
    const [isBackside, setIsBackside] = useState(false);

    const handleRotation = () => {
        setIsBackside(prev => !prev);
    }

    const iconSize = useResponsiveIconSize({
            base: 18,
            sm: 20,
            md: 22,
            lg: 24,
    });

    return(
        <div className="my-auto
                        aspect-[6/4] w-1/3 sm:aspect-[5/3] sm:w-2/3 max-w-[500px] min-w-[300px] max-h-[80vh]
                        perspective-[1000px]">
          <div 
            className={`relative size-full text-center transition-transform duration-800 transform-3d ${isBackside && "rotate-y-180"}`}
            onClick={handleRotation}
          >
            {/* Front side of card */}
            <div className="absolute flex flex-col justify-center items-center size-full p-3 [-webkit-backface-visibility:hidden] bg-[url('/card-background.png')] bg-cover bg-center bg-no-repeat rounded-lg drop-shadow-2xl/40">
              <div className="flex flex-col justify-center items-center size-full py-2 border-3 rounded-lg border-parchment text-parchment text-shadow-md/30 tracking-[0.25rem]">
                  <div className="flex-1 flex justify-center items-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl text-center">Welcome to my <br/>Portfolio</span>
                  </div>
                  <span className="text-sm sm:text-md md:text-lg">Tap the card for more info!</span>
              </div>
            </div>
            {/* Back side of card */}
            <div className="absolute size-full p-3 [-webkit-backface-visibility:hidden] rotate-y-180 bg-indigodye rounded-lg text-parchment drop-shadow-2xl/40 text-left tracking-[0.4rem]">
              <div className="flex flex-col justify-between items-baseline size-full overflow-y-auto p-4 sm:p-6 md:p-8 border-3 rounded-lg border-parchment text-parchment">
                {/** Title and headshot */}
                <div className="flex w-full flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-md sm:text-lg md:text-2xl text-pictonblue">Chan Hen</span>
                    <span className="text-xs sm:text-lg">Software Engineer</span>
                  </div>
                  <div className="aspect-[1/1] w-1/4 rounded-full border-2 border-parchment bg-[url('/headshot.jpg')] bg-cover bg-center"/>
                </div>
                {/** Bottom Text */}
                <div className="flex flex-col w-full text-xs sm:text-lg">
                  <span>(952)-994-5059</span>
                  <span className="break-all">Officialchanhen@gmail.com</span>
                </div>
                {/** Icons */}
                <div className="flex flex-row items-end gap-2 text-pictonblue">
                  <a href="https://github.com/OfficialChanHen"  onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={iconSize}/>
                  </a>
                  <a href="https://www.linkedin.com/in/chan-hen-13727b233/"  onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={iconSize}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}