import Header from "../components/Header";
import PartnersSlider from "../components/logoSlider";
import NavBar from "../components/navbar";
// import contactsBg from '../images/sharps/sharps (1).jpg'
import contactsBg from '../images/sharps/pressed (5).webp'
import { FaMap, FaMobile, FaEnvelope, FaGlobe} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cardHover, cardTaps } from "../animations/motion";
import Footer from "../components/footer";


export default function Contacts(){
    return(
        <>
            <NavBar />
            <Header 
                page = 'Contacts'
                img = {contactsBg}
            />
            <div className="w-full md:h-120 h-auto p-5 md:flex md:flex-row flex flex-col justify-evenly items-center mt-10">
                <div className="w-full md:w-[45%] h-full p-5 flex flex-col">
                <h3 className="text-3xl mt-5 mb-3 font-semibold tex-[#262A3F]">
                    Get in touch with us &
                    send us message today!
                </h3>
                <p className="text-justify text-sm mb-5">
                    Redison is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.
                </p>
                <p className="text-justify text-sm mb-5">
                    C-11 Legacy Ariston Apartment, Mahalaxmi Layout, Ananthapura, Yelahanka, Bangalore- 560064 Mobile: 08497-038877
                </p>
                <p className="mt-3 flex items-center text-[#262A5F]">
                    <FaMap className="mr-2 text-orange-500"/> <span className="text-[#262A3F]">Address</span> : 2400 South Avenue A
                </p>
                <p className="mt-3 flex items-center text-[#262A5F]">
                    <FaMobile className="mr-2 text-orange-500"/> <span className="text-[#262A3F]">Phone</span> : <Link to="phoneto:+2349131580378" className="font-semibold">+2349131580378</Link>
                </p>
                <p className="mt-3 flex items-center">
                    <FaEnvelope className="mr-2 text-orange-500"/> <span className="text-[#262A3F]">Email</span> :  <Link to="mailto:oyinbook@gmail.com" className="ml-2 text-[#262A4F] font-semibold hover:text-orange-500">oyinbook@gmail.com</Link>
                </p>
                <p className="mt-3 flex items-center">
                    <FaGlobe className="mr-2 text-orange-500"/> <span className="text-[#262A3F]">Website</span>: <Link to="http://www.structura.com" className="ml-2 text-[#262A4F] font-semibold hover:text-orange-500">Structura &amp; Buildify</Link>
                </p>
                </div>
                <div className="w-full md:w-[45%] h-full px-3 py-10 shadow-sm hover:shadow-md hover:rounded-sm transition-all duration-300">
                    <form action="" className="w-full h-full">
                        <div className="w-full h-auto flex justify-evenly items-center mb-5">
                            <input type="text" placeholder="Name:"  className="w-[48%] h-11 text-sm p-2 text-[#262A3F] outline-none border-1 border-[#262A4F] hover:rounded-sm transition-all duration-500 hover:border-1 hover:border-orange-500"/>
                            <input type="email" placeholder="Email:"  className="w-[48%] h-11 text-sm p-2 text-[#262A3F] outline-none border-1 border-[#262A4F] hover:rounded-sm transition-all duration-500 hover:border-1 hover:border-orange-500"/>
                        </div>
                        <input type="text" placeholder="Subject" className="w-[97%] h-11 ml-1.5 text-sm p-2 text-[#262A3F] outline-none border-1 border-[#262A4F] mb-5 hover:rounded-sm transition-all duration-500 hover:border-1 hover:border-orange-500" />
                        <textarea name="text" id="" className="w-[97%] h-35 ml-1.5 text-sm p-2 text-[#262A3F] outline-none border-1 border-[#262A4F] mb-5 hover:rounded-sm transition-all duration-500 hover:border-1 hover:border-orange-500" placeholder="Message:">
                        </textarea>
                        <motion.button {...cardHover} {...cardTaps} className="w-40 h-11 ml-1.5 font-semibold bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-sm cursor-pointer">
                            Send Message
                        </motion.button>
                    </form>
                </div>

                
            </div>
            <PartnersSlider />
            <Footer />
        </>
    );
}