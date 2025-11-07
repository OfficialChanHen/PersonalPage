"use client"

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function InfoCard() {
    const [isBackside, setIsBackside] = useState(false);

    const handleRotation = () => {
        setIsBackside(prev => !prev);
    }

    return(
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-125 h-75 perspective-[1000px]">
          <div 
            className={`relative size-full text-center transition-transform duration-800 transform-3d ${isBackside && "rotate-y-180"}`}
            onClick={handleRotation}
          >
            <div className="absolute flex flex-col justify-center items-center size-full p-3 [-webkit-backface-visibility:hidden] bg-[url('/card-background-2.png')] bg-cover bg-center bg-no-repeat rounded-lg drop-shadow-2xl/40">
              <div className="flex flex-col justify-center items-center size-full py-2 border-3 rounded-lg border-parchment text-parchment text-shadow-md">
                  {/*<span className="text-pictonblue">Hello!</span>*/}
                  <div className="flex-1 flex justify-center items-center">
                    <span className="text-4xl text-center">Welcome to my <br/>Portfolio</span>
                  </div>
                  <span>Tap the card for more info!</span>
              </div>
            </div>
            <div className="absolute size-full p-3 [-webkit-backface-visibility:hidden] rotate-y-180 bg-indigodye rounded-lg text-parchment drop-shadow-2xl/40 text-left tracking-[0.4rem]">
              <div className="flex flex-col justify-start items-baseline size-full p-10 border-3 rounded-lg border-parchment text-parchment">
                <span className="text-3xl text-pictonblue">Chan Hen</span>
                <span className="text-lg">Software Engineer</span>
                <span className="text-md mt-4 mb-auto">(952)-994-5059<br/>Officialchanhen@gmail.com</span>
                <div className="flex flex-row items-end gap-2 text-pictonblue">
                  <a href="https://github.com/OfficialChanHen"  onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24}/>
                  </a>
                  <a href="https://www.linkedin.com/in/chan-hen-13727b233/"  onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}