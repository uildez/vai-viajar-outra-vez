import { motion } from 'framer-motion';

const YoutubeTitle = () => (
  <motion.svg
    className="absolute -left-12 lg:-left-16 -top-6 lg:-top-4 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 87.16 134.73"
    viewport={{ once: true, amount: 0.2 }}
    initial="initial"
    whileInView="visible"
    variants={{
      initial: { pathLength: 0 },
      visible: { pathLength: 1, transition: { duration: .5, delay: 0.3 } },
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

export const runtime = 'edge';

export default YoutubeTitle;
