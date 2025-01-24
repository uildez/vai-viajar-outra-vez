import React from "react";
import { motion } from "framer-motion";

const AnimatedSVG = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 75.45 103.3"
      viewport={{ once: true, amount: 0.2 }}
      initial="initial"
      whileInView="visible"
      variants={{
        initial: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: .5, delay: 0.3 } },
      }}
   
      width="200"
      height="300"
      className="absolute top-0 -left-16 scale-50 translate-y-[-50%] translate-x-[-50%]"
    >
      <motion.g
        id="Camada_1-2"
        data-name="Camada 1"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <motion.line
          className="cls-1"
          x1="70.95"
          y1="37.17"
          x2="64.3"
          y2="4.5"
          stroke="#fff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeMiterlimit="10"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 1 } },
          }}
        />
        <motion.line
          className="cls-1"
          x1="37.6"
          y1="48.11"
          x2="4.5"
          y2="44.08"
          stroke="#fff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeMiterlimit="10"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 1, delay: 0.3 } },
          }}
        />
        <motion.line
          className="cls-1"
          x1="50.1"
          y1="87.59"
          x2="34.75"
          y2="98.8"
          stroke="#fff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeMiterlimit="10"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 1, delay: 0.6 } },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};

export default AnimatedSVG;
