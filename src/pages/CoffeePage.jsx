import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
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

  const galleryNext = () => {
    if (galleryCurrent < galleryImages.length - 1)
      setGalleryCurrent(galleryCurrent + 1);
  };

  const galleryPrev = () => {
    if (galleryCurrent > 0) setGalleryCurrent(galleryCurrent - 1);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="hero-coffee bg-black">
        <div className="">
          <Navbar />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className=" text-center w-100 sm:w-full flex flex-col text-white">
              <h2 className="text-2xl  sm:text-3xl  lg:text-4xl bg-black/35 p-10 px-20 rounded-lg">
                Günün temposuna lezzetli bir mola verin!
              </h2>
            </div>
          </div>
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
      </div>

      <AfterHero
        img={image16}
        title="En İyi Kalite Kahve, Tek Bir Noktada"
        subTitle="Her fincanda özenle seçilmiş çekirdeklerin, ustalıkla harmanlandığı
            özel bir deneyime davetlisiniz. Cesy Co. Coffee, kahve tutkunları
            için lezzetin, özenin ve keyfin buluşma noktasıdır."
      />
      <div className="w-full py-20 bg-[#FEF7EA] mb-20 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Text with vertical line */}
          <div className="relative pl-6 border-l-4 border-[#D96B1A] text-gray-500 max-w-3xl">
            <p className="text-xl menu-title">
              Kahve tutkusunu paylaşan girişimcilerle birlikte büyümeye devam
              ediyoruz. Eğer siz de <strong>CESY CO.</strong>’nun sıcak
              atmosferini, lezzet dolu menüsünü ve yaratıcı atölye konseptini
              kendi şehrinize taşımak isterseniz, franchise sistemimiz tam size
              göre!
            </p>
          </div>

          <button
            onClick={() => setShowModal(false)}
            type="submit"
            className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white group"
          >
            <span class="relative z-10">Franchise Başvuru</span>

            <svg
              class="absolute inset-0 w-full h-full z-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.706 -1.436 186 52"
              preserveAspectRatio="none"
              fill="#D96B1A"
            >
              <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46 )" />
            </svg>
          </button>
        </div>
      </div>

      <div id="konsept" className="flex flex-col items-center p-6 sm:p-10 ">
        <h1 className="text-[#D96B1A] text-3xl sm:text-5xl menu-title mb-5 text-center">
          Favori Kahve Lezzetlerimiz
        </h1>
        <p className="text-gray-500 text-xl mb-10 sm:mb-20">
          Kahve menümüz, her damak zevkine hitap eden özel tariflerle tadına
          doyulmaz bir deneyim sunar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center w-full">
          <div className="px-6 sm:px-16 py-12 space-y-12 max-w-4xl mx-auto">
            {coffeeMenu.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#C2A291] pb-4 gap-4"
              >
                <div>
                  <h3 className="text-[30px] menu-title text-[#743F2B]">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-base sm:text-lg">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#743F2B] menu-title text-[19px]">
                    {item.price}
                  </span>
                  {item.isNew && (
                    <span
                      onClick={() => setShowModal(false)}
                      type="submit"
                      className="relative inline-flex items-center justify-center px-3 py-1 font-medium text-white group"
                    >
                      <span class="relative z-10">NEW</span>

                      <svg
                        class="absolute inset-0 w-full h-full z-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-0.706 -1.436 186 52"
                        preserveAspectRatio="none"
                        fill="#D96B1A"
                      >
                        <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46 )" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
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
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <img
              className="hidden w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image3}
              alt=""
            />
            <img
              className="hidden sm:block w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image4}
              alt=""
            />
          </div>
          <div className="px-6 sm:px-16 py-12 space-y-12 max-w-4xl mx-auto">
            {coffeeMenu.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#C2A291] pb-4 gap-4"
              >
                <div>
                  <h3 className="menu-title text-[#743F2B] text-[30px]">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-base sm:text-lg">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#743F2B] menu-title text-[19px]">
                    {item.price}
                  </span>
                  {item.isNew && (
                    <span
                      onClick={() => setShowModal(false)}
                      type="submit"
                      className="relative inline-flex items-center justify-center px-3 py-1 font-medium text-white group"
                    >
                      <span class="relative z-10">NEW</span>

                      <svg
                        class="absolute inset-0 w-full h-full z-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-0.706 -1.436 186 52"
                        preserveAspectRatio="none"
                        fill="#D96B1A"
                      >
                        <path d="M9.33 -0.46 C12.98 -0.14 17.58 0.38 22.61 0.16 31.15 -0.2 41.01 -1.43 54.51 -1.43 61.53 -1.43 72.62 -0.46 81.38 0.09 81.77 0.11 82.17 0.14 82.56 0.16 95.57 0.93 114.82 -0.24 128.49 0.16 141.93 0.56 155.38 -1.34 165.6 -1.43 171.71 -1.58 177.81 -1.04 183.8 0.16 183.8 0.16 185.28 0.8 185.28 13.35 185.28 19.59 184.18 28.68 183.8 36.65 183.44 44.09 183.8 50.38 183.8 50.38 177.05 50.06 170.31 49.74 163.56 49.42 155.74 50.2 147.88 50.52 140.03 50.38 127.02 50.16 120.86 48.53 111.52 48.53 78.4 48.53 83.18 50.16 61.29 50.38 39.4 50.61 31.85 49.54 23.95 49.42 10.61 49.22 0.43 51.12 0.08 50.38 -1.54 46.95 -0.23 44.23 0.08 36.65 0.39 29.07 1.78 24.94 1.78 15.81 1.78 10.91 -1.6 3.06 1.78 0.16 3 -0.88 5.69 -0.77 9.33 -0.46 )" />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <QuotesSection />
      <div className="mb-20 px-4 sm:px-10">
        <h1 className="text-[#D96B1A] menu-title text-4xl sm:text-6xl text-center">
          Galerimiz
        </h1>
        <p className="text-xl sm:text-2xl mt-4 text-center text-gray-500">
          Galerimize göz at, atmosferimizi hisset!
        </p>
        {/* Desktop View: All images */}
        <div className="hidden sm:flex gap-6 flex-wrap justify-center mt-10">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              className="w-[14rem] sm:w-[16rem] md:w-[20rem] h-[14rem] sm:h-[16rem] md:h-[20rem] object-cover rounded-xl"
              src={img}
              alt=""
            />
          ))}
        </div>
        {/* Mobile View: One image with pagination */}
        <div className="sm:hidden flex flex-col items-center gap-6 mt-10">
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
              className="w-[16rem] h-[16rem] object-cover rounded-xl shadow-lg"
              src={galleryImages[galleryCurrent]}
              alt=""
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
        </div>
      </div>
      <ContactWithUs />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default CoffeePage;
