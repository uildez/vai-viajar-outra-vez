import { motion } from "framer-motion";

const ProductTitleUp = () => {
  return (
    <motion.svg
      id="Camada_2"
      data-name="Camada 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.33 55.25"
      className="absolute -right-8 -top-8 w-[80px] h-[80px]"
    >
      <defs>
        <style>
          {`.cls-1 { fill: none; stroke: #115edc; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 9px; }`}
        </style>
      </defs>
      <g id="Camada_1-2" data-name="Camada 1">
        <motion.path
          className="cls-1"
          d="M4.5,5.95l37.58-1.44c4.74-.18,8.98,2.96,10.13,7.56.38,1.54.62,3.39.62,5.62v33.07"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
      </g>
    </motion.svg>
  );
};

export default ProductTitleUp;
