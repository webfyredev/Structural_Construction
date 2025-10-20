import { useState, useEffect } from "react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { cardTaps } from "../animations/motion";
import { motion } from "framer-motion";
export default function ScrollToUpBtn(){
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 300){
                setIsVisible(true);
            } else{
                setIsVisible(false);
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () =>{
        window.scrollTo({
            top :0,
            behavior : "smooth",
        });
    };
    return (
        isVisible && (
            <motion.button {...cardTaps} onClick={scrollToTop} className="fixed bottom-5 right-5 bg-gradient-to-r from-orange-500 to-orange-400 hover:cursor-pointer text-white p-3 rounded-full shadow-lg transition-all duration-300 outline-none">
                <FaArrowUp />
            </motion.button>
        )
    );

}