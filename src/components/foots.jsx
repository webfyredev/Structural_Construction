// import React from 'react';
// import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const services = [
//     'Commercial Construction',
//     'Residential Building',
//     'Renovation & Remodeling',
//     'Project Management',
//     'Design & Planning',
//     'Green Building'
//   ];

//   const quickLinks = [
//     'About Us',
//     'Our Projects',
//     'Careers',
//     'Blog',
//     'Safety Standards',
//     'Testimonials'
//   ];

//   return (
//     <footer className="bg-slate-900 text-gray-300">
//       {/* Newsletter Section */}
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#263A4F]">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <Building2 className="h-8 w-8 text-orange-500" />
//               <span className="text-2xl font-bold text-white">BuildPro</span>
//             </div>
//             <p className="text-gray-400 mb-6">
//               Leading construction company delivering exceptional quality and innovation in every project we undertake.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
//                 <Linkedin className="h-5 w-5" />
//               </a>
//               <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-orange-500 transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
//             <ul className="space-y-2">
//               {services.map((service, idx) => (
//                 <li key={idx}>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
//                     <span className="mr-2">→</span> {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {quickLinks.map((link, idx) => (
//                 <li key={idx}>
//                   <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
//                     <span className="mr-2">→</span> {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
//                 <span className="text-gray-400">
//                   123 Construction Ave, Building District, City, ST 12345
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
//                 <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors">
//                   +1 (234) 567-890
//                 </a>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
//                 <a href="mailto:info@buildpro.com" className="text-gray-400 hover:text-orange-500 transition-colors">
//                   info@buildpro.com
//                 </a>
//               </div>
//             </div>
//             <div className="mt-6">
//               <p className="text-sm text-gray-400 mb-2">Business Hours:</p>
//               <p className="text-white font-semibold">Mon - Fri: 8:00 AM - 6:00 PM</p>
//               <p className="text-white font-semibold">Sat: 9:00 AM - 4:00 PM</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-400 text-sm">
//               © {currentYear} BuildPro Construction. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-sm">
//               <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }