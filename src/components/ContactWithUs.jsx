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
            <a
              href="mailto:info@cesyco.com"
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
                <path d="M9.33 -0.46 C12.98 ... (your path unchanged) ..." />
              </svg>
            </a>
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
