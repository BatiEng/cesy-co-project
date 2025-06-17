import Navbar from "../components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import image1 from "../assets/23.png";
import image2 from "../assets/24.png";
import image3 from "../assets/25.png";
import image4 from "../assets/26.png";
import image16 from "../assets/51.png";
import image17 from "../assets/52.png";
import image18 from "../assets/53.png";
import image19 from "../assets/54.png";
import image20 from "../assets/55.png";
import image21 from "../assets/56.png";
import image22 from "../assets/57.png";
import image23 from "../assets/58.png";
import image24 from "../assets/59.png";
import logo from "../assets/logo.png";
import { useState } from "react";
import Footer from "../components/Footer";
import ContactWithUs from "../components/ContactWithUs";
import AfterHero from "../components/AfterHero";
import QuotesSection from "../components/QuotesSection";
import ImageGallery from "../components/ImageGallery";
import Arrow from "../components/Arrow";
import AboutPage from "../components/AboutPage";

const CoffeePage = () => {
  const coffeeMenu = [
    {
      name: "Caffe Latte",
      desc: "Taze demlenmiş kahveyle buluşan yumuşacık süt",
      price: "220₺",
      isNew: true,
    },
    {
      name: "Caffe Mocha",
      desc: "Taze demlenmiş kahveyle buluşan yumuşacık süt",
      price: "220₺",
      isNew: false,
    },
    {
      name: "Caffe Americano",
      desc: "Taze demlenmiş kahveyle buluşan yumuşacık süt",
      price: "220₺",
      isNew: false,
    },
  ];
  const images = [image21, image22, image23, image24];
  const galleryImages = [image17, image18, image19, image20]; // Images for Galerimiz section

  const [galleryCurrent, setGalleryCurrent] = useState(0); // State for Galerimiz carousel
  const [selectedImage, setSelectedImage] = useState(null);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 50]); // Subtle parallax effect

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };
  const handleClose = () => {
    setSelectedImage(null);
  };
  const galleryNext = () => {
    if (galleryCurrent < galleryImages.length - 1)
      setGalleryCurrent(galleryCurrent + 1);
  };

  const galleryPrev = () => {
    if (galleryCurrent > 0) setGalleryCurrent(galleryCurrent - 1);
  };

  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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

  // Button animation variants
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
    <div className="overflow-x-hidden">
      <div className="hero-coffee bg-black relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Navbar />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="text-center w-100 sm:w-full flex flex-col text-white"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl bg-black/35 p-10 px-20 rounded-lg"
                variants={childVariants}
              >
                Günün temposuna lezzetli bir mola verin!
              </motion.h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Arrow />
      <AfterHero
        img={image16}
        title="En İyi Kalite Kahve, Tek Bir Noktada"
        subTitle="Her fincanda özenle seçilmiş çekirdeklerin, ustalıkla harmanlandığı
            özel bir deneyime davetlisiniz. Cesy Co. Coffee, kahve tutkunları
            için lezzetin, özenin ve keyfin buluşma noktasıdır."
      />
      <motion.div
        className="w-full py-20 bg-[#FEF7EA] mb-20 px-6 sm:px-10 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20"
          variants={containerVariants}
        >
          <motion.div
            className="relative pl-6 border-l-4 border-[#D96B1A] text-gray-500 max-w-3xl"
            variants={childVariants}
          >
            <p className="text-xl menu-title">
              Kahve tutkusunu paylaşan girişimcilerle birlikte büyümeye devam
              ediyoruz. Eğer siz de <strong>CESY CO.</strong>’nun sıcak
              atmosferini, lezzet dolu menüsünü ve yaratıcı atölye konseptini
              kendi şehrinize taşımak isterseniz, franchise sistemimiz tam size
              göre!
            </p>
          </motion.div>
          <motion.button
            type="submit"
            className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white group"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Franchise Başvuru</span>
            <motion.svg
              className="absolute inset-0 w-full h-full z-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.706 -1.436 186 52"
              preserveAspectRatio="none"
              fill="#D96B1A"
              initial={{ scaleX: 1 }}
              whileHover={{ scaleX: 1.1, fill: "#C55A0A" }}
              transition={{ duration: 0.4 }}
            >
              <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        id="konsept"
        className="flex flex-col items-center p-6 sm:p-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-[#D96B1A] text-3xl sm:text-5xl menu-title mb-5 text-center"
          variants={childVariants}
        >
          Favori Kahve Lezzetlerimiz
        </motion.h1>
        <motion.p
          className="text-gray-500 text-xl mb-10 sm:mb-20"
          variants={childVariants}
        >
          Kahve menümüz, her damak zevkine hitap eden özel tariflerle tadına
          doyulmaz bir deneyim sunar.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center w-full">
          <motion.div
            className="px-6 sm:px-16 py-12 space-y-12 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coffeeMenu.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#C2A291] pb-4 gap-4"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <motion.h3
                    className="text-[30px] menu-title text-[#743F2B]"
                    variants={childVariants}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-500 mt-1 text-base sm:text-lg"
                    variants={childVariants}
                  >
                    {item.desc}
                  </motion.p>
                </div>
                <div className="flex items-center gap-4">
                  <motion.span
                    className="text-[#743F2B] menu-title text-[19px]"
                    variants={childVariants}
                  >
                    {item.price}
                  </motion.span>
                  {item.isNew && (
                    <motion.span
                      type="submit"
                      className="relative inline-flex items-center justify-center px-3 py-1 font-medium text-white group"
                      variants={buttonVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">NEW</span>
                      <motion.svg
                        className="absolute inset-0 w-full h-full z-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-0.706 -1.436 186 52"
                        preserveAspectRatio="none"
                        fill="#D96B1A"
                        initial={{ scaleX: 1 }}
                        whileHover={{ scaleX: 1.1, fill: "#C55A0A" }}
                        transition={{ duration: 0.4 }}
                      >
                        <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46" />
                      </motion.svg>
                    </motion.span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <motion.img
              className="hidden sm:block w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image2}
              alt=""
              style={{ y: yParallax }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <motion.img
              className="hidden w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image3}
              alt=""
              style={{ y: yParallax }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              className="hidden sm:block w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image4}
              alt=""
              style={{ y: yParallax }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="px-6 sm:px-16 py-12 space-y-12 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coffeeMenu.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#C2A291] pb-4 gap-4"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <motion.h3
                    className="menu-title text-[#743F2B] text-[30px]"
                    variants={childVariants}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-500 mt-1 text-base sm:text-lg"
                    variants={childVariants}
                  >
                    {item.desc}
                  </motion.p>
                </div>
                <div className="flex items-center gap-4">
                  <motion.span
                    className="text-[#743F2B] menu-title text-[19px]"
                    variants={childVariants}
                  >
                    {item.price}
                  </motion.span>
                  {item.isNew && (
                    <motion.span
                      type="submit"
                      className="relative inline-flex items-center justify-center px-3 py-1 font-medium text-white group"
                      variants={buttonVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">NEW</span>
                      <motion.svg
                        className="absolute inset-0 w-full h-full z-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-0.706 -1.436 186 52"
                        preserveAspectRatio="none"
                        fill="#D96B1A"
                        initial={{ scaleX: 1 }}
                        whileHover={{ scaleX: 1.1, fill: "#C55A0A" }}
                        transition={{ duration: 0.4 }}
                      >
                        <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46" />
                      </motion.svg>
                    </motion.span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <QuotesSection />
      <motion.div
        className="mb-20 px-4 sm:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-[#D96B1A] menu-title text-4xl sm:text-6xl text-center"
          variants={childVariants}
        >
          Galerimiz
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mt-4 text-center text-gray-500"
          variants={childVariants}
        >
          Galerimize göz at, atmosferimizi hisset!
        </motion.p>
        {/* Desktop View: Grid with full-screen functionality */}
        <motion.div
          className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 mt-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            className="w-full h-[28rem] sm:h-[25rem] md:h-[31rem] object-cover rounded-xl row-span-2 cursor-pointer"
            src={galleryImages[0]}
            alt=""
            onClick={() => handleImageClick(galleryImages[0])}
            variants={childVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="w-full h-[14rem] sm:h-[12rem] md:h-[15rem] object-cover rounded-xl cursor-pointer"
            src={galleryImages[1]}
            alt=""
            onClick={() => handleImageClick(galleryImages[1])}
            variants={childVariants}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="w-full h-[14rem] sm:h-[12rem] md:h-[15rem] object-cover rounded-xl cursor-pointer"
            src={galleryImages[2]}
            alt=""
            onClick={() => handleImageClick(galleryImages[2])}
            variants={childVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            className="w-full h-[28rem] sm:h-[25rem] md:h-[31rem] object-cover rounded-xl row-span-2 col-start-3 row-start-1 cursor-pointer"
            src={galleryImages[3]}
            alt=""
            onClick={() => handleImageClick(galleryImages[3])}
            variants={childVariants}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        {/* Mobile View: Carousel with full-screen functionality */}
        <motion.div
          className="sm:hidden flex flex-col items-center gap-6 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={galleryPrev}
              disabled={galleryCurrent === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-semibold transition-all duration-300 ${
                galleryCurrent === 0
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-[#D96B1A] hover:bg-[#b75f27] hover:scale-110 shadow-md"
              }`}
              variants={buttonVariants}
              initial="rest"
              whileHover={galleryCurrent === 0 ? {} : "hover"}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>
            <motion.img
              className="w-[16rem] h-[16rem] object-cover rounded-xl shadow-lg cursor-pointer"
              src={galleryImages[galleryCurrent]}
              alt=""
              onClick={() => handleImageClick(galleryImages[galleryCurrent])}
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              onClick={galleryNext}
              disabled={galleryCurrent === galleryImages.length - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-semibold transition-all duration-300 ${
                galleryCurrent === galleryImages.length - 1
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-[#D96B1A] hover:bg-[#b75f27] hover:scale-110 shadow-md"
              }`}
              variants={buttonVariants}
              initial="rest"
              whileHover={
                galleryCurrent === galleryImages.length - 1 ? {} : "hover"
              }
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </motion.div>
          <motion.div className="flex gap-2" variants={containerVariants}>
            {galleryImages.map((_, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === galleryCurrent
                    ? "bg-[#D96B1A] scale-125"
                    : "bg-gray-400"
                }`}
                variants={childVariants}
              />
            ))}
          </motion.div>
        </motion.div>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <motion.img
              src={selectedImage}
              alt=""
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
              onClick={handleClose}
              aria-label="Close full-screen image"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </motion.div>
      <ContactWithUs theme="coffee" />
      <AboutPage />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default CoffeePage;
