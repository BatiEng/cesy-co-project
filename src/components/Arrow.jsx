import { motion } from "framer-motion";

function Arrow() {
  return (
    <div>
      <motion.div
        className="absolute bottom-25 right-0  transform -translate-x-1/2"
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <a href="#konsept">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 md:w-20 md:h-20 text-white opacity-80 hover:opacity-100 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}

export default Arrow;
