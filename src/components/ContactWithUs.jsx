import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import kids1v from "../assets/kids-1v.jpeg";
import kids2v from "../assets/kids-2v.jpeg";
import kids3v from "../assets/kids-3v.jpeg";
import kids4v from "../assets/kids-4v.jpeg";
import coffee1 from "../assets/coffee-1.jpeg";
import coffee2 from "../assets/coffee-2.jpeg";
import coffee3 from "../assets/coffee-3.jpeg";
import coffee4 from "../assets/coffee4.jpeg";
import workshop1 from "../assets/workshop1.jpeg";
import workshop2 from "../assets/workshop2.jpeg";
import workshop3 from "../assets/workshop3.jpeg";
import workshop4 from "../assets/workshop4.jpeg";
import ContactMap from "./ContactMap";

const getSlides = (type) => {
  if (type === "coffee") {
    return [
      { img: coffee1, title: "Bir yudum ilham, bir yudum huzur." },
      { img: coffee2, title: "Tatlı sohbetlerin başladığı yer." },
      { img: coffee3, title: "Kahveyle gelen samimiyet." },
      { img: coffee4, title: "Günün en keyifli molası burada." },
    ];
  } else if (type === "workshop") {
    return [
      { img: workshop1, title: "Üretmenin ve öğrenmenin keyfini çıkarın." },
      { img: workshop2, title: "Her atölye bir keşif alanıdır." },
      { img: workshop3, title: "Yaratıcılığın sınırlarını zorlayın." },
      { img: workshop4, title: "Birlikte üretiyor, birlikte gelişiyoruz." },
    ];
  } else {
    return [
      {
        img: kids1v,
        title: "Hayal kurdukları bir dünyada özgürce üretmelerini sağlıyoruz.",
      },
      {
        img: kids2v,
        title: "Renkler, oyunlar ve bolca kahkaha, Hepsi burada bir arada!",
      },
      {
        img: kids3v,
        title: "Her etkinlik bir keşif, Her gün yeni bir macera.",
      },
      { img: kids4v, title: "Adım adım öğrenme, Oyunla gelişme zamanı!" },
    ];
  }
};
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

function ContactWithUs({ theme = "kids" }) {
  const [current, setCurrent] = useState(0);
  const slides = getSlides(theme);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="">
      {/* Image slider with text */}
      <div className="relative w-full h-[35rem] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={current}
            src={slides[current].img}
            className="w-full h-full object-cover"
            alt="Slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-xl sm:text-2xl">Konsept</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 mt-3 sm:mt-10">
            {slides[current].title}
          </h2>
        </div>

        {/* Left arrow */}
        <button
          className="hidden md:flex absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
        >
          ←
        </button>

        <button
          className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-30 gap-16 mt-20 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h2 className="text-[#D96B1A] text-4xl">
            Herhangi Bir Sorunuz Varsa
          </h2>
          <h2 className="text-[#D96B1A] text-4xl mb-10">
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

            <motion.a
              href="mailto:info@cesyco.com"
              className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white group mt-10 cursor-pointer"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.95 }} // Click feedback
            >
              <span className="relative z-10">Mail Gönder</span>
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <ContactMap />
        </motion.div>
      </div>
    </div>
  );
}

export default ContactWithUs;
