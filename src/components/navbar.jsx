import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { scrollUp } from "../animations/motion";
import { motion } from "framer-motion";
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <nav className="w-full relative flex justify-between items-center px-8 py-4 border-b border-orange-200 ">
            <NavLink to="/" className="font-bold text-3xl bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent flex">Structura</NavLink>
            <ul className="hidden md:flex items-center mr-10">
                <li className="w-20 h-10 text-sm flex items-center justify-center cursor-pointer font-semibold transition-all duration-200">
                    <NavLink to="/" end className={({isActive}) => `transition-all duration-300 font-semibold ${isActive ? 'text-orange-500' : 'text-[#262A3F] hover:text-orange-500'}`}>Home</NavLink>
                </li>
                <li className="w-25 h-10 text-sm flex items-center justify-center cursor-pointer font-semibold text-[#263A3F] hover:font-bold">
                    <NavLink to="/about" className={({isActive}) => `transition-all duration-300 font-semibold ${isActive ? 'text-orange-500' : 'text-[#262A3F] hover:text-orange-500'}`}>About</NavLink>
                </li>
                <li className="w-25 h-10 text-sm flex items-center justify-center cursor-pointer font-semibold text-[#263A3F] hover:font-bold">
                    <NavLink to="/services" className={({isActive}) => `transition-all duration-300 font-semibold ${isActive ? 'text-orange-500' : 'text-[#262A3F] hover:text-orange-500'}`}>Services</NavLink>
                </li>
                <li className="w-25 h-10 text-sm flex items-center justify-center cursor-pointer font-semibold text-[#263A3F] hover:font-bold transition-all duration-500">
                    <NavLink to="/projects" className={({isActive}) => `transition-all duration-300 font-semibold ${isActive ? 'text-orange-500' : 'text-[#262A3F] hover:text-orange-500'}`}>Projects</NavLink>
                </li>
                <li className="w-25 h-10 text-sm flex items-center justify-center cursor-pointer font-semibold text-[#263A3F] hover:font-bold">
                    <NavLink to="/contacts" className={({isActive}) => `transition-all duration-300 font-semibold ${isActive ? 'text-orange-500' : 'text-[#262A3F] hover:text-orange-500'}`}>Contacts</NavLink>
                </li>
                <button className="w-40 h-11 cursor-pointer rounded-sm ml-5 bg-linear-to-r from-orange-500 to-orange-400 hover:shadow-xl">
                    <NavLink to="#" className="text-white font-semibold text-sm hover:text-[#263A4F]">
                        Request a Qoute
                    </NavLink>
                </button>
            </ul>
            <button className="md:hidden flex sm:flex cursor-pointer mr-5 text-orange-500" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaTimes size={25}/> : <FaBars size={25} />}</button>
            {isOpen && (
                <motion.div {...scrollUp} className="md:hidden w-full h-auto flex flex-col absolute top-17 z-1000 left-0 bg-gradient-to-r from-orange-500 to-orange-400 p-2">
                    <ul className="flex flex-col space-y-3">
                        <li>
                            <NavLink to='/' className="flex items-center w-full text-left h-10 border-1 border-orange-400 hover:bg-orange-400 cursor-pointer hover:font-semibold text-white text-sm p-3 rounded-sm transition-all duration-300">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className="flex items-center w-full text-left h-10 border-1 border-orange-400 hover:bg-orange-400 cursor-pointer hover:font-semibold text-white text-sm p-3 rounded-sm transition-all duration-300">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' className="flex items-center w-full text-left h-10 border-1 border-orange-400 hover:bg-orange-400 cursor-pointer hover:font-semibold text-white text-sm p-3 rounded-sm transition-all duration-300">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className="flex items-center w-full text-left h-10 border-1 border-orange-400 hover:bg-orange-400 cursor-pointer hover:font-semibold text-white text-sm p-3 rounded-sm transition-all duration-300">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacts' className="flex items-center w-full text-left h-10 border-1 border-orange-400 hover:bg-orange-400 cursor-pointer hover:font-semibold text-white text-sm p-3 rounded-sm transition-all duration-300">Contacts</NavLink>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
        </>
    );
}