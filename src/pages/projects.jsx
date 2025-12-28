import Header from "../components/Header";
import NavBar from "../components/navbar";
import ProjectsSection from "../components/projects";
import projectImg from '../images/header/project.jpg'
import projectImg2 from '../images/header/header (3).jpg'
import projectImg3 from '../images/header/header (7).jpg'
import projectImg4 from '../images/header/header (12).jpg'
import projectImg5 from '../images/header/header (13).jpg'
import { FaHammer, FaBuilding, FaCogs, FaMapMarker, FaRegClock, FaRegBuilding } from "react-icons/fa";
import { cardHover, cardTaps, scrollLeft, scrollRight, cardZoomIn, scrollUp, scrollUpNext} from "../animations/motion";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import { useEffect } from "react";
import { featured_projects } from "../data/project";



export default function Projects(){
    useEffect(() =>{
        document.title = 'Projects | Structura_Construction'
    }, []);
    return(
        <>
            <NavBar />
            <Header 
            page = 'Projects'
            img = {projectImg}
            />
            <div className="w-full p-3 lg:p-10 mt-10 flex flex-col items-center">
                <motion.h2 {...scrollUp} className="text-3xl font-bold mt-3 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent h-10">Featured Projects</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl  mb-5 md:mb-5 text-center text-xs md:text-sm">A showcase of some of our signature projects delivered with precision, quality, and trsuted expertise</motion.p>
                <div className="w-full md:w-[95%] mt-5 p-2 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {featured_projects.map((project) => (
                        <motion.div {...scrollRight} className="flex flex-col rounded-xl overflow-hidden group shadow-sm hover:shadow-lg transition">
                            <img src={project.img} alt={project.title} className="w-full h-48 md:h-52 lg:h-64 object-cover rounded-t-xl group-hover:scale-105 transition duration-300" />
                            <div className="flex flex-col px-3 py-4.5">
                                <a href="#" className="text-md font-semibold text-[#262A4F] group-hover:text-orange-500 transition">
                                    {project.title}
                                </a>
                                <p className="text-xs mt-1.5 text-gray-600">
                                    {project.desc}
                                </p>
                                <div className="hidden md:flex space-x-4 items-center mt-2">
                                    <p className="flex items-center text-xs  italic font-semibold text-gray-600">
                                        <FaMapMarker  className="w-2.5 h-2.5  mr-1 text-[#262A4F]"/> {project.location}
                                    </p>
                                    <p className="flex items-center text-xs  italic font-semibold text-gray-600">
                                        <FaRegClock  className="w-2.5 h-2.5  mr-1 text-[#262A4F]"/> {project.duration}
                                    </p>
                                    <p className="flex items-center text-xs  italic font-semibold text-gray-600">
                                        <FaRegBuilding  className="w-2.5 h-2.5  mr-1 text-[#262A4F]"/> {project.type}
                                    </p>
                                    
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <ProjectsSection />
            <div className="w-full lg:h-110 h-auto lg:flex lg:flex-row flex flex-col p-5 justify-between mt-15">
            <div className="lg:w-[50%] w-full h-auto  lg:h-full p-5">
                <motion.h3 {...scrollUp} className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent h-10">
                    Building Products That Last a Lifetime
                </motion.h3>
                <motion.p {...scrollUpNext} className="text-gray-600 text-justify text-xs mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tenetur amet, praesentium cum quas nihil consectetur error aliquid, voluptatem blanditiis nisi? Fugiat consequatur deserunt laboriosam earum doloremque molestias cumque praesentium minima impedit qui. Odio doloremque animi quos, hic minima quam.
                </motion.p>
                <motion.p {...scrollUpNext} className="text-gray-600 text-justify text-xs mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tenetur amet, praesentium cum quas nihil consectetur error aliquid, voluptatem blanditiis nisi? Fugiat consequatur deserunt laboriosam earum doloremque molestias cumque praesentium minima impedit qui. Odio doloremque animi quos, hic minima quam.
                </motion.p>
                <motion.div {...scrollRight} className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:py-4 md:mt-10 py-2 gap-3">
                    <motion.div {...cardHover} {...cardTaps} className="w-full flex flex-row justify-left w-full h-auto shadow-md items-center md:p-2.5 p-4 hover:cursor-pointer mb-3 md:mb-0">
                        <FaHammer  className="text-white bg-gradient-to-r from-orange-500 to-orange-400  w-8 h-8 p-2 rounded-sm mr-2"/>
                        <div className="h-auto">
                            <h3 className="text-[#262A4F] font-semibold">Quality Materials</h3>
                            <p className="text-[10px] text-gray-900">Lorem, ipsum dolor.</p>
                        </div>
                    </motion.div>
                    <motion.div {...cardHover} {...cardTaps} className="w-[90%] flex flex-row justify-left w-full h-auto shadow-md items-center md:p-2.5 p-4 hover:cursor-pointer mb-3 md:mb-0">
                        <FaBuilding  className="text-white bg-gradient-to-r from-orange-500 to-orange-400  w-8 h-8 p-2 rounded-sm mr-2"/>
                        <div className="h-auto">
                            <h3 className="text-[#262A4F] font-semibold text-sm">Expert Execution</h3>
                            <p className="text-[10px] text-gray-900">Lorem, ipsum dolor.</p>
                        </div>
                    </motion.div>
                    <motion.div {...cardHover} {...cardTaps} className="w-[85%] flex flex-row justify-left w-full h-auto shadow-md items-center md:p-2.5 p-4 hover:cursor-pointer">
                        <FaCogs  className="text-white bg-gradient-to-r from-orange-500 to-orange-400  w-8 h-8 p-2 rounded-sm mr-2"/>
                        <div className="h-auto">
                            <h3 className="text-[#262A4F] font-semibold text-sm">Innovative Design</h3>
                            <p className="text-[10px] text-gray-900">Lorem, ipsum dolor.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="w-full h-auto lg:w-[45%] lg:h-full lg:flex lg:flex-row flex flex-col overflow-hidden">
                <div className="lg:w-[45%] lg:h-full w-full h-auto md:flex md:flex-row lg:flex-col flex flex-col px-3 justify-evenly mb-5 md:mb-0">
                    <motion.img {...cardZoomIn} {...scrollRight} src={projectImg2} className="md:w-[45%] lg:w-full lg:h-[45%] w-full object-cover hover:cursor-pointer hover:rounded-sm mb-2 md:mb-0"/>
                    <motion.img {...cardZoomIn} {...scrollRight} src={projectImg3}  className="md:w-[45%] lg:w-full lg:h-[45%] w-full object-cover hover:cursor-pointer hover:rounded-sm mb-2 md:mb-0"/>

                </div>
                <div className="lg:w-[45%] lg:h-full w-full h-auto md:flex md:flex-row lg:flex-col flex flex-col px-3 justify-evenly my-5 lg:mb-0 lg:mt-0">
                    <motion.img {...cardZoomIn} {...scrollRight} src={projectImg4} className="md:w-[45%] lg:w-full lg:h-[45%] w-full object-cover hover:cursor-pointer hover:rounded-sm mb-2 md:mb-0"/>
                    <motion.img {...cardZoomIn} {...scrollRight} src={projectImg5}  className="md:w-[45%] lg:w-full lg:h-[45%] w-full object-cover hover:cursor-pointer hover:rounded-sm mb-2 md:mb-0"/>

                </div>
                {/* <div className="lg:w-[45%] w-full h-full lg:flex lg:flex-col md:flex md:flex-row px-3 justify-evenly ">
                    <motion.img {...cardZoomIn} {...scrollRight} src={projectImg4} className="md:w-[45%] lg:h-full lg:h-[45%] object-cover hover:cursor-pointer hover:rounded-sm mb-2"/>
                    <motion.img {...cardZoomIn} {...scrollRight} src={projectImg5} className="md:w-[45%] lg:w-full lg:h-[45%] object-cover hover:cursor-pointer hover:rounded-sm mb-2"/>
                </div> */}
            </div>
            </div>
            <Footer />
        </>
    );
}