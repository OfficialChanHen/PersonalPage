import Image from "next/image";
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useResponsiveIconSize from "@/app/hooks/useResponsiveIconSize";
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



function CustomCard({title, img, desc, link}: project) {
    const iconSize = useResponsiveIconSize({
        base: 18,
        sm: 20,
        md: 22,
        lg: 24,
    });

    return(
        <div 
            className="group flex flex-col justify-center items-center mx-5 h-[60vh] rounded-lg drop-shadow-lg overflow-hidden transition-transform transform duration-700 ease-in-out hover:scale-110"
        >
            <div className="relative flex-2 w-full">
                <Image 
                    src={img.imgOrigin} 
                    alt={desc} fill 
                    style={{objectFit: "cover"}} 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                />
            </div>
            <div className="flex flex-1 flex-col w-full justify-start items-center gap-2 p-5 bg-indigodye text-parchment transition-colors transition-color transform duration-700 ease-in-out group-hover:bg-pictonblue">
                <span className="text-center text-lg sm:text-xl w-full"><u>{title}</u></span>
                <span className="text-left text-xs sm:text-md md:text-lg w-full">{desc}</span>
                <IoIosArrowDroprightCircle 
                    className="self-end mt-auto" 
                    size={iconSize} 
                    onClick={() => window.open(`${link}`, '_blank', 'noopener noreferrer')} 
                />
            </div>
        </div>
    )
}

export default function ProjectSldier() {
    const settings = {
        slidesToShow: 3,
        dots: true,
        centerMode: true,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    centerMode: true,
                    infinite: true,
                    speed: 500,
                    focusOnSelect: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    centerMode: true,
                    speed: 500,
                    focusOnSelect: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    pauseOnHover: true,
                }
            }
        ]
    };

    return(
        <ScrollFloatUp className="w-5/6">
            <Slider {...settings}>
                {projects.map(project =>
                    <CustomCard key={project.id} {...project}/>
                )}
            </Slider>
        </ScrollFloatUp>
    );
}