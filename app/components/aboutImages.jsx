import React from "react";
import { motion } from "framer-motion";

const AboutImages = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.61 77.87"
      initial="hidden"
      animate="visible"
      width="200" // Ajuste conforme necessário
      height="300"
    >
      <motion.g
        id="Camada_1-2"
        data-name="Camada 1"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <motion.path
          d="M4.5,73.37l1.76-52.96s.59-10.96,18.85-13.04,18-2.87,18-2.87"
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
      </motion.g>
    </motion.svg>
  );
};



export default AboutImages;
