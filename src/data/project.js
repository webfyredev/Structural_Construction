import project1 from '../images/projects/pj1.jpg'
import project2 from '../images/projects/pj2.jpg'
import before_project1 from '../images/projects/b_a/com_proj1.jpg'
import before_project2 from '../images/projects/b_a/com_proj2.jpg'
import before_project3 from '../images/projects/b_a/com_proj3.jpg'
import before_project4 from '../images/projects/b_a/com_proj4.jpg'
import before_project5 from '../images/projects/b_a/com_proj5.jpg'
import before_project6 from '../images/projects/b_a/com_proj6.jpg'



export const featured_projects = [
    {
    title: "Commercial Office Complex",
    desc: "A state-of-the-art commercial office facility designed and delivered with modern architecture, energy efficiency, and world-class finishing standards.",
    img: project1,
    location: "Lagos, Nigeria",
    type: "Commercial Build",
    duration: "8 Months",
    status: "Delivered On-Time",
  },
  {
    title: "Luxury Residential Duplex",
    desc: "A premium residential duplex built with contemporary design, high-grade finishing, and exceptional attention to detail for modern family living.",
    img: project2,
    location: "Abuja, Nigeria",
    type: "Residential Construction",
    duration: "6 Months",
    status: "Completed Successfully",
  },
];

export const project_transformation = [
    {
        before : before_project1,
        after : before_project2, 
        title : 'Residential Remodeling'
    },
    {
        before : before_project3,
        after : before_project4,
        title : 'Office Rennovation'
    },
    {
        before : before_project5,
        after : before_project6,
        title : 'Exterior Upgrade'
    }
]

export const feedbacks = [
    {
    name: "Michael Adewale",
    role: "Homeowner – Lagos",
    text: "Structura delivered our home project with outstanding professionalism. The quality, communication, and attention to detail were excellent.",
  },
  {
    name: "Chiamaka Okoye",
    role: "Business Owner – Abuja",
    text: "From planning to handover, the team handled everything smoothly. Our new office space exceeded expectations.",
  },
  {
    name: "Engr. Tunde Ibrahim",
    role: "Real Estate Developer",
    text: "Reliable, transparent, and highly skilled. Structura has become our preferred construction partner for large-scale projects.",
  },
]