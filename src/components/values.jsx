import { motion } from "framer-motion";
import { scrollUp, scrollUpNext, cardHover, scrollLeft, scrollRight} from "../animations/motion";
import { FaHardHat } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import {RiLightbulbFlashFill} from "react-icons/ri"
import {MdSupportAgent} from "react-icons/md"
import { core_values } from "../data/service";

export default function Values (){
    return(
        <>
            <div className="w-full flex flex-col items-center p-3 lg:p-10 mt-10">
                <motion.h2 {...scrollUp} className="h-10 text-3xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">Why Clients Trusts Us</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 text-xs md:text-sm text-center">Building with integrity, precision, and long-term value, for every project, every time.</motion.p>
                <div className="w-full p-2 lg:p-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {core_values.map((service) => (
                        <motion.div {...scrollRight} className="px-5 py-8 rounded-xl flex flex-col items-center bg-[#F7F7F7] shadow-xs hover:shadow-lg transition duration-300">
                            <service.icon  className="w-12 h-12  p-3 rounded-full text-orange-500 bg-orange-50"/>
                            <h3 className="mt-3 font-semibold text-[#262A4F] ">
                                {service.title}
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2 text-center">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}