export default function Home() {
  return (
    <main>
      <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-pictonblue">
        <div className="group w-125 h-75 perspective-[1000px]">
          <div className="relative w-full h-full text-center transition-transform duration-800 transform-3d group-hover:rotate-y-180">
            <div className="absolute flex flex-col justify-center items-center w-full h-full [-webkit-backface-visibility:hidden] bg-white text-black shadow-lg/20">
              <h1>Welcome to my Portfolio</h1>
            </div>
            <div className="absolute flex flex-col justify-center items-center w-full h-full [-webkit-backface-visibility:hidden] rotate-y-180 bg-white text-black shadow-lg/20">
              <h1>Chan Hen</h1>
              <p>Software Engineer</p>
              <p>Other Info</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
