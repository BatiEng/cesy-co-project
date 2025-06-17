import image25 from "../assets/48.png";
import { motion, useScroll, useTransform } from "framer-motion";

function AfterHero({ title, subTitle, img = image25 }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]); // Subtle parallax effect

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Child variants for individual elements
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  // Button hover animation
  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <motion.div
        className="flex flex-col md:flex-row items-center p-6 sm:p-10 gap-8 md:gap-16 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          style={{ y }} // Parallax effect
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }} // Subtle zoom on hover
        >
          <img
            src={img}
            alt="a"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-[#D96B1A] menu-title text-3xl sm:text-3xl mb-4"
            variants={childVariants}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-lg sm:text-md text-[#7a6f67] font-normal leading-loose text-justify"
            variants={childVariants}
          >
            {subTitle}
          </motion.p>
          <motion.a
            href="#hakkimizda"
            className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white group mt-10 cursor-pointer"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }} // Click feedback
          >
            <span className="relative z-10">Hakkımızda</span>
            <motion.svg
              className="absolute inset-0 w-full h-full z-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.706 -1.436 186 52"
              preserveAspectRatio="none"
              fill="#D96B1A"
              initial={{ scaleX: 1 }}
              whileHover={{ scaleX: 1.1, fill: "#C55A0A" }} // SVG stretch and color shift on hover
              transition={{ duration: 0.4 }}
            >
              <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AfterHero;
