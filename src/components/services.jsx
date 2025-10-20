import service1 from "../images/services/Construction.jpg"
import service2 from "../images/services/architecture.jpg"
import service3 from "../images/services/modelling.jpg"
import service4 from "../images/services/interior.jpg"
import service5 from "../images/services/manegement.jpg"
import service6 from "../images/services/civil.jpg"
import { FaBuilding, FaDraftingCompass, FaTools, FaPaintRoller, FaProjectDiagram, FaRoad } from "react-icons/fa";
import { motion } from "framer-motion"
import { cardHover, scrollUp, cardZoomIn, scrollUpNext, scrollLeft, scrollRight} from "../animations/motion"
const services = [
    {
        id : 1,
        img : service1,
        service : 'General Construction',
        icon : <FaBuilding />
    },
    {
        id : 2,
        img : service2,
        service : 'Architectural Design',
        icon : <FaDraftingCompass />
    },
    {
        id : 3,
        img : service3,
        service : 'Renovation & Remodeling',
        icon : <FaTools />
    },
    {
        id : 4,
        img : service4,
        service : 'Interior & Exterior Finishing',
        icon : <FaPaintRoller />
    },
    {
        id : 5,
        img : service5,
        service : 'Project Management',
        icon : <FaProjectDiagram />
    },
    {
        id : 6,
        img : service6,
        service : 'Civil Engineering Works',
        icon : <FaRoad />
    }
]

export default function ServicesComponents(){
    return(
        <>
            <div className="w-full h-auto flex flex-col items-center justify-evenly mt-15">
                <motion.h2 {...scrollUp} className="text-3xl font-bold mt-3 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent h-10">Our Services</motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl mx-auto mb-12 text-center text-xs md:text-sm">Showcasing our commitment to quality construction and design excellence.</motion.p>
            </div>
            {/* <h2 className="text-3xl font-semibold w-full h-15 flex items-center justify-center mb-5 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Our Services</h2> */}
            <div className="mt-5 w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 py-5">
                {services.map((data) =>(
                    <motion.div {...scrollRight} className="w-[90%] h-85 mb-10 relative group">
                        <img src={data.img} className="w-full h-full object-cover group-hover:scale-95 transition-all duration-500"/>
                        <div className="absolute inset-0 bg-black/60 w-full h-[18%] mt-70">
                            <div className="relative w-full h-full">
                            <div className="absolute w-12 h-12 top-[-65%] right-5 rounded-full hover:rounded-sm hover:cursor-pointer bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center text-white text-xl animate-bounce">
                                {data.icon}
                            </div>
                                <h3 className="text-white font-semibold m-5 text-md">{data.service}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
                
            </div>
        </>
    );
}