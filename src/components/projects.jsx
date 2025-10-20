import { FaBuilding, FaRoad, FaHome, FaWarehouse, FaCity, FaTools } from "react-icons/fa";
import project1 from '../images/projects/projects (1).jpg'
import project2 from '../images/projects/projects (2).jpg'
import project3 from '../images/projects/projects (3).jpg'
import project4 from '../images/projects/projects (4).jpg'
import project5 from '../images/projects/projects (5).jpg'
import project6 from '../images/projects/projects (6).jpg'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cardHover, cardTaps, cardZoomIn, scrollRight, scrollLeft, scrollUp, scrollUpNext} from "../animations/motion";


const projects = [
  {
    id: 1,
    img : project6,
    title: "Residential Apartment Complex",
    icon: <FaBuilding />,
    desc: "A modern 5-story apartment with smart energy systems and luxury finishing for urban living."
  },
  {
    id: 2,
    img: project5,
    title: "City Road Expansion",
    icon: <FaRoad />,
    desc: "Reinforced concrete roads built to improve access and reduce congestion across major districts."
  },
  {
    id: 3,
    img: project4,
    title: "Private Luxury Villa",
    icon: <FaHome/>,
    desc: "Elegant private residence designed with contemporary architecture and eco-friendly features."
  },
  {
    id: 4,
    img: project3,
    title: "Industrial Warehouse Complex",
    icon: <FaWarehouse/>,
    desc: "High-capacity storage facility built with steel reinforcement for long-term industrial use."
  },
  {
    id: 5,
    img: project2,
    title: "Urban Office Towers",
    icon: <FaCity/>,
    desc: "Modern commercial towers with energy-efficient glass facades and open-plan workspaces."
  },
  {
    id: 6,
    img:project1,
    title: "Bridge Restoration Project",
    icon: <FaTools />,
    desc: "Structural rehabilitation of city bridges, improving safety and extending lifespan."
  },
];

export default function ProjectsSection() {
  return (
    <>
        <div className="w-full h-auto flex flex-col items-center justify-evenly mt-15">
            <motion.h2 {...scrollUp} className="text-3xl font-bold mt-3 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent h-10">Our Recent Projects</motion.h2>
            <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl  mb-5 md:mb-5 text-center text-xs md:text-sm">Showcasing our commitment to quality construction and design excellence.</motion.p>
        </div>
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5">
            {projects.map((data, index) => (
                <motion.div {...scrollLeft} className="w-[95%] shadow-md group flex flex-col p-5 mb-5">
                    <motion.img src={data.img} className="w-full md:h-full mb-3 cursor-pointer hover:rounded-sm group-hover:scale-105 transition-transform duration-700"/>
                    <div className="w-10 h-15 rounded-full mb-3 flex items-center justify-center text-xl text-orange-500">
                        {data.icon}
                    </div>
                    <Link className="text-[#263A4F] font-semibold mb-3">
                        {data.title}
                    </Link>

                    <p className="text-sm mb-5 text-gray-500">{data.desc}</p>
                    <motion.button {...cardHover} {...cardTaps} key={index} className="w-35 py-2.5 text-sm mb-3 cursor-pointer rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold">
                        <Link to="#">Check Projects</Link>
                    </motion.button>
                </motion.div>
            ))}
        </div>
    </>
  );
}
