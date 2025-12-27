import { useEffect, useState } from 'react'
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
import homBg1 from '../images/header/hom (1).jpg'
import homBg2 from '../images/header/hom (2).jpg'

export default function Home() {
  useEffect(() =>{
    document.title = 'Home | Structura_Construction'
  }, []);
  return (

    <>
    <NavBar />
    <HeroSlider />
    <div className='w-full h-350 md:h-250 lg:h-140 flex lg:flex-row flex-col md:flex-col justify-between items-left lg:p-10 p-3'>
      <motion.div {...scrollLeft} className='lg:w-1/2 w-full h-[30%] md:h-[40%] lg:h-full flex flex-col p-2 lg:p-5'>
        <p className='mt-5 text-xs font-semibold text-gray-400'>EXPLORE THE PROJECTS</p>
        <h1 className='my-5 h-20 lg:text-3xl md:text-2xl text-xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent'>
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
      <motion.div {...scrollRight} className='w-full lg:w-1/2 h-[70%] md:h-[60%] lg:h-full lg:flex lg:flex-row flex flex-col'>
        <div className='w-full flex flex-col justify-evenly items-center md:w-full md:flex md:flex-row md:h-[50%] lg:w-1/2 h-[50%] lg:h-[95%] mt-6 lg:flex lg:flex-col lg:justify-evenly lg:items-center lg:p-3 group'>
          <motion.div {...cardHover} className='   w-full h-[45%] lg:w-[95%] lg:h-[45%] md:w-[45%] md:h-[80%] shadow-md p-5 hover:cursor-pointer hover:rounded-sm hover:shadow-lg'>
            <FaBuilding  className='w-10 h-7 my-3 text-orange-500'/>
            <h3 className='mb-3 text-[#263A4F]'>General Building</h3>
            <p className='text-gray-600 text-sm w-[90%]'>We are committed to creating strong, 
              lasting structures built for the future.</p>
          </motion.div>
          <motion.div {...cardHover} className='w-full h-[45%] lg:w-[95%] lg:h-[45%] md:w-[45%] md:h-[80%] shadow-md p-5 hover:cursor-pointer hover:rounded-sm hover:shadow-lg'>
            <FaDraftingCompass  className='w-10 h-7 my-3 text-orange-500'/>
            <h3 className='mb-3 text-[#263A4F]'>Architectural Design</h3>
            <p className='text-gray-600 text-sm w-[90%]'>We blend innovation and precision to craft modern, functional designs.</p>
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2 h-[50%] flex flex-col justify-evenly items-center lg:h-[95%] md:flex md:flex-row lg:flex lg:flex-col lg:justify-evenly lg:items-center lg:p-3 p-2'>
          <motion.div {...cardHover} className='w-full h-[45%] lg:w-[95%] lg:h-[45%] md:w-[45%] md:h-[80%] shadow-md p-5 hover:cursor-pointer hover:rounded-sm hover:shadow-lg'>
            <GiCrane  className='w-10 h-7 my-3 text-orange-500'/>
            <h3 className='mb-3 text-[#263A4F]'>Civil Engineering</h3>
            <p className='text-gray-600 text-sm w-[90%]'>Our expert engineers deliver safe, sustainable, and efficient solutions..</p>
          </motion.div>
          <motion.div {...cardHover} className='w-full h-[45%] lg:w-[95%] lg:h-[45%] md:w-[45%] md:h-[80%] shadow-md p-5 hover:cursor-pointer hover:rounded-sm hover:shadow-lg'>
            <FaTools  className='w-10 h-7 my-3 text-orange-500'/>
            <h3 className='mb-3 text-[#263A4F]'>Renovation & Maintenance</h3>
            <p className='text-gray-600 text-sm w-[90%]'>We restore and maintain properties to meet today’s quality standards.</p>
          </motion.div>

        </div>
      </motion.div>
    </div>
    <Features />
    <ServicesComponents />
    <div className='w-full lg:h-100 h-auto flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:px-15 py-5 lg:mb-10 mb-5'>
      <motion.img {...scrollLeft} src={homBg1} className='lg:w-[45%] lg:h-[95%] object-cover rounded-sm w-[90%] md:w-[95%] h-70 md:h-100'/>
      <motion.div {...scrollRight} className='w-full h-[45%] lg:w-[50%] lg:h-[95%] flex flex-col p-5'>
        <p className='text-xs font-semibold text-gray-400'>EXPLORE THE PROJECTS</p>
        <h1 className='my-5 h-20 lg:text-3xl md:text-2xl text-2xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent'>
          Delivering Excellence Through <br /> Every Brick and Beam
        </h1>
        <p className='w-full lg:w-[90%] text-justify text-gray-500 text-[13px] mb-5'>
          Every project we undertake reflects our dedication to excellence and innovation. 
          We don’t just construct buildings — we create environments that embody strength, 
          functionality, and beauty. With a perfect blend of modern technology and skilled 
          craftsmanship, we turn visions into enduring landmarks that shape communities and 
          inspire generations.
        </p>
        <motion.button {...cardHover} {...cardTaps} className='w-45 py-3 text-sm cursor-pointer bg-linear-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-sm'>Get Our Services</motion.button>

      </motion.div>
    </div>
    <div className='w-full lg:h-100 h-auto flex flex-col items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:px-15 py-5'>
      <motion.div {...scrollRight} className='w-full h-[45%] lg:w-[50%] lg:h-[95%] flex flex-col p-5'>
        <p className='text-xs font-semibold text-gray-400'>EXPLORE THE PROJECTS</p>
        <h1 className='my-5 h-20 text-3xl font-semibold bg-linear-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent'>
         Building Tomorrow, <br />One Foundation at a Time
        </h1>
        <p className='w-full lg:w-[90%] text-justify text-gray-500 text-[13px] mb-5'>
          We turn blueprints into lasting realities through innovation, skill, 
          and dedication. Every project we handle reflects our promise to 
          deliver quality, reliability, and excellence. From design to completion, 
          we focus on detail, durability, and client satisfaction — because every 
          structure we raise tells a story of trust and vision.
        </p>
        <motion.button {...cardHover} {...cardTaps} className='w-45 py-3 text-sm cursor-pointer bg-linear-to-r from-orange-500 to-orange-400 text-white font-semibold rounded-sm'>Get Our Services</motion.button>

      </motion.div>
      <motion.img {...scrollLeft} src={homBg2} className='w-[90%] md:w-[95%] h-70 md:h-100 lg:w-[45%] lg:h-[95%] object-cover rounded-sm' />

    </div>
    <StatsSection />
    <Project />
    <Teams />
    <PartnersSlider />
    <Blog />
    <ScrollToUpBtn />
    <motion.div {...scrollRight} className="w-full h-60 md:h-80 lg:h-95 mt-20 flex items-center justify-center">
      <div className="w-[95%] h-[90%] rounded-sm bg-gradient-to-r from-orange-500 to-orange-400 flex flex-col items-center justify-center">
          <div className="md:w-[75%] h-60 flex flex-col items-center mt-5 lg:mt-0">
              <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold text-white text-center md:my-5 mt-5 mb-3">Read To Build <br /> Your Dream Projects</h1>
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