import image10 from "../assets/32.png";
import { motion } from "framer-motion";
import image25 from "../assets/39.png";
function ContactWithUs() {
  return (
    <div>
      <div className="mb-20">
        <img className="w-full h-[35rem] object-cover" src={image25} alt="" />
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-30 gap-16 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left "
          >
            <h2 className="text-[#D96B1A] menu-title text-4xl">
              Herhangi Bir Sorunuz Varsa
            </h2>
            <h2 className="text-[#D96B1A] menu-title text-4xl mb-10">
              Bizimle İletişime Geçin
            </h2>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="İsminiz"
                className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#D96B1A] text-lg px-2 py-1 w-72"
              />
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#D96B1A] text-lg px-2 py-1 w-72"
              />
              <input
                type="text"
                placeholder="Mesajınız"
                className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#D96B1A] text-lg px-2 py-1 w-72"
              />
              <button
                onClick={() => setShowModal(false)}
                type="submit"
                className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white group"
              >
                <span className="relative z-10">İletişime Geçin</span>

                <svg
                  className="absolute inset-0 w-full h-full z-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.706 -1.436 186 52"
                  preserveAspectRatio="none"
                  fill="#D96B1A"
                >
                  <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46 )" />
                </svg>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <img
              className="w-full h-auto object-contain"
              src={image10}
              alt="Contact Visual"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactWithUs;
