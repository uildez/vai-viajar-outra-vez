import { motion } from "framer-motion";

const GuidesUp = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 63.39 59.3"
      initial="hidden"
      animate="animate"
      className="absolute -right-8 -top-8 w-[80px] h-[80px]"
    >
      <motion.path
        d="M4.5,5.89l39.72-1.37s6.22-.81,7.63,8.41c1.25,8.12,4.06,26.82,6.07,33.85.83,2.92,.98,8.02,.98,8.02"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="9"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default GuidesUp;
