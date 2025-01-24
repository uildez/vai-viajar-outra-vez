import { motion } from "framer-motion";

const ProductTitleDown = () => {
  return (
    <motion.svg
      id="Camada_2"
      data-name="Camada 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60.78"
      className="absolute -left-4 -bottom-4 lg:-left-8 lg:-bottom-8 w-[40px] lg:w-[80px] h-[40px] lg:h-[80px]"
    >
      <defs>
        <style>
          {`.cls-1 { fill: none; stroke: #115edc; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 9px; }`}
        </style>
      </defs>
      <g id="Camada_1-2" data-name="Camada 1">
        <motion.path
          className="cls-1"
          d="M55.5,56.28s-42.78-5.35-44.09-9.39S10.76,11.8,4.5,4.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
      </g>
    </motion.svg>
  );
};

export default ProductTitleDown;
