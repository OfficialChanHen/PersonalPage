"use client"

import { useState } from "react";

export default function Home() {
  const [isBackside, setIsBackside] = useState(false);

  const handleRotation = () => {
    setIsBackside(prev => !prev);
  }

  return (
    <main>
      <div className="relative min-w-screen min-h-screen flex flex-col justify-start items-center p-10 bg-greenblue">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-125 h-75 perspective-[1000px]">
          <div 
            className={`relative size-full text-center transition-transform duration-800 transform-3d ${isBackside && "rotate-y-180"}`}
            onClick={handleRotation}
          >
            <div className="absolute flex flex-col justify-center items-center size-full p-3 [-webkit-backface-visibility:hidden] bg-pictonblue rounded-lg text-white drop-shadow-2xl/40">
              <div className="flex flex-col justify-center items-center size-full py-2 border-3 rounded-lg border-parchment text-parchment">
                  {/*<span className="text-pictonblue">Hello!</span>*/}
                  <div className="flex-1 flex justify-center items-center">
                    <span className="text-4xl text-center">Welcome to my <br/>Portfolio</span>
                  </div>
                  <span>Tap the card for more info!</span>
              </div>
            </div>
            <div className="absolute flex flex-col justify-start items-baseline size-full p-10 [-webkit-backface-visibility:hidden] rotate-y-180 bg-parchment rounded-lg text-black drop-shadow-2xl/40 text-left tracking-[0.3rem] text-pictonblue">
              <span className="text-3xl text-greenblue">Chan Hen</span>
              <span className="text-lg">Software Engineer</span>
              <span className="text-md my-auto">(952)-994-5059<br/>Officialchanhen@gmail.com</span>
              <span className="mt-auto">Other Info</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
