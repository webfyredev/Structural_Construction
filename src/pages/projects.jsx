import Header from "../components/Header";
import NavBar from "../components/navbar";
import ProjectsSection from "../components/projects";
import projectImg from '../images/sharps/pressed (2).webp'
import projectImg2 from '../images/header/header (3).jpg'
import projectImg3 from '../images/header/header (7).jpg'
import projectImg4 from '../images/header/header (12).jpg'
import projectImg5 from '../images/header/header (13).jpg'
import { FaHammer, FaBuilding, FaCogs } from "react-icons/fa";
import { cardHover, cardTaps, scrollLeft, scrollRight, cardZoomIn, scrollUp, scrollUpNext} from "../animations/motion";
import { motion } from "framer-motion";
import Footer from "../components/footer";



export default function Projects(){
    return(
        <>
            <NavBar />
            <Header 
            page = 'Projects'
            img = {projectImg}
            />
            
            <ProjectsSection />
            
            <div className="w-full lg:h-120 relative h-auto border-1">
                <img src={projectImg} className="w-full lg:h-full md:h-150 h-250 object-cover"/>
                <div className="absolute top-0 w-full lg:h-full md:h-full h-auto inset-0 bg-black/60 flex items-center justify-center">
                    <div className="w-[90%] lg:w-[80%] lg:h-[85%] h-auto flex flex-col items-center p-5">
                        <motion.h3 {...scrollUp} className="my-5 text-xl lg:text-3xl md:text-2xl font-bold text-white text-center">
                           Build  Your  Projects with <br />
                            the best and capable team
                        </motion.h3>
                        <motion.div {...scrollUp} className="w-full lg:h-[70%] h-auto md:h-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 mt-3 gap-5">
                            <motion.div {...cardHover} className="md:p-4 p-8 flex flex-col items-center w-full md:w-[95%] lg:h-[95%] bg-white rounded-sm mb-3">
                                <FaCogs  className="mt-5 text-orange-500 group-hover:text-white" size={35}/>
                                <h3 className="lg:text-xl font-semibold md:text-lg text-md mt-2 text-[#262A3F]">
                                    Outstanding Services
                                </h3>
                                <p className="text-center text-xs mt-2 group-hover:text-gray-200 mb-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus nostrum vero.
                                </p>
                            </motion.div>
                            <motion.div {...cardHover} className="md:p-4 p-8  flex flex-col items-center w-full md:w-[95%] lg:h-[95%] bg-white rounded-sm mb-3">
                                <FaCogs  className="mt-5 text-orange-500" size={35}/>
                                <h3 className="lg:text-xl font-semibold md:text-lg text-md mt-2 text-[#262A3F]">
                                    Outstanding Services
                                </h3>
                                <p className="text-center text-xs mt-2 mb-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus nostrum vero.
                                </p>
                            </motion.div>
                            <motion.div {...cardHover} className="md:p-4 p-8 flex flex-col items-center w-full md:w-[95%] h-[95%] bg-white rounded-sm mb-3">
                                <FaCogs  className="mt-5 text-orange-500" size={35}/>
                                <h3 className="lg:text-xl font-semibold md:text-lg text-md mt-2 text-[#262A3F]">
                                    Outstanding Services
                                </h3>
                                <p className="text-center text-xs mt-2 mb-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus nostrum vero.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
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
                <motion.div {...scrollRight} className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:py-4 md:mt-10 py-2 gap-3">
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