import React from "react";
import { motion } from "framer-motion";

const AboutTitle = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.35 79.7"
      viewport={{ once: true, amount: 0.2 }}
      initial="initial"
      whileInView="visible"
      variants={{
        initial: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: .5, delay: 0.3 } },
      }}
      className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
    >
      <motion.g
        id="Camada_1-2"
        data-name="Camada 1"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        {/* Primeira linha (polyline) */}
        <motion.polyline
          points="8.93 14.15 12.33 12.59 22.5 4.5"
          stroke="#fff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeMiterlimit="10"
          fill="none"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 2 } },
          }}
        />

        {/* Caminho (path) */}
        <motion.path
          d="M10.24,37.37s29.74-.78,32.61-1.57"
          stroke="#fff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeMiterlimit="10"
          fill="none"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 2, delay: 0.5 } },
          }}
        />

        {/* Segunda linha (polyline) */}
        <motion.polyline
          points="4.5 66.33 13.89 73.11 17.8 75.2"
          stroke="#fff"
          strokeWidth="9"
          strokeLinecap="round"
          strokeMiterlimit="10"
          fill="none"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 2, delay: 1 } },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};

export const runtime = 'edge';

export default AboutTitle;
