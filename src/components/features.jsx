import { FaShieldAlt, FaUsersCog, FaHardHat, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { cardHover, scrollRight } from "../animations/motion";
import { features_data } from "../data/home";
export default function Features(){
    return(
        <>
            <motion.div {...scrollRight} className="w-full lg:h-100 h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-10 px-5 py-17">
                {features_data.map((data) => (
                    <motion.div {...cardHover} className="w-full h- mb-5 lg:mb-0 lg:h-full px-5 py-8 md:py-5 flex flex-col items-center shadow-lg hover:shadow-xl rounded-xl group transition">
                        <data.icon  className="mt-5 w-10 h-10 text-orange-500 mb-5 cursor-pointer"/>
                        <h2 className="text-lg text-[#263A4F] font-semibold mb-3 group-hover:text-orange-500 transition">{data.title}</h2>
                        <p className="text-center text-sm">{data.text}</p>
                    </motion.div>
                ))} 
            </motion.div>
        </>
    );
}