import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "Hayal et, dene, üret. Hepsi burada başlıyor.",
  "Başarı, cesaretin devamıdır.",
  "Küçük adımlar büyük hayallere götürür.",
  "Fikirleriniz, geleceğin temelleridir.",
];

const animationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

function QuotesSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevQuote = () => {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const nextQuote = () => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  };

  return (
    <motion.div className="w-full bg-[#FEF7EA] py-5 flex flex-col items-center justify-center mb-10">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8 px-6">
        {/* Quote Symbol */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#D96B1A] text-6xl font-serif"
        >
          “
        </motion.div>

        {/* Quote and Arrows */}
        <div className="flex  gap-8 w-full">
          {/* Animated Quote */}
          <div className="relative w-full max-w-3xl min-h-[100px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={quotes[current]}
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-2xl md:text-4xl menu-title text-[#D96B1A] tracking-tight leading-relaxed px-4"
              >
                {quotes[current]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
        </div>

        {/* Dots */}
        <div className="flex gap-3 mt-4">
          {quotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              whileHover={{ scale: 1.3 }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-[#D96B1A] shadow-md" : "bg-[#D96B1A]/30"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default QuotesSection;
