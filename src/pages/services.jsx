import Header from "../components/Header";
import PartnersSlider from "../components/logoSlider";
import NavBar from "../components/navbar";
import aboutHeader from '../images/header/not (3).jpg'
import ServicesComponents from "../components/services";
import Values from "../components/values";
import Footer from "../components/footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { scrollLeft, scrollUp, scrollUpNext } from "../animations/motion";
import { benefits } from "../data/service";
import FAQS from "../components/faq";
import { useLocation } from "react-router-dom";

export default function Services(){
    useEffect(() =>{
        document.title = 'Services | Structura_Construction'
    }, []);
    const {hash} = useLocation();
    useEffect(() => {
        if(hash){
            const elements = document.querySelector(hash);
            if(elements){
                elements.scrollIntoView({behavior : "smooth"})
            }
        }
    })
    return(
        <>
            <NavBar />
            <Header 
            img = {aboutHeader}
            page = 'Services'
            />
            <ServicesComponents />
            <Values />
            <div className="w-full p-3 lg:p-10 mt-10 bg-gray-50 flex flex-col items-center">
                <motion.h2 {...scrollUp} className="h-10 text-3xl font-bold mt-10 lg:mt-0 mb-3 bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">Our Client Advantage</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 text-xs md:text-sm text-center">Your projects completed on time, within budget, and exceeding expectations every step of the way.</motion.p>
                <div className="w-full p-2 lg:p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {benefits.map((service) => (
                        <motion.div {...scrollLeft} className="px-5 py-8 flex flex-col items-left rounded-lg shadow-sm hover:shadow group hover:shadow-lg transition">
                            <service.icon  className="w-10 h-10 p-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 text-white transition duration-400"/>
                            <h3 className="text-sm font-semibold text-[#262A4F] mt-3">
                                {service.title}
                            </h3>
                            <p className="text-[13px] mt-2 text-gray-600">
                                {service.subheading}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <PartnersSlider />
            <FAQS />
            <Footer />
        </>
    );
}