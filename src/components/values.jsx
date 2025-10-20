import { motion } from "framer-motion";
import { scrollUp, scrollUpNext, cardHover, scrollLeft} from "../animations/motion";
import { FaHardHat } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import {RiLightbulbFlashFill} from "react-icons/ri"
import {MdSupportAgent} from "react-icons/md"

export default function Values (){
    const values = [
        {
            id: 1, 
            title : 'Experienced Professionals',
            icon : <FaHardHat  className="w-10 h-10 text-orange-500 cursor-pointer"/>,
            desc : 'Our skilled engineers, architects, and builders bring decades of hands-on experience to every project- ensuring precision, efficiency, and unmatched quality'
        },
        {
            id: 2, 
            title : 'Quality Construction',
            icon : <GiBrickWall className="w-10 h-10 text-orange-500 cursor-pointer"/>,
            desc : 'We combine modern techniques with durable materials to build structures that last -- meeting the highest standards of safety and performance'
        },
        {
            id: 3, 
            title : 'Innovative Solutions',
            icon : <RiLightbulbFlashFill className="w-10 h-10 text-orange-500 cursor-pointer"/>,
            desc : 'From planning to execution, we use advanced tools and smart technologies to deliver creative, cost-effective and sustainable building solutions'
        },
        {
            id: 4, 
            title : 'Reliable Support',
            icon : <MdSupportAgent className="w-10 h-10 text-orange-500 cursor-pointer" />,
            desc : 'We believe in long-term partnerships. Our dedicated support team ensures smooth communication and timely project delivery -- every time'
        },
    ]
    return(
        <>
            <div className="max-w-6xl mx-auto text-center mb-10 px-6 mt-10">
                <motion.h2 {...scrollUp} className="h-10 text-3xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">The Core of Our Construction</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 text-xs md:text-sm">Behind every successful project is a passionate team committed to quality, safety, and excellence in all aspects of construction.</motion.p>
            </div>
            {/* <div className="w-full h-auto flex flex-col items-center justify-evenly mt-15">
                <motion.h2 {...scrollUp} className="text-3xl font-bold mt-3 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent h-10 mb-5">The Core of Our Construction Values</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl mx-auto mb-10 text-center text-sm">Behind every successful project is a passionate team committed to quality, safety, and excellence in all aspects of construction.</motion.p>
            </div> */}
            <motion.div {...scrollLeft} className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
            {values.map((data) =>(
                <motion.div {...cardHover}  className="md:w-[95%] md:h-full w-[90%] mb-10 md:mb-0 h-60 flex flex-col items-center p-5 shadow-md">
                    <div className="mb-5 mt-3">
                    {data.icon}
                    </div>
                    <h3 className="text-[#263A4F] font-semibold mb-3">{data.title}</h3>
                    <p className="text-center text-xs mb-10">{data.desc}</p>
                </motion.div>
            ))}
            </motion.div>
        </>
    );
}