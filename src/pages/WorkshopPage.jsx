import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import image from "../assets/22.png";
import image1 from "../assets/23.png";
import image2 from "../assets/24.png";
import image3 from "../assets/25.png";
import image4 from "../assets/26.png";
import image5 from "../assets/27.png";
import image6 from "../assets/28.png";
import image7 from "../assets/29.png";
import image8 from "../assets/30.png";
import image9 from "../assets/31.png";
import image10 from "../assets/32.png";
import image11 from "../assets/33.png";
import image12 from "../assets/34.png";
import image13 from "../assets/35.png";
import image14 from "../assets/36.png";
import logo from "../assets/logo.png";
import { useState } from "react";
import Footer from "../components/Footer";
import ContactWithUs from "../components/ContactWithUs";
import AfterHero from "../components/AfterHero";
import QuotesSection from "../components/QuotesSection";
import ImageGallery from "../components/ImageGallery";
import Arrow from "../components/Arrow";
import AboutPage from "../components/AboutPage";

const WorkshopPage = () => {
  const images = [image11, image12, image13, image14, image10, image2, image9];
  const galleryImages = [image5, image6, image7, image8]; // Images for Galerimiz section

  const [galleryCurrent, setGalleryCurrent] = useState(0); // State for Galerimiz carousel
  const [selectedImage, setSelectedImage] = useState(null); // State for full-screen image

  const galleryNext = () => {
    if (galleryCurrent < galleryImages.length - 1)
      setGalleryCurrent(galleryCurrent + 1);
  };

  const galleryPrev = () => {
    if (galleryCurrent > 0) setGalleryCurrent(galleryCurrent - 1);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="hero-workshop bg-black">
        <div className="">
          <Navbar />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className=" text-center w-100 sm:w-full flex flex-col text-white">
              <h2 className="text-2xl  sm:text-3xl  lg:text-4xl bg-black/35 p-10 px-20 rounded-lg">
                Keyif dolu yeni hobiler edinin, yeni yetenekler kazanın.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
      <Arrow />
      <AfterHero
        img={image}
        title="Yaratıcılığın Buluşma Noktası"
        subTitle="CESY CO. Workshop, hayal gücünü pratiiğe döken, üretimi deneyimle
            bulușturan ilham verici bir alan. Kahve kokulari eșliğinde
            gerçekleşen atölyelerde; sanat, tasarım, el iş, gastronomi ve daha
            pek çok farklı disiplini bir araya getiriyoruz."
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:h-[300px] py-10 bg-[#FEF7EA] mb-10 flex items-center justify-center"
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 items-center justify-center">
          <input
            type="text"
            placeholder="Seramik yapma"
            className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#D96B1A] text-base sm:text-lg px-2 py-1 w-64"
          />
          <input
            type="text"
            placeholder="31 Mayıs, 11.00"
            className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#D96B1A] text-base sm:text-lg px-2 py-1 w-64"
          />
          <input
            type="text"
            placeholder="1 kişi"
            className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#D96B1A] text-base sm:text-lg px-2 py-1 w-64"
          />
          <button
            type="submit"
            className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white group"
          >
            <span className="relative z-10 text-[13px]">
              Katılım Talebi oluştur
            </span>
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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center p-6 sm:p-10"
      >
        <h1 className="text-[#D96B1A] menu-title text-3xl sm:text-5xl mb-10 sm:mb-20 text-center">
          CESY CO. WORKSHOP
        </h1>
        <div
          id="konsept"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center w-full"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h3 className="text-[#855043] text-2xl sm:text-3xl mb-4">
              Misyonumuz
            </h3>
            <p className="text-style leading-loose text-justify">
              Katılımcıların yaratıcılıklarını keşfetmelerine, üretmenin keyfini
              deneyimlemelerine ve sosyal bağlar kurmalarına olanak tanıyan
              ilham dolu atölyeler sunmak. CESY CO. Workshop sadece bir atölye
              değil; paylaşım, öğrenme ve bir etkinlik dönüşüm alanıdır.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <img
              className="w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image1}
              alt=""
            />
            <img
              className="hidden sm:block w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image2}
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <img
              className="w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image3}
              alt=""
            />
            <img
              className="hidden sm:block w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image4}
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h3 className="text-[#855043] text-2xl sm:text-3xl mb-4">
              Vizyonumuz
            </h3>
            <p className="text-style leading-loose text-justify">
              Sanatın, tasarımın ve 未 ve ulaşılabilirliğin bir araya geldiği;
              ilhamın bulaşıcı bir hale dönüştüğü bir ortam oluşturmak. CESY CO.
              Workshop’u bu hayalin gerçeğe dönüştüğü bir yer haline getirmek.
              Emeğin, fikirlerin özgürce paylaşıldığı; herkesin katkıda
              bulunabildiği yaratıcı üretimin merkezi olan bir topluluk inşa
              etmek.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <QuotesSection />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 px-4 sm:px-10"
      >
        <h1 className="text-[#D96B1A] menu-title text-4xl sm:text-6xl text-center">
          Galerimiz
        </h1>
        <p className="text-xl sm:text-2xl mt-4 text-center text-gray-500">
          Galerimize göz at, atmosferimizi hisset!
        </p>

        {/* Desktop View: Grid with full-screen functionality */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 mt-10 max-w-4xl mx-auto"
        >
          {/* First image: spans 2 rows vertically */}
          <img
            className="w-full h-[28rem] sm:h-[25rem] md:h-[31rem] object-cover rounded-xl row-span-2 cursor-pointer"
            src={galleryImages[0]}
            alt=""
            onClick={() => handleImageClick(galleryImages[0])}
          />

          {/* Second and third images: stacked vertically */}
          <img
            className="w-full h-[14rem] sm:h-[12rem] md:h-[15rem] object-cover rounded-xl cursor-pointer"
            src={galleryImages[1]}
            alt=""
            onClick={() => handleImageClick(galleryImages[1])}
          />
          <img
            className="w-full h-[14rem] sm:h-[12rem] md:h-[15rem] object-cover rounded-xl cursor-pointer"
            src={galleryImages[2]}
            alt=""
            onClick={() => handleImageClick(galleryImages[2])}
          />

          {/* Fourth image: spans 2 rows vertically */}
          <img
            className="w-full h-[28rem] sm:h-[25rem] md:h-[31rem] object-cover rounded-xl row-span-2 col-start-3 row-start-1 cursor-pointer"
            src={galleryImages[3]}
            alt=""
            onClick={() => handleImageClick(galleryImages[3])}
          />
        </motion.div>

        {/* Mobile View: Carousel with full-screen functionality */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="sm:hidden flex flex-col items-center gap-6 mt-10"
        >
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={galleryPrev}
              disabled={galleryCurrent === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-semibold transition-all duration-300 ${
                galleryCurrent === 0
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-[#D96B1A] hover:bg-[#b75f27] hover:scale-110 shadow-md"
              }`}
            >
              ←
            </button>
            <img
              className="w-[16rem] h-[16rem] object-cover rounded-xl shadow-lg cursor-pointer"
              src={galleryImages[galleryCurrent]}
              alt=""
              onClick={() => handleImageClick(galleryImages[galleryCurrent])}
            />
            <button
              onClick={galleryNext}
              disabled={galleryCurrent === galleryImages.length - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-semibold transition-all duration-300 ${
                galleryCurrent === galleryImages.length - 1
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-[#D96B1A] hover:bg-[#b75f27] hover:scale-110 shadow-md"
              }`}
            >
              →
            </button>
          </div>
          <div className="flex gap-2">
            {galleryImages.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === galleryCurrent
                    ? "bg-[#D96B1A] scale-125"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Full-screen image overlay */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleClose}
          >
            <img
              src={selectedImage}
              alt=""
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
              onClick={handleClose}
              aria-label="Close full-screen image"
            >
              ×
            </button>
          </motion.div>
        )}
      </motion.div>
      <ContactWithUs />
      <AboutPage />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default WorkshopPage;
