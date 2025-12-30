import Header from "../components/Header";
import PartnersSlider from "../components/logoSlider";
import NavBar from "../components/navbar";
// import contactsBg from '../images/sharps/sharps (1).jpg'
import contactsBg from '../images/header/lot (1).jpg'
import { FaMap, FaMobile, FaEnvelope, FaGlobe, FaPaperPlane} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cardHover, cardTaps } from "../animations/motion";
import Footer from "../components/footer";
import { useEffect } from "react";


export default function Contacts(){
    const {hash} = useLocation();
    useEffect(() => {
        if(hash){
            const elements = document.querySelector(hash);
            if(elements){
                elements.scrollIntoView({behavior : "smooth"})
            }
        }
    })
    useEffect(() =>{
        document.title = 'Contacts | Structura_Construction'
    },[]);
    return(
        <>
            <NavBar />
            <Header 
                page = 'Contacts'
                img = {contactsBg}
            />
            <div className="w-full lg:h-130 h-auto space-x-10 p-3 lg:p-10 lg:flex lg:flex-row flex flex-col justify-evenly items-center" id="contact">
                <div className="w-full lg:w-1/2 h-full p-5 flex flex-col">
                    <h3 className="md:text-2xl text-xl lg:text-3xl mt-5 mb-3 font-semibold text-[#262A3F]">
                        Get in touch with us &
                        send us message today!
                    </h3>
                    <p className="text-justify text-xs md:text-sm mb-5">
                        Redison is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.
                    </p>
                    <p className="text-justify text-xs md:text-sm mb-5">
                        C-11 Legacy Ariston Apartment, Mahalaxmi Layout, Ananthapura, Yelahanka, Bangalore- 560064 Mobile: 08497-038877
                    </p>
                    <p className="mt-3 flex items-center text-[#262A5F] text-[13px]">
                        <FaMap className="mr-2 text-orange-500"/> <span className="text-[#262A3F]">Address</span> : 2400 South Avenue A
                    </p>
                    <p className="mt-3 flex items-center text-[#262A5F] text-[13px]">
                        <FaMobile className="mr-2 text-orange-500"/> <span className="text-[#262A3F]">Phone</span> : <Link to="tel:/+2349131580378" className="font-semibold">+2349131580378</Link>
                    </p>
                    <p className="mt-3 flex items-center text-[13px]">
                        <FaEnvelope className="mr-2 text-orange-500"/> <span className="text-[#262A3F]">Email</span> :  <Link to="mailto:oyinbook@gmail.com" className="ml-2 text-[#262A4F] font-semibold hover:text-orange-500 transition duration-300">oyinbook@gmail.com</Link>
                    </p>
                    <p className="mt-3 flex items-center text-[13px]">
                        <FaGlobe className="mr-2 text-orange-500"/> <span className="text-[#262A3F]">Website</span>: <Link to="http://www.structura.com" className="ml-2 text-[#262A4F] font-semibold hover:text-orange-500 transition duration-300">Structura &amp; Buildify</Link>
                    </p>
                </div>
                {/* <div className="w-full lg:w-[45%] h-full p-5 shadow-lg rounded-xl transition-all duration-300"> */}
                <form action="" className="w-full lg:w-1/2 h-full p-2 lg:p-5 shadow-lg rounded-xl transition-all duration-300">
                    <div className="w-full h-auto md:flex md:flex-row md:items-center flex flex-col mb-5 space-x-3 space-y-5 md:space-y-0">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <label htmlFor="" className="text-xs font-semibold mb-1 text-[#262A3F]">Full Name *</label>
                            <input type="text" placeholder="Enter your name"  className="w-full h-10 text-[13px] p-2 text-[#262A3F] outline-none border-1 border-gray-200 hover:border-2 hover:border-orange-200 rounded-sm transition-all duration-500"/>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col">
                            <label htmlFor="" className="text-xs font-semibold mb-1 text-[#262A3F]">Email *</label>
                            <input type="email" placeholder="Enter your email"  className="w-full h-10 text-[13px] p-2 text-[#262A3F] outline-none border-1 border-gray-200 hover:border-2 hover:border-orange-200 rounded-sm transition-all duration-500"/>
                        </div>
                        {/* <input type="email" placeholder="Email:"  className="w-[48%] h-11 text-sm p-2 text-[#262A3F] outline-none border-1 border-[#262A4F] hover:rounded-sm transition-all duration-500 hover:border-1 hover:border-orange-500"/> */}
                    </div>
                    <div className="w-full flex flex-col mb-5">
                        <label htmlFor="" className="text-xs font-semibold mb-1 text-[#262A3F]">Subject </label>
                        <input type="text" placeholder="Subject"  className="w-full h-10 text-[13px] p-2 text-[#262A3F] outline-none border-1 border-gray-200 hover:border-2 hover:border-orange-200 rounded-sm transition-all duration-500"/>
                    </div>
                    <div className="w-full flex flex-col mb-5">
                        <label htmlFor="" className="text-xs font-semibold mb-1 text-[#262A3F]">Message *</label>
                        <textarea name="" id="" type="text" placeholder="Send us a message to construct for you ...." className="w-full h-25 md:h-35 text-[13px] p-2 text-[#262A3F] outline-none border-1 border-gray-200 hover:border-2 hover:border-orange-200 rounded-sm transition-all duration-500"></textarea>
                    </div>
                    <motion.button {...cardHover} {...cardTaps} className="w-40 h-11 ml-1.5 font-semibold bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm md:text-base rounded-sm cursor-pointer flex items-center px-3 mb-5 lg:mb-0">
                        Send Message <FaPaperPlane  className="ml-1 w-3 h-3 mt-1"/>
                    </motion.button>
                </form>
                {/* </div> */}

                
            </div>
            <PartnersSlider />
            <Footer />
        </>
    );
}