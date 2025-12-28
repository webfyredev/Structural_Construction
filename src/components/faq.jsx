import { motion } from "framer-motion";
import { scrollUp, scrollUpNext } from "../animations/motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


export default function FAQS(){
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            quest : 'Do you handle both residential and commercial projects?',
            ans : 'Yes, we manage projects of all sizes — from private homes to large commercial developments.',
        },
        {
            quest : 'How long does a typical project take?',
            ans : 'Project timelines vary based on scope, but we always provide a clear schedule before work begins.',
        },
        {
            quest : 'Do you help with design and planning approvals?',
            ans : 'Yes, our team supports architectural design, drawings, permits, and approvals where required.',
        },
        {
            quest : 'How do you ensure quality and safety on-site?',
            ans : 'We follow strict safety standards, quality inspections, and industry best practices on every project.',
        },
        {
            quest : 'Can you work within my budget?',
            ans : 'Absolutely. We provide transparent pricing and value-engineered solutions to match your budget.',
        },
        {
            quest : 'Do you offer post-construction support?',
            ans : 'Yes — we provide maintenance guidance and support even after project completion.',
        },
    ];
    return(
        <>
            <div className="w-full p-3 lg:p-10 bg-gray-50 flex flex-col items-center mt-10">
                <motion.h2 {...scrollUp} className="mt-10 lg:mt-0 h-10 text-3xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">
                    Frequently Asked Questions
                </motion.h2>
                <motion.p {...scrollUpNext} className="text-gray-600 text-[13px] md:text-sm text-center">
                    Clear answers to common questions about our services, process, and quality standards.
                </motion.p>
                 <div className="w-full lg:w-[90%] px-2 md:px-5 py-5 mt-5 space-y-5">
                    {faqs.map((items, index) => (
                        <motion.div {...scrollUp} key={index} className="shadow-xs rounded-xl hover:shadow-sm">
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index )}
                                className="w-full flex justify-between items-center p-5 text-left group cursor-pointer"
                            >
                                <span className="text-[#262A4F] text-[12px] md:text-sm font-semibold group-hover:text-orange-500 transition ">
                                    {items.quest}
                                </span>
                                <FaChevronDown   className={`w-3.5 h-3.5 group-hover:text-orange-500 transition-transform ${openIndex === index ? "rotate-180" : ''}`}/>

                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-4 text-gray-600 text-xs md:text-[13px]">
                                    {items.ans}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}