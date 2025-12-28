import Header from "../components/Header";
import NavBar from "../components/navbar";
import TestimonialSection from "../components/testimonial";
import aboutImg from '../images/header/hom (4).jpg'
import aboutHeader from '../images/header/about.jpg'
import { motion } from "framer-motion";
import { cardHover, cardTaps, scrollLeft, scrollUpNext, scrollUp, scrollRight} from "../animations/motion";
import aboutSlider from '../images/header/abt_value.jpg'
import Teams from "../components/team";
import Features from "../components/features";
import { FaCheck, FaHardHat } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import {RiLightbulbFlashFill} from "react-icons/ri"
import ScrollToUpBtn from "../components/scrollToTop";
import Footer from "../components/footer";
import { useEffect } from "react";
import { about_data, about_preferences, about_process, about_value } from "../data/about";
import StatsSection from "../components/stats";
import abtImg1 from '../images/about/abt (1).jpg'
import abtImg2 from '../images/about/abt (2).jpg'
import abtImg3 from '../images/about/abt (3).jpg'

export default function About (){
    useEffect(() =>{
        document.title = 'About | Structura_Construction'
    },[]);
    return(
        <>
            <NavBar />
            <Header 
            page = 'About'
            img = {aboutHeader}
            />
            <div className="w-full lg:h-110 h-auto lg:flex lg:flex-row p-3 lg:p-5 justify-between mt-10 flex flex-col lg:space-x-5">
                <motion.div {...scrollLeft} className="w-full  md:w-full md:h-[45%] lg:w-1/2 lg:h-full h-[45%] md:h-[45%] p-2 lg:p-3 mb-5 lg:mb-0">
                    <h2 className="text-2xl md:text-3xl text-[#262A4F] font-semibold my-5 ">
                        We are the expart on this field better solution since 2000.
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500 mb-5 text-justify">
                        We are committed to building a sustainable future by fostering a collaborative spirit that creates exceptional experiences, balanced relationships, and community built environment. Building isn’t just job. It's our passion. With every project we undertake, we set the bar high and provide the best industry.
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 mb-5 text-justify">
                        Building isn't just job. It's our passion. With every project we undertake, we set the bar high and provide the best industry.
                    </p>
                    <div className="flex space-x-5 items-left">
                        <motion.button {...cardHover} {...cardTaps} className="px-6 md:px-8 py-2.5  text-sm rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 font-semibold text-white cursor-pointer ">More About Us</motion.button>
                        <motion.button {...cardHover} {...cardTaps} className="px-6 md:px-8 py-2.5  text-sm rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 font-semibold text-white cursor-pointer">Get In Touch</motion.button>

                    </div>
                </motion.div>
                <motion.img {...scrollRight} src={aboutImg}  className="p-2 lg:p-0 w-full lg:w-1/2 rounded-xl lg:h-full h-70 md:h-100 object-cover hover:scale-99 transition duration-200"/>

            </div>
            <div className="w-full p-3 lg:p-5 my-5 lg:flex lg:flex-row flex flex-col space-x-10">
                <motion.div {...scrollLeft} className="w-full lg:w-1/2 p-2 lg:p-5 relative group overflow-hidden ">
                    <img src={abtImg1} className="w-full md:h-100 lg:h-120 object-cover rounded-xl" alt="" />
                    <img src={abtImg2} className="hidden md:flex object-cover absolute bottom-10 right-10 border-2 border-white z-1 w-50 h-40 lg:w-70 lg:h-50 rounded-xl group-hover:scale-105 transition overflow-hidden" alt="" />
                </motion.div>
                <div className="w-full lg:w-1/2 p-2 lg:p-5 flex flex-col items-left">
                    <motion.h3 {...scrollUp} className="font-bold text-xl md:text-2xl bg-gradient-to-r from-orange-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                        - Mission
                    </motion.h3>
                    <motion.p {...scrollUp} className="text-xs md:text-[13px] my-2">
                        Our mission is to deliver safe, durable and well-engineered construction 
                        solutions that meet the highest standards of quality. We focus on building 
                        structures that are functional, sustainable and built to last, while 
                        maintaining transparency, professionalism and integrity on every project.
                    </motion.p>
                    <motion.h3 {...scrollUp} className="font-bold text-xl md:text-2xl bg-gradient-to-r from-orange-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent mt-2">
                        - Vission
                    </motion.h3>
                    <motion.p {...scrollUp} className="text-xs md:text-[13px] my-2">
                        Our vision is to become a trusted name in the construction industry, 
                        known for reliability, innovation and excellent project delivery. 
                        We aim to continually improve, grow and contribute to the development of 
                        modern, well-structured environments for individuals, businesses and communities.
                    </motion.p>
                    <motion.ul {...scrollUp} className="flex flex-col space-y-5 mt-2">
                        {about_value.map((data, index) => (
                            <li key={index} className="w-full flex items-center text-justify">
                                <FaCheck  className="w-2.5 h-2.5 text-orange-500 mr-1.5"/>
                                <p className="text-xs">
                                    <span className="font-semibold text-[13px] leading-tight text-[#262A4F]">{data.title}:</span> {data.text}
                                </p>
                            </li>
                        ))}
                    </motion.ul>
                </div>

            </div>
            <StatsSection />
            {/* <Features /> */}
            <div className="w-full p-3 lg:p-5 mt-10 flex flex-col items-center">
                <motion.h2 {...scrollUp} className="text-3xl font-bold mb-2 text-orange-500 text-center">How We Work</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl mx-auto mb-5 text-center text-[13px] md:text-sm">
                    Our goal is simple, deliver strong, safe and reliable structures 
                    you can depend on.
                </motion.p>
                <div className="w-full p-2 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {about_process.map((process) => (
                        <motion.div 
                        {...scrollUp}
                            className="px-5 py-8 flex flex-col items-left rounded-xl shadow-sm hover:shadow-lg transition duration-300">
                            <h3 className="text-sm md:text-base font-semibold text-[#262A4F]">
                                {process.title}
                            </h3>
                            <p className="mt-2 text-[13px] md:text-sm text-gray-700">
                                {process.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full h-auto flex flex-col lg:flex lg:flex-row px-5 py-10 items-center justify-evenly mt-10">
                <motion.img {...scrollLeft} src={aboutSlider} className="object-cover lg:w-[45%] w-full h-[30%] md:h-100 lg:h-full rounded-xl"/>
                <div className="lg:w-[45%] w-full h-[50%] lg:h-full flex flex-col lg:px-5 py-2 justify-between items-center space-y-3 mt-5 lg:mt-0">
                    {about_data.map((data) => (
                        <motion.div {...scrollUpNext} {...cardHover}  className="bg-white w-full h-auto flex flex-row items-center lg:justify-center justify-left shadow-sm rounded-xl hover:shadow-lg px-3 py-3 transition">
                            <data.icon  className="hidden md:flex w-12 h-12 text-orange-500 mr-2 p-3 rounded-full bg-orange-100"/>
                            <div className="w-110 h-full p-2">
                                <h3 className="font-bold bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text text-xl mt-5 mb-1 sm:mt-6">
                                    {data.title}
                                </h3>
                                <p className="text-[10px] md:text-xs text-gray-500">{data.text}</p>
                            </div>
                    </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center mt-15">
                <motion.h2 {...scrollUp} className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 text-center">Our Safety & Quality Preferences</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600  mb-5 text-center text-[13px] md:text-sm md:w-130">
                    Every project we undertake follows strict safety and quality principles.
                </motion.p>
                <div className="p-2 lg:p-5 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {about_preferences.map((data) => (
                        <motion.div {...scrollRight} className="p-5 rounded-xl flex flex-col items-left shadow-sm hover:shadow-lg transition">
                            <data.icon  className="w-12 h-12 p-3.5 rounded-full bg-orange-50 text-orange-500"/>
                            <h3 className="mt-3 font-semibold text-[#262A4F]">
                                {data.title}
                            </h3>
                            <p className="text-[13px] mt-2 text-gray-600">
                                {data.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Teams />
            
            <TestimonialSection />
            <ScrollToUpBtn />
            <Footer />
        </>
    );
}