import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageGallery = ({ images }) => {
  const [galleryCurrent, setGalleryCurrent] = useState(0);

  const imagesPerView = 5;
  const totalSlides = Math.max(1, images.length - imagesPerView + 1);

  const galleryNext = () => {
    setGalleryCurrent((prev) => (prev + 1) % totalSlides);
  };

  const galleryPrev = () => {
    setGalleryCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const getVisibleImages = () => {
    const start = galleryCurrent;
    const end = Math.min(start + imagesPerView, images.length);
    return images.slice(start, end);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-8 px-4 sm:px-8 mb-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
        {/* Slider */}
        <div className="relative w-full overflow-hidden rounded-2xl">
          <div className="flex items-center justify-center gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={galleryCurrent} // important for triggering exit/enter
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex gap-4"
              >
                {getVisibleImages().map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`gallery-image-${galleryCurrent + index}`}
                    className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] object-cover rounded-xl shadow-md"
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageGallery;
