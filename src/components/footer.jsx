import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cardHover, cardTaps, scrollLeft } from "../animations/motion";
import { FaBuilding, FaMobile, FaEnvelope, FaTwitter, FaInstagram, FaLinkedin, FaFacebook} from "react-icons/fa";
export default function Footer(){
    const dates  = new Date().getFullYear();
    return(
        <>
            <footer className="max-auto mx-w-7xl bg-[#1E293B] py-10 px-8">
                <div className="flex items-center">   
                    <Link to='/' className="text-3xl text-white hover:text-orange-400 transition-all duration-300 font-bold">Structura</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  mt-5 py-5">
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-white mb-2">
                            About
                        </h3>
                        <p className="text-[#CBD5E1] text-sm text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores deserunt vitae, nisi sit enim modi cum, eligendi distinctio voluptates, voluptatum quo fugiat quae dolorum! Dolore fuga id voluptas. Aliquid!
                        </p>
                        
                    </div>
                    <div className="flex flex-col md:ml-20">
                        <h3 className="font-semibold text-white mb-2">
                            Links
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link to="/" className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacts" className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Contacts
                                </Link>
                            </li>
                            
                            
                        </ul>   
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-white mb-2">
                            Services
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Construction
                                </Link>
                            </li>
                            <li>
                                <Link className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Architechtureal Designs
                                </Link>
                            </li>
                            <li>
                                <Link className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Renovation &amp; Remodelling
                                </Link>
                            </li>
                            <li>
                                <Link className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Interior &amp; Exterior Designs
                                </Link>
                            </li>
                            <li>
                                <Link className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    Project Management
                                </Link>
                            </li>
                        </ul>   
                    </div>
                    
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-white mb-2">
                            Contact
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link to="/" className="text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    C-11 Legacy Ariston Apartment, Mahalaxmi Layout, Ananthapura, Yelahanka, Bangalore- 560064 
                                </Link>
                            </li>
                            <li>
                                <Link to="phoneto:+2349131580378" className="flex  items-center text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    <FaMobile  className="mr-1 mt-1"/> (+234 913 1580 378) 
                                </Link>
                            </li>
                            <li>
                                <Link to="mailto:oyinbook@gmail.com" className="flex items-center text-[#CBD5E1] hover:text-orange-400 transition-all duration-500 text-sm">
                                    <FaEnvelope  className="mr-1 mt-1"/> oyinbook@gmail.com
                                </Link>
                            </li>    
                        </ul>   
                    </div>
                </div>
                <div className="w-full h-0.2 my-2 border-1 border-[#334155]"></div>
                <div className="w-full h-auto flex flex-row justify-between items-center">
                    <p className="text-sm text-white">&copy; {dates} Structura. All right reserved</p>
                    <div className="w-35 h-8 flex flex-row items-center justify-evenly">
                    <Link to="#">
                        <FaFacebook  className="text-white hover:cursor-pointer hover:text-orange-400 transition-all duration-300"/>
                    </Link>
                    <Link to="#">
                        <FaTwitter  className="text-white hover:cursor-pointer hover:text-orange-400 transition-all duration-300"/>
                    </Link>
                    <Link to="#">
                        <FaInstagram  className="text-white hover:cursor-pointer hover:text-orange-400 transition-all duration-300"/>
                    </Link>
                    <Link to="#">
                        <FaLinkedin  className="text-white hover:cursor-pointer hover:text-orange-400 transition-all duration-300"/>
                    </Link>

                    </div>
                </div>
            </footer>
        </>
    );
}