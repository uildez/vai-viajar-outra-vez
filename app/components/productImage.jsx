import { motion } from "framer-motion";

const ProductImage = () => {
  return (
    <motion.svg
      id="Camada_2"
      data-name="Camada 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89.77 70.06"
      className="absolute right-2 -top-8 w-[30px] lg:w-[80px] h-[30px] lg:h-[80px]"
    >
      <defs>
        <style>
          {`.cls-1 { fill: none; stroke: #115edc; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 9px; }`}
        </style>
      </defs>
      <g id="Camada_1-2" data-name="Camada 1">
        <motion.path
          className="cls-1"
          d="M38.82,39.4s16.15-26.49,22.81-30.99"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          className="cls-1"
          d="M69.71,65.56s-.65-1.38,2.29-4.9,13.27-12.05,13.27-12.05"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.line
          className="cls-1"
          x1="4.5"
          y1="4.5"
          x2="4.5"
          y2="40.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </g>
    </motion.svg>
  );
};

export default ProductImage;
