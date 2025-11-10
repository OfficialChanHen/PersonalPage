import Image from "next/image";
import Slider from "react-slick";

type project = {
    id: number,
    img: {
        imgOrigin: string,
        width: number,
        height: number,
    },
    desc: string
};

const projects: project[] = [
    {
        id: 1,
        img: {
            imgOrigin: "/landing.png",
            width: 2560,
            height: 1300,
        },
        desc: "A clean portfolio-style homepage showcasing your GitHub repositories, project descriptions, and links, presented with a simple responsive layout.",
    },
    {
        id: 2,
        img: {
            imgOrigin: "/signup.png",
            width: 2560,
            height: 1301,
        },
        desc: "A minimalist registration form that collects username, email, and password, with a submit button.",
    },
    {
        id: 3,
        img: {
            imgOrigin: "/calculator.png",
            width: 700,
            height: 900,
        },
        desc: "An interactive web app that performs basic arithmetic operations—addition, subtraction, multiplication, and division—with a clean, button-based interface.",
    },
    {
        id: 4,
        img: {
            imgOrigin: "/sketchpad.png",
            width: 700,
            height: 900,
        },
        desc: "A canvas-based drawing app where users can draw freehand lines using mouse or touch input, choose colors, and clear their sketches.",
    },

]

function CustomCard({id, img, desc}: project) {
    return(
        <div className="flex flex-col justify-center items-center mx-5 h-[60vh] bg-[#005380]">
            <div className="relative flex-3 w-full h-auto">
                <Image src={img.imgOrigin} alt={desc} fill style={{objectFit: "cover"}}/>
            </div>
            <div className="flex-1 p-5 text-center">
                <span className="">
                    {desc}
                </span>
            </div>
        </div>
    )
}

export default function ProjectSldier() {
    const settings = {
        className: "",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
    };

    return(
        <Slider {...settings}>
            {projects.map(project =>
                <CustomCard key={project.id} id={project.id} img={project.img} desc={project.desc}/>
            )}
        </Slider>
    );
}