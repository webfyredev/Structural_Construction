import Header from "../components/Header";
import NavBar from "../components/navbar";
import TestimonialSection from "../components/testimonial";
import aboutImg from '../images/sharps/pressed (1).webp'
import aboutHeader from '../images/sharps/pressed (4).webp'
import { motion } from "framer-motion";
import { cardHover, cardTaps, scrollLeft, scrollUpNext, scrollUp, scrollRight} from "../animations/motion";
import aboutSlider from '../images/header/header (4).jpg'
import Teams from "../components/team";
import Features from "../components/features";
import { FaHardHat } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import {RiLightbulbFlashFill} from "react-icons/ri"
import ScrollToUpBtn from "../components/scrollToTop";
import Footer from "../components/footer";
export default function About (){
    return(
        <>
            <NavBar />
            <Header 
            page = 'About'
            img = {aboutHeader}
            />
            <div className="w-full md:h-110 sm:110 sm:flex sm:flex-col h-auto md:flex md:flex-row p-5 justify-evenly mt-10 flex flex-col">
                <motion.div {...scrollLeft} className="w-full  sm:w-full sm:h-[45%] md:w-[45%] md:h-full h-[45%] sm:h-[45%] p-6 mb-5 md:mb-0">
                    <h2 className="text-2xl md:text-3xl text-[#262A4F] font-semibold my-5 ">
                        We are the expart on this field better solution since 1984.
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500 mb-5 text-justify">
                        We are committed to building a sustainable future by fostering a collaborative spirit that creates exceptional experiences, balanced relationships, and community built environment. Building isn’t just job. It's our passion. With every project we undertake, we set the bar high and provide the best industry.
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 mb-5 text-justify">
                        Building isn't just job. It's our passion. With every project we undertake, we set the bar high and provide the best industry.
                    </p>
                    <div className="flex justify-between items-center w-[70%] md:w-[65%] sm:w-[52%]">
                        <motion.button {...cardHover} {...cardTaps} className="px-6 md:px-8 py-2.5  text-sm rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 font-semibold text-white cursor-pointer ">More About Us</motion.button>
                        <motion.button {...cardHover} {...cardTaps} className="px-6 md:px-8 py-2.5  text-sm rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 font-semibold text-white cursor-pointer">Get In Touch</motion.button>

                    </div>
                </motion.div>
                <motion.img {...scrollRight} src={aboutImg}  className="rounded-sm sm:h-[]"/>

            </div>
            <Features />
            <div className="w-full md:h-110 h-auto flex flex-col md:flex md:flex-row p-5 items-center justify-evenly mt-10">
                <motion.img {...scrollLeft} src={aboutSlider} className="md:w-[45%] w-full h-[30%] sm:h-[30%] md:h-[95%] rounded-sm"/>
                <div className="md:w-[45%] w-full h-[50%] md:h-full flex flex-col md:px-5 py-2 justify-between items-center">
                    <motion.div {...scrollUp} {...cardHover} className="w-full h-30 flex flex-row items-center justify-center shadow-md rounded-md hover:shadow-lg px-3 md:px-0">
                        <FaHardHat  className="w-10 h-10 text-orange-500 mr-2"/>
                        <div className="w-110 h-full p-2">
                            <h3 className="font-semibold bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text md:text-xl text-lg mt-5 mb-1 sm:mt-6">
                                Experienced Professionals
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-500">Experienced in delivering high-quality construction projects with a focus on precision, safety, and client satisfaction.</p>
                        </div>
                    </motion.div>
                    <motion.div {...scrollUpNext} {...cardHover} className="w-full h-30 flex flex-row items-center justify-center shadow-md rounded-md hover:shadow-lg px-3 md:px-0">
                        <GiBrickWall  className="w-10 h-10 text-orange-500 mr-2"/>
                        <div className="w-110 h-full p-2">
                            <h3 className="font-semibold bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text text-xl mt-5 mb-1 sm:mt-6">
                                Quality Construction
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-500">We maintain the highest standards of workmanship, ensuring every project is built to last with precision and care.</p>
                        </div>
                    </motion.div>
                    <motion.div {...scrollUpNext} {...cardHover}  className="w-full h-30 flex flex-row items-center justify-center shadow-md rounded-md hover:shadow-lg px-3 md:px-0">
                        <RiLightbulbFlashFill  className="w-10 h-10 text-orange-500 mr-2"/>
                        <div className="w-110 h-full p-2">
                            <h3 className="font-semibold bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text text-xl mt-5 mb-1 sm:mt-6">
                                Innovative Solutions
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-500">Through innovation and expertise, we provide tailored solutions that meet today’s standards and anticipate tomorrow’s needs.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Teams />
            
            <TestimonialSection />
            <ScrollToUpBtn />
            <Footer />
        </>
    );
}