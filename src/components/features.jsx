import { FaShieldAlt, FaUsersCog, FaHardHat, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { cardHover, scrollRight } from "../animations/motion";
export default function Features(){
    return(
        <>
            <motion.div {...scrollRight} className="w-full md:h-100 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 py-17">
                <motion.div {...cardHover} className="w-[95%] h-65 mb-5 md:mb-0 md:h-full p-5 flex flex-col items-center shadow-lg">
                    <FaShieldAlt  className="mt-5 w-10 h-10 text-orange-500 mb-5"/>
                    <h2 className="text-lg text-[#263A4F] font-semibold mb-3">Professional Liability</h2>
                    <p className="text-center text-sm">We take full responsibility for every project we deliver, ensuring safety and accountability at every stage.</p>
                </motion.div>
                <motion.div {...cardHover} className="w-[95%] h-65 mb-5 md:mb-0 md:h-full p-5 flex flex-col items-center shadow-lg">
                    <FaUsersCog  className="mt-5 w-10 h-10 text-orange-500 mb-5"/>
                    <h2 className="text-lg text-[#263A4F] font-semibold mb-3">Dedicated Team</h2>
                    <p className="text-center text-sm">Our skilled professionals bring experience, precision, and teamwork to every construction challenge.</p>
                </motion.div>
                <motion.div {...cardHover} className="w-[95%] h-65 mb-5 md:mb-0 md:h-full p-5 flex flex-col items-center shadow-lg">
                    <FaHardHat  className="mt-5 w-10 h-10 text-orange-500 mb-5"/>
                    <h2 className="text-lg text-[#263A4F] font-semibold mb-3">Quality Assurance</h2>
                    <p className="text-center text-sm">From design to finishing, we maintain strict standards to guarantee durable and flawless results.</p>
                </motion.div>
                <motion.div {...cardHover} className="w-[95%] h-65 mb-5 md:mb-0 md:h-full p-5 flex flex-col items-center shadow-lg">
                    <FaShieldAlt  className="mt-5 w-10 h-10 text-orange-500 mb-5"/>
                    <h2 className="text-lg text-[#263A4F] font-semibold mb-3">Timely Delivery</h2>
                    <p className="text-center text-sm">We value your time — delivering every project efficiently without compromising on quality.</p>
                </motion.div>
            </motion.div>
        </>
    );
}