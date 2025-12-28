import { FaAward, FaClock, FaComments, FaHandshake, FaHardHat, FaShieldAlt, FaRegCalendarAlt, FaTools, FaRegClock, FaDollarSign } from "react-icons/fa";
import { MdOutline3dRotation } from "react-icons/md";
import { GiPlantWatering } from "react-icons/gi";

export const core_values = [
    {
        icon : FaAward,
        title : 'Proven Industry Experience',
        desc : 'We bring hands-on expertise and practical industry experience into every projects, ensuring precise execution from planning to completion'
    },
    {
        icon : FaShieldAlt,
        title : 'Quality-Driven Construction',
        desc : 'We build to last, prioritizing premium materials skilled workmanship, and strict quality control at every phase.'
    },
    {
        icon : FaComments,
        title : 'Transparent & Honest Communication',
        desc : 'We keep you informed at every step with clear timelines, realistic expectations, and open communication, no suprises.'
    },
    {
        icon : FaHardHat,
        title : 'Safety Comes First',
        desc : 'Our team follows approved safety practices and site-discipline standards, protecting workers, clients, and property.'
    },
    {
        icon : FaClock,
        title : 'On-Time Project Delivery',
        desc : 'We plan efficiently and work smart, ensuring projects are delivered withing agreed timelines without compromising quality'
    },
    {
        icon : FaHandshake,
        title : 'Client-Focused Approach',
        desc : 'Every project starts with understanding your needs, so we deliver results that fit your vision, budget, and long-term goals.'
    }
]

export const benefits = [
    {
    title: "Free Consultation",
    subheading: "Plan your project with expert advice from our professional team.",
    icon: FaRegCalendarAlt
  },
  {
    title: "3D Renderings",
    subheading: "Visualize your project before construction with realistic 3D previews.",
    icon: MdOutline3dRotation
  },
  {
    title: "Post-Project Support",
    subheading: "We provide maintenance and support to ensure long-lasting quality.",
    icon: FaTools
  },
  {
    title: "Eco-Friendly",
    subheading: "Sustainable building practices that are safe for the environment.",
    icon: GiPlantWatering
  },
  {
    title: "Timely Updates",
    subheading: "Stay informed every step of the way with regular progress updates.",
    icon: FaRegClock
  },
  {
    title: "Transparent Pricing",
    subheading: "Clear cost estimates with no hidden fees or surprises.",
    icon: FaDollarSign
  }
]