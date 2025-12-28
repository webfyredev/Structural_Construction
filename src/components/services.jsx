import service1 from "../images/services/const.jpg"
import service2 from "../images/services/arch.jpg"
import service3 from "../images/services/serv3.jpg"
import service4 from "../images/services/serv4.jpg"
import service5 from "../images/services/serv5.jpg"
import service6 from "../images/services/serv6.jpg"
import { FaBuilding, FaDraftingCompass, FaTools, FaPaintRoller, FaProjectDiagram, FaRoad } from "react-icons/fa";
import { motion } from "framer-motion"
import { cardHover, scrollUp, cardZoomIn, scrollUpNext, scrollLeft, scrollRight} from "../animations/motion"
const services = [
    {
        id : 1,
        img : service1,
        service : 'General Construction',
        text : 'Complete construction services for residential and commercial projects.',
        icon : <FaBuilding />
    },
    {
        id : 2,
        img : service2,
        service : 'Architectural Design',
        text  : 'Creative building designs combining aesthetics with functionality.',
        icon : <FaDraftingCompass />
    },
    {
        id : 3,
        img : service3,
        service : 'Renovation & Remodeling',
        text : 'Transform old spaces into modern, functional areas.',
        icon : <FaTools />
    },
    {
        id : 4,
        img : service4,
        service : 'Interior & Exterior Finishing',
        text : 'Polished interiors and facades for a premium look.',
        icon : <FaPaintRoller />
    },
    {
        id : 5,
        img : service5,
        service : 'Project Management',
        text : 'Professional planning and management for timely completion.',
        icon : <FaProjectDiagram />
    },
    {
        id : 6,
        img : service6,
        service : 'Civil Engineering Works',
        text : 'Structural, foundation, and infrastructure expertise.',
        icon : <FaRoad />
    }
]

export default function ServicesComponents(){
    return(
        <>
            <div className="w-full h-auto flex flex-col items-center justify-evenly mt-15">
                <motion.h2 {...scrollUp} className="text-3xl font-bold mt-3 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent h-10">Our Services</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl mx-auto mb-10 text-center text-xs md:text-sm">Showcasing our commitment to quality construction and design excellence.</motion.p>
            </div>
            {/* <h2 className="text-3xl font-semibold w-full h-15 flex items-center justify-center mb-5 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Our Services</h2> */}
            <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 p-5 gap-5">
                {services.map((data) =>(
                    <motion.div key={data.id} {...scrollRight} className="w-full h-75 lg:h-85 mb-5 relative group rounded-xl overflow-hidden">
                        <img src={data.img} className="w-full h-full object-cover transition-all duration-500 rounded-xl hover:scale-110"/>
                        <motion.div {...scrollUp} className="absolute inset-0 bg-black/60 w-full h-auto mt-62  lg:mt-70 lg:group-hover:mt-65 rounded-b-xl flex flex-col items-left">
                            {/* <div className="w-full h-auto space-y-3"> */}
                                <a href="#" className="text-white font-semibold ml-5 mt-3 text-md hover:text-orange-100 transition">{data.service}</a>
                                <motion.p {...scrollUp} className="hidden lg:flex group-hover:flex text-white text-xs ml-5 mt-1 italic">
                                    {data.text}
                                </motion.p>
                            {/* </div> */}
                        </motion.div>
                    </motion.div>
                ))}
                
            </div>
        </>
    );
}