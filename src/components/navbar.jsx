import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { scrollUp } from "../animations/motion";
import { motion } from "framer-motion";
import logo from '../images/logo.png'
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <nav className="w-full relative flex justify-between items-center px-3 md:px-8 py-4 border-b border-orange-200 ">
            <NavLink to="/" className="font-bold text-xl bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent flex items-center">
                <img src={logo} className="w-8 h-auto" />
                STRUCTURA
            </NavLink>
            <ul className="hidden md:hidden lg:flex items-center mr-10">
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
                    <NavLink to="#" className="text-white font-semibold text-sm hover:text-orange-100 transition">
                        Request a Qoute
                    </NavLink>
                </button>
            </ul>
            <button className="lg:hidden flex md:flex cursor-pointer mr-3 text-orange-500" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaTimes size={20}/> : <FaBars size={20} />}</button>
            {isOpen && (
                <motion.div {...scrollUp} className="lg:hidden w-full h-auto flex flex-col absolute top-16 z-1000 left-0 p-2 bg-gray-50 shadow-lg">
                    <ul className="flex flex-col space-y-3 mb-5">
                        <li>
                            <NavLink to='/' className="flex items-center w-full text-left h-10 text-orange-500 hover:bg-orange-100 cursor-pointer hover:font-semibold text-[13px] px-3 py-3 md:px-6 rounded-sm transition-all duration-300">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className="flex items-center w-full text-left h-10 text-orange-500 hover:bg-orange-100 cursor-pointer hover:font-semibold text-[13px] px-3 py-3 md:px-6 rounded-sm transition-all duration-300">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' className="flex items-center w-full text-left h-10 text-orange-500 hover:bg-orange-100 cursor-pointer hover:font-semibold text-[13px] px-3 py-3 md:px-6 rounded-sm transition-all duration-300">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className="flex items-center w-full text-left h-10 text-orange-500 hover:bg-orange-100 cursor-pointer hover:font-semibold text-[13px] px-3 py-3 md:px-6 rounded-sm transition-all duration-300">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacts' className="flex items-center w-full text-left h-10 text-orange-500 hover:bg-orange-100 cursor-pointer hover:font-semibold text-[13px] px-3 py-3 md:px-6 rounded-sm transition-all duration-300">Contacts</NavLink>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
        </>
    );
}