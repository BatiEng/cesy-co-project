import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <>
      <div className="flex justify-between items-center px-3 md:px-20 text-white relative z-10">
        <Link to={"/"} className="">
          <img className="w-50" src={logo} alt="" />
        </Link>

        <div className="hidden md:flex gap-10 text-xl items-center">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center px-3 py-1 font-medium text-white group overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">ANASAYFA</span>

            <svg
              className="absolute inset-0 w-full h-full z-0 transition-colors duration-300 fill-transparent
               group-hover:fill-[#CB7132]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.706 -1.436 186 52"
              preserveAspectRatio="none"
            >
              <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46" />
            </svg>
          </button>

          <button
            onClick={() => setShowModal(true)}
            type="submit"
            className="relative inline-flex items-center justify-center px-3 py-1 font-medium text-white group overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">HAKKIMIZDA</span>

            <svg
              className="absolute inset-0 w-full h-full z-0 transition-colors duration-300 fill-transparent
               group-hover:fill-[#CB7132]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.706 -1.436 186 52"
              preserveAspectRatio="none"
            >
              <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46" />
            </svg>
          </button>
          <button
            onClick={() => setShowModal(true)}
            type="submit"
            className="relative inline-flex items-center justify-center px-3 py-1 font-medium text-white group overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">KONSEPT</span>

            <svg
              className="absolute inset-0 w-full h-full z-0 transition-colors duration-300 fill-transparent
               group-hover:fill-[#CB7132]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.706 -1.436 186 52"
              preserveAspectRatio="none"
            >
              <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46" />
            </svg>
          </button>

          <button
            onClick={() => setShowModal(true)}
            type="submit"
            className="relative inline-flex items-center justify-center px-3 py-1 font-medium text-white group overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">İLETİŞİM</span>

            <svg
              className="absolute inset-0 w-full h-full z-0 transition-colors duration-300 fill-transparent
               group-hover:fill-[#CB7132]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.706 -1.436 186 52"
              preserveAspectRatio="none"
            >
              <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#FEF7EA] z-40 flex flex-col justify-between items-center py-10 px-6 text-xl"
          >
            {/* Close Button */}
            <div className="self-end">
              <button onClick={() => setMenuOpen(false)}>
                <X size={32} className="text-black" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center gap-8 text-black">
              <a href="/" onClick={() => setMenuOpen(false)}>
                ANASAYFA
              </a>
              <a
                href="#"
                onClick={() => {
                  setShowModal(true);
                  setMenuOpen(false);
                }}
              >
                HAKKIMIZDA
              </a>
              <a href="#konsept" onClick={() => setMenuOpen(false)}>
                KONSEPT
              </a>
              <a href="#iletisim" onClick={() => setMenuOpen(false)}>
                İLETİŞİM
              </a>
            </div>

            {/* Bottom Brand Text */}
            <div
              className="text-4xl text-[#7E5246]"
              style={{ fontFamily: "'Yellowtail', cursive" }}
            >
              Cesy Co.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-opacity-60"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-white text-black p-10 rounded-xl w-[90%] max-w-xl text-center animate-zoom">
            <h2 className="text-2xl font-bold mb-4 text-[#7E5246]">
              Hakkımızda
            </h2>
            <p className="text-lg">
              Cesy Co. olarak çocuklara, yetişkinlere ve kahve severlere özel
              konseptler sunuyoruz. Atölyelerimiz ve mekan tasarımımızla keyifli
              bir ortam sağlıyoruz.
            </p>

            <button
              onClick={() => setShowModal(false)}
              type="submit"
              className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white group"
            >
              <span class="relative z-10">Kapat</span>

              <svg
                class="absolute inset-0 w-full h-full z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.706 -1.436 186 52"
                preserveAspectRatio="none"
                fill="#CB7132"
              >
                <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46 )" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
