import image25 from "../assets/48.png";
import { motion } from "framer-motion";
function AfterHero({ title, subTitle, img = image25 }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center p-6 sm:p-10 gap-8 md:gap-16 mt-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={img} alt="a" className="w-full h-auto rounded-xl" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#D96B1A] menu-title text-3xl sm:text-3xl mb-4">
            {title}
          </h3>
          <p className="text-lg sm:text-md text-[#7a6f67] font-normal leading-loose text-justify">
            {subTitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AfterHero;
