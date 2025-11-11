import Image from "next/image";
import Slider from "react-slick";

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
        link: "https://officialchanhen.github.io/TOP-admin-dashboard/",
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
        link: "https://officialchanhen.github.io/TOP-signup-page/",
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
        link: "https://officialchanhen.github.io/calculator/",
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
        link: "https://officialchanhen.github.io/sketch-pad/",
        desc: "A canvas-based drawing app where users can draw freehand lines using mouse or touch input, choose colors, and clear their sketches.",
        color: "#ffffff",
    },

]

function CustomCard({title, img, desc, link}: project) {
    return(
        <div 
            className="group flex flex-col justify-center items-center mx-5 my-25 h-[60vh] rounded-lg drop-shadow-lg overflow-hidden transition-transform transform duration-700 ease-in-out hover:scale-110"
        >
            <div 
                className="relative flex-4 w-full h-auto"
                onClick={() => window.open(`${link}`, '_blank', 'noopener noreferrer')}    
            >
                <Image src={img.imgOrigin} alt={desc} fill style={{objectFit: "cover"}}/>
            </div>
            <div className="flex flex-col w-full h-[200px] justify-start items-center gap-2 p-5 bg-indigodye text-parchment text-center transition-colors transition-color transform duration-700 ease-in-out group-hover:bg-pictonblue">
                <span className="text-[1.5rem]"><u>{title}</u></span>
                <span>{desc}</span>
            </div>
        </div>
    )
}

export default function ProjectSldier() {
    const settings = {
        className: "w-[90vw]",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return(
        <Slider {...settings}>
            {projects.map(project =>
                <CustomCard key={project.id} {...project}/>
            )}
        </Slider>
    );
}