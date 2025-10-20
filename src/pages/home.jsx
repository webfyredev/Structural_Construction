import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/navbar'
import HeroSlider from '../components/heroSlider'
import { FaBuilding, FaDraftingCompass, FaTools } from "react-icons/fa";
import { cardHover, scrollLeft, cardTaps, scrollRight} from '../animations/motion';
import { Link } from 'react-router-dom';
import { GiCrane } from "react-icons/gi";
import Features from '../components/features';
import ServicesComponents from '../components/services';
import semBg from '../images/explorebg.jpg'
import semBg2 from '../images/explorebg2.jpg'
import StatsSection from '../components/stats';
import Project from '../components/projects';
import Teams from '../components/team';
import PartnersSlider from '../components/logoSlider';
import Blog from '../components/blog';
import Footer from '../components/footer';
import ScrollToUpBtn from '../components/scrollToTop';
export default function Home() {

  return (
    <>
    <NavBar />
    <HeroSlider />
    <div className='w-full h-350 sm:h-250 md:h-140 flex md:flex-row flex-col justify-between items-left md:p-10 p-5'>
      <motion.div {...scrollLeft} className='md:w-1/2 w-full h-[30%] sm:h-[40%] md:h-full flex flex-col p-5'>
        <p className='mt-5 text-xs font-semibold text-gray-400'>EXPLORE THE PROJECTS</p>
        <h1 className='my-5 h-20 md:text-3xl text-2xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent'>
          Delivering Excellence Through <br /> Every Brick and Beam
        </h1>
        <p className='w-[90%] text-justify text-gray-500 text-xs md:text-[15px] mb-5'>
          We believe in shaping the future with every structure we build — 
          where innovation meets craftsmanship. Our team works hand in 
          hand to create spaces that inspire trust, strength, and comfort. 
          Construction to us isn’t just about walls and steel; it’s about purpose, 
          passion, and precision. With each project, we aim higher and deliver beyond expectations.
        </p>
        <p className='w-[90%] text-justify text-gray-500 text-xs  md:text-[15px] mb-7'>
          Building isn't just job. It's our passion. With every project we undertake, 
          we set the bar high and provide the best industry.
        </p>
        <motion.button {...cardHover} {...cardTaps} className='w-45 py-3 text-sm cursor-pointer bg-linear-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-sm'>Check Our Services</motion.button>
      </motion.div>
      <motion.div {...scrollRight} className='w-full md:w-1/2 h-[70%] sm:h-[60%] md:h-full md:flex md:flex-row flex-col'>
        <div className='w-full  flex flex-col justify-evenly items-center sm:w-full sm:flex sm:flex-row md:w-1/2 h-[50%] md:h-[95%] mt-6 md:flex md:flex-col md:justify-evenly md:items-center md:p-3 p-3 group'>
          <motion.div {...cardHover} className='w-[95%] h-[45%] md:w-[95%] md:h-[45%] sm:w-[45%] sm:h-[80%] shadow-md p-5 hover:cursor-pointer hover:rounded-sm hover:shadow-lg'>
            <FaBuilding  className='w-10 h-7 my-3 text-orange-500'/>
            <h3 className='mb-3 text-[#263A4F]'>General Building</h3>
            <p className='text-gray-600 text-sm w-[90%]'>We are committed to creating strong, 
              lasting structures built for the future.</p>
          </motion.div>
          <motion.div {...cardHover} className='w-[95%] h-[45%] md:w-[95%] md:h-[45%] sm:w-[45%] sm:h-[80%] shadow-md p-5 hover:cursor-pointer hover:rounded-sm hover:shadow-lg'>
            <FaDraftingCompass  className='w-10 h-7 my-3 text-orange-500'/>
            <h3 className='mb-3 text-[#263A4F]'>Architectural Design</h3>
            <p className='text-gray-600 text-sm w-[90%]'>We blend innovation and precision to craft modern, functional designs.</p>
          </motion.div>
        </div>
        <div className='w-full md:w-1/2 h-[50%] flex flex-col justify-evenly items-center md:h-[95%] sm:flex sm:flex-row md:flex md:flex-col md:justify-evenly md:items-center md:p-3 p-3'>
          <motion.div {...cardHover} className='w-[95%] h-[45%] md:w-[95%] md:h-[45%] sm:w-[45%] sm:h-[80%] shadow-md p-5 hover:cursor-pointer hover:rounded-sm hover:shadow-lg'>
            <GiCrane  className='w-10 h-7 my-3 text-orange-500'/>
            <h3 className='mb-3 text-[#263A4F]'>Civil Engineering</h3>
            <p className='text-gray-600 text-sm w-[90%]'>Our expert engineers deliver safe, sustainable, and efficient solutions..</p>
          </motion.div>
          <motion.div {...cardHover} className='w-[95%] h-[45%] md:w-[95%] md:h-[45%] sm:w-[45%] sm:h-[80%] shadow-md p-5 hover:cursor-pointer hover:rounded-sm hover:shadow-lg'>
            <FaTools  className='w-10 h-7 my-3 text-orange-500'/>
            <h3 className='mb-3 text-[#263A4F]'>Renovation & Maintenance</h3>
            <p className='text-gray-600 text-sm w-[90%]'>We restore and maintain properties to meet today’s quality standards.</p>
          </motion.div>

        </div>
      </motion.div>
    </div>
    <Features />
    <ServicesComponents />
    <div className='w-full md:h-100 h-auto flex flex-col md:flex md:flex-row md:justify-evenly md:items-center md:px-15 py-5 md:mb-10 mb-5'>
      <motion.img {...scrollLeft} src={semBg} className='md:w-[45%] md:h-[95%] object-cover rounded-sm w-full h-[45%]' />
      <motion.div {...scrollRight} className='w-full h-[45%] md:w-[50%] md:h-[95%] flex flex-col p-5'>
        <p className='text-xs font-semibold text-gray-400'>EXPLORE THE PROJECTS</p>
        <h1 className='my-5 h-20 md:text-3xl text-2xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent'>
          Delivering Excellence Through <br /> Every Brick and Beam
        </h1>
        <p className='w-full md:w-[90%] text-justify text-gray-500 text-[13px] mb-5'>
          Every project we undertake reflects our dedication to excellence and innovation. 
          We don’t just construct buildings — we create environments that embody strength, 
          functionality, and beauty. With a perfect blend of modern technology and skilled 
          craftsmanship, we turn visions into enduring landmarks that shape communities and 
          inspire generations.
        </p>
        <motion.button {...cardHover} {...cardTaps} className='w-45 py-3 text-sm cursor-pointer bg-linear-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-sm'>Get Our Services</motion.button>

      </motion.div>
    </div>
    <div className='w-full md:h-100 h-auto md:flex md:flex-row md:justify-evenly md:items-center md:px-15 py-5'>
      <motion.div {...scrollRight} className='w-full h-[45%] md:w-[50%] md:h-[95%] flex flex-col p-5'>
        <p className='text-xs font-semibold text-gray-400'>EXPLORE THE PROJECTS</p>
        <h1 className='my-5 h-20 text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent'>
         Building Tomorrow, <br />One Foundation at a Time
        </h1>
        <p className='w-full md:w-[90%] text-justify text-gray-500 text-[13px] mb-5'>
          We turn blueprints into lasting realities through innovation, skill, 
          and dedication. Every project we handle reflects our promise to 
          deliver quality, reliability, and excellence. From design to completion, 
          we focus on detail, durability, and client satisfaction — because every 
          structure we raise tells a story of trust and vision.
        </p>
        <motion.button {...cardHover} {...cardTaps} className='w-45 py-3 text-sm cursor-pointer bg-linear-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-sm'>Get Our Services</motion.button>

      </motion.div>
      <motion.img {...scrollLeft} src={semBg2} className='w-full h-[45%] md:w-[45%] md:h-[95%] object-cover rounded-sm' />

    </div>
    <StatsSection />
    <Project />
    <Teams />
    <PartnersSlider />
    <Blog />
    <ScrollToUpBtn />
    <motion.div {...scrollRight} className="w-full  h-80 md:h-110 mt-20 flex items-center justify-center">
      <div className="w-[95%] h-[90%] rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 flex flex-col items-center justify-center">
          <div className="w-[75%] h-60 flex flex-col items-center">
              <h1 className="text-2xl md:text-5xl font-bold text-white text-center my-5">Read To Build <br /> Your Dream Projects</h1>
              <p className="text-gray-200 mb-5 text-center text-xs md:text-sm">Let's make your next project stronger, smarter, and built to last?</p>
              <motion.button {...cardHover} {...cardTaps} className="px-10 py-2.5 bg-white font-semibold text-orange-500 rounded-sm cursor-pointer">
                  <Link to='/contacts'>
                      Get In Touch
                  </Link>
              </motion.button>
          </div>
      </div>
    </motion.div>
    <Footer />
    </>
  )
}