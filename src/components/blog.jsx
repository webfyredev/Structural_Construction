import { motion } from "framer-motion";
import { scrollUp, scrollUpNext, cardHover, cardTaps, scrollLeft} from "../animations/motion";
import blog1 from '../images/blogs/blog (1).jpg'
import blog2 from '../images/blogs/blog (2).jpg'
import blog3 from '../images/blogs/blog (3).jpg'
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
export default function Blog(){
    const blogs = [
    {
      id: 1,
      image: blog1,
      title: "Innovative Designs Shaping Modern Construction",
      description:
        "Discover how advanced design technologies are revolutionizing the construction industry, ensuring safer, faster, and more efficient projects.",
      date: "Oct 8, 2025",
      category: "Innovation",
    },
    {
      id: 2,
      image: blog2,
      title: "5 Safety Practices Every Construction Site Should Follow",
      description:
        "From gear to guidelines — here are top safety practices that guarantee a secure and efficient working environment for your team.",
      date: "Oct 3, 2025",
      category: "Safety",
    },
    {
      id: 3,
      image: blog3,
      title: "How We Build Trust with Every Project",
      description:
        "Building structures is one thing; building trust is another. Learn how our approach combines transparency, reliability, and dedication.",
      date: "Sep 25, 2025",
      category: "Trust",
    },
  ];
    return(
        <>
            <div className="w-full h-auto flex flex-col items-center justify-evenly mt-15">
            <motion.h2 {...scrollUp} className="text-3xl font-bold mt-3 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent h-10">From Our Blogs</motion.h2>
            <motion.p {...scrollUpNext} className="text-gray-600 max-w-2xl mx-auto  mb-5 md:mb-12 text-center text-xs md:text-sm">Stay updated with insights, trends, and innovations in the world of construction.</motion.p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-5 gap-5 p-5">
            {blogs.map((data) =>(
                <motion.div {...scrollLeft} className="w-full p-5 flex flex-col shadow-md rounded-sm group relative">
                    <div className="absolute md:top-55 sm:top-45 top-60 lg:top-55 right-7 text-xs font-semibold rounded-sm hover:cursor-pointer text-white px-7 py-1.5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-gradient-to-r from-orange-500 to-orange-400 z-1">
                        {data.category}
                    </div>
                    <img src={data.image} className="group-hover:rounded-md transition-all group-hover:scale-103" />
                    <h2 className="my-3 font-semibold text-[#262A4F]">{data.title}</h2>
                    <p className="text-sm text-gray-600">{data.description}</p>
                    <Link className="mt-5 text-sm bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text font-semibold h-10 flex">
                        Read Blogs <FaChevronRight  className="mt-1.5 w-3 h-3 text-orange-500 ml-0.5"/>
                    </Link>
                    <span className="w-full h-0.1 border-1 border-orange-500 opacity-10"></span>
                </motion.div>
            ))}
            </div>
        </>
    );
}