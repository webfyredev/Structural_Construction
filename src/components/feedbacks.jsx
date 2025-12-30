import { motion } from "framer-motion";
import { scrollRight, scrollUp, scrollUpNext } from "../animations/motion";
import { feedbacks } from "../data/project";
import { FaQuoteLeft } from "react-icons/fa";
export default function Projects_Feedbacks(){
    return(
        <>
            <div className="w-full p-3 lg:p-10 flex flex-col items-center mb-5">
                <motion.h2 {...scrollUp} className="text-2xl md:text-3xl font-bold mt-10 lg:mt-3 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent h-10 text-center">Projects Feedbacks</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl  mb-5 md:mb-5 text-center text-xs md:text-sm">
                    Trusted by homeowners, businesses, and developers across Nigeria.
                </motion.p>   
                <div className="w-full lg:w-[90%] p-2 lg:p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {feedbacks.map((feedbacks) => (
                        <motion.div {...scrollRight} className="p-5 rounded-xl shadow-sm flex flex-col items-left hover:shadow-lg transition">
                                <FaQuoteLeft  className="text-orange-500 text-2xl mb-3"/>
                                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                                    {feedbacks.text}
                                </p>
                                <h4 className="font-semibold text-[#262A4F] text-[13px]">{feedbacks.name}</h4>
                                <p className="text-sm text-gray-500 text-[12px]">{feedbacks.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}