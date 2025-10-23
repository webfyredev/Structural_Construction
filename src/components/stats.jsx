import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { scrollUp } from "../animations/motion";
export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // starts animation when 30% of the section is visible
  });

  return (
    <section ref={ref} className="bg-gray-100 py-16">
      <motion.div {...scrollUp} className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h2 className="md:text-3xl text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">
            {inView ? <CountUp end={500} duration={4} /> : 0}+
          </h2>
          <p className="text-gray-700 mt-2 text-sm md:text-sm lg:text-md">Completed Projects</p>
        </div>

        <div>
          <h2 className="md:text-3xl text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">
            {inView ? <CountUp end={120} duration={4} /> : 0}+
          </h2>
          <p className="text-gray-700 mt-2 text-sm md:text-md">Happy Clients</p>
        </div>

        <div>
          <h2 className="md:text-3xl text-2xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">
            {inView ? <CountUp end={80} duration={4} /> : 0}+
          </h2>
          <p className="text-gray-700 mt-2 text-sm md:text-sm lg:text-md">Skilled Workers</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text">
            {inView ? <CountUp end={15} duration={4} /> : 0}+
          </h2>
          <p className="text-gray-700 mt-2 md:text-sm lg:text-md">Years Experience</p>
        </div>
      </motion.div>
    </section>
  );
}
