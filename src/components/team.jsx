import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import team1 from '../images/team/team (1).jpg'
import team2 from '../images/team/team (2).jpg'
import team3 from '../images/team/team (3).jpg'
import team4 from '../images/team/team (4).jpg'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scrollUp, scrollUpNext, scrollRight, scrollLeft } from "../animations/motion";

const team = [
    {
        id : 1,
        image : team1,
        role : 'Project Manager',
        name: 'Micheal Bolms',
        f_url : "http://facebook23600.com",
        t_url : 'http://x_2141.com',
        l_url : 'http://linkedin3422.com',
        i_url : 'https:instagram@10405.com'
    },
    {
        id : 2,
        image : team2,
        role : 'Site Supervisor',
        name: 'Jessie Longs',
        f_url : "http://facebook1232.com",
        t_url : 'http://x_0943.com',
        l_url : 'http://linkedin3211.com',
        i_url : 'https:instagram@21405.com'
    },
    {
        id : 3,
        image : team3,
        role : 'Architect',
        name: 'Byloks Calles',
        f_url : "http://facebook33942.com",
        t_url : 'http://x_24225.com',
        l_url : 'http://linkedin3042.com',
        i_url : 'https:instagram@1045049.com'
    },
    {
        id : 4,
        image : team4,
        role : 'Civil Engineer',
        name: 'Rylian Kembalin',
        f_url : "http://facebook2342.com",
        t_url : 'http://x_23745.com',
        l_url : 'http://linkedin34643.com',
        i_url : 'https:instagram@134555.com'
    },

]

export default function Teams(){
    return (
        <>
            <section className="py-20 bg-white px-10">
                <div className="mx-auto text-ceter">
                    <motion.h2 {...scrollUp} className="text-3xl font-bold mb-2 text-orange-500 text-center">Meet our Expert Team</motion.h2>
                    <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl mx-auto mb-12 text-center text-sm">
                        Our strength lies in our people. Each team member brings innovation,
                        experience, and passion to every project we deliver.
                    </motion.p>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {team.map((data) =>(
                            <motion.div {...scrollRight} key={data.id} className="w-[95%] h-90 relative group overflow-hidden shadow-md hover:shadow-xl hover:rounded-sm mb-10 md:mb-0">
                                <img src={data.image} className="w-full h-[80%] object-cover group-hover:scale-105 transition-transform duration-700"/>
                                <div className="absolute top-4 right-4 flex-flex-col gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-1 rounded-sm">
                                    <Link to={data.f_url} className="text-white p-2 rounded-full">
                                        <FaFacebookF size={15} />
                                    </Link>
                                    <Link to={data.t_url} className="text-white p-2 rounded-full">
                                        <FaTwitter size={15} />
                                    </Link>
                                    <Link to={data.l_url} className="text-white p-2 rounded-full">
                                        <FaLinkedinIn size={15} />
                                    </Link>
                                    <Link to={data.i_url} className="text-white p-2 rounded-full">
                                        <FaInstagram size={15} />
                                    </Link>
                                </div>
                                <div className="absolute bottom-0 left-0 text-center py-4 w-full bg-white/90">
                                    <h3 className="text-sm font-semibold textgray-800">
                                        {data.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {data.role}
                                    </p>
                                </div>

                            </motion.div>
                        
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}