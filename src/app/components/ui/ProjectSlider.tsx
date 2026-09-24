"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDroprightCircle } from "react-icons/io";
import ScrollFloatUp from "../ScrollFloatUp";

type project = {
    id: number,
    title: string,
    img: {
        imgOrigin: string,
        width: number,
        height: number,
    },
    link: string,
    desc: string,
    color: string,
};

const projects: project[] = [
    {
        id: 1,
        title: "Admin Dashboard",
        img: {
            imgOrigin: "/admin.png",
            width: 2560,
            height: 1300,
        },
        link: "https://top-admin-dashboard-iota.vercel.app/",
        desc: "A clean portfolio-style homepage showcasing your GitHub repositories, project descriptions, and links, presented with a simple responsive layout.",
        color: "#FCF5C7",
    },
    {
        id: 2,
        title: "Sign-up Page",
        img: {
            imgOrigin: "/signup.png",
            width: 2560,
            height: 1301,
        },
        link: "https://top-signup-page.vercel.app/",
        desc: "A minimalist registration form that collects username, email, and password, with a submit button.",
        color: "linear-gradient(225deg, rgb(12, 30, 127) 0%, rgb(96, 40, 149) 40%, rgb(210, 39, 121) 80%, rgb(255, 0, 142) 100%)",
    },
    {
        id: 3,
        title: "Calculator",
        img: {
            imgOrigin: "/calculator.png",
            width: 700,
            height: 900,
        },
        link: "https://calculator-kappa-lake-67.vercel.app/",
        desc: "An interactive web app that performs basic arithmetic operations—addition, subtraction, multiplication, and division—with a clean, button-based interface.",
        color: "#ffffff",
    },
    {
        id: 4,
        title: "Sketchpad",
        img: {
            imgOrigin: "/sketchpad.png",
            width: 700,
            height: 900,
        },
        link: "https://sketch-pad-one.vercel.app/",
        desc: "A canvas-based drawing app where users can draw freehand lines using mouse or touch input, choose colors, and clear their sketches.",
        color: "#ffffff",
    },

]



function CustomCard({ title, img, desc, link, isActive }: project & { isActive: boolean }) {
    return (
        <div
            className={`group relative w-full h-[clamp(320px,60vh,650px)] rounded-2xl overflow-hidden drop-shadow-lg cursor-pointer transition-all duration-500
                ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"}`}
        >
            <Image
                src={img.imgOrigin}
                alt={title}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 640px) 90vw, 500px"
                className="transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigodye via-indigodye/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-parchment">
                <span className="text-xl sm:text-2xl"><u>{title}</u></span>
                <span
                    className={`text-sm sm:text-base transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                    {desc}
                </span>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    onClick={(e) => { if (!isActive) e.preventDefault(); }}
                    className={`self-end inline-flex items-center gap-2 px-4 py-2 rounded-full bg-parchment text-indigodye text-sm sm:text-base transition-all duration-300 hover:bg-pictonblue hover:text-parchment
                        ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    View Project
                    <IoIosArrowDroprightCircle size={20} />
                </a>
            </div>
        </div>
    );
}

export default function ProjectSldier() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const navButtonStyle = "flex items-center justify-center w-11 h-11 rounded-full bg-indigodye text-parchment drop-shadow-md hover:bg-pictonblue disabled:opacity-30 disabled:hover:bg-indigodye transition-all duration-200 cursor-pointer disabled:cursor-default";

    return (
        <ScrollFloatUp className="w-full flex flex-col items-center gap-6">
            <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                slidesPerView="auto"
                centeredSlides={true}
                spaceBetween={24}
                grabCursor={true}
                speed={800}
                className="w-full !py-4"
            >
                {projects.map((project, i) => (
                    <SwiperSlide
                        key={project.id}
                        style={{ width: "clamp(280px, 40vw, 500px)" }}
                        onClick={() => swiperRef.current?.slideTo(i)}
                    >
                        {({ isActive }) => <CustomCard {...project} isActive={isActive} />}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Nav buttons */}
            <div className="flex justify-center items-center gap-4">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={currentIndex === 0}
                    aria-label="Previous project"
                    className={navButtonStyle}
                >
                    <IoIosArrowBack size={20} />
                </button>
                <div className="flex items-center gap-2">
                    {projects.map((project, i) => (
                        <button
                            key={project.id}
                            onClick={() => swiperRef.current?.slideTo(i)}
                            aria-label={`Go to ${project.title}`}
                            className={`h-2 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex ? "w-8 md:w-12 bg-indigodye" : "w-2 md:w-3 bg-indigodye/30"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={currentIndex === projects.length - 1}
                    aria-label="Next project"
                    className={navButtonStyle}
                >
                    <IoIosArrowForward size={20} />
                </button>
            </div>
        </ScrollFloatUp>
    );
}
