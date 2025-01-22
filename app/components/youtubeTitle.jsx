import { motion } from 'framer-motion';

const YoutubeTitle = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 87.16 134.73"
    initial="initial"
    animate="animate"
    className="absolute -left-16 top-4 w-[80px] h-[80px]"
    variants={{
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 1.5 } }
    }}
  >
    <defs>
      <style>
        {`
          .cls-1 {
            fill: none;
            stroke: #ffa900;
            stroke-linecap: round;
            stroke-miterlimit: 10;
            stroke-width: 9px;
          }
        `}
      </style>
    </defs>
    <g id="Camada_1-2" data-name="Camada 1">
      <g>
        <motion.line
          className="cls-1"
          x1="82.66"
          y1="33.07"
          x2="71.9"
          y2="4.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          className="cls-1"
          d="M50.87,61.99s-35.22-6.91-46.37-6.72"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          className="cls-1"
          d="M59.46,113.67s-10.19,6.97-16.45,16.56"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </g>
    </g>
  </motion.svg>
);

export default YoutubeTitle;
