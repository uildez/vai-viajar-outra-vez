import { motion } from "framer-motion";

const InstagramTitle = () => {
  return (
    <motion.svg
      id="Camada_2"
      data-name="Camada 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 586.64 72.14"
      className="mt-8 w-full"
    >
      <defs>
        <style>
          {`.cls-1 { fill: #ffa900; } .cls-2 { fill: none; stroke: #ffa900; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 9px; }`}
        </style>
      </defs>
      <g id="Camada_1-2" data-name="Camada 1">
        <motion.path
          className="cls-2"
          d="M4.5,8.62s19.17,3.52,38.35,3.13,340.43-6.26,340.43-6.26c0,0,168.65-5.87,198.78,10.96,0,0,7.04,19.57-114.26,33.26s-133.83,16.04-133.83,16.04"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.circle
          className="cls-1"
          cx="309.2"
          cy="67.45"
          r="4.7"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </g>
    </motion.svg>
  );
};



export default InstagramTitle;
