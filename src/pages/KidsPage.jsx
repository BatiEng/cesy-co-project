import Navbar from "../components/Navbar";
import image10 from "../assets/32.png";
import image15 from "../assets/37.png";
import image16 from "../assets/39.png";
import image17 from "../assets/40.png";
import image18 from "../assets/41.png";
import image19 from "../assets/42.png";
import image20 from "../assets/43.png";
import image21 from "../assets/44.png";
import image22 from "../assets/45.png";
import image23 from "../assets/46.png";
import image24 from "../assets/47.png";
import image25 from "../assets/48.png";
import image26 from "../assets/49.png";
import image27 from "../assets/50.png";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";
import ContactWithUs from "../components/ContactWithUs";
import AfterHero from "../components/AfterHero";
import QuotesSection from "../components/QuotesSection";
import ImageGallery from "../components/ImageGallery";

const KidsPage = () => {
  const images = [
    image17,
    image18,
    image19,
    image20,
    image15,
    image16,
    image23,
  ];
  const galleryImages = [image21, image22, image23, image24];

  const [galleryCurrent, setGalleryCurrent] = useState(0);

  const galleryNext = () => {
    if (galleryCurrent < galleryImages.length - 1)
      setGalleryCurrent(galleryCurrent + 1);
  };

  const galleryPrev = () => {
    if (galleryCurrent > 0) setGalleryCurrent(galleryCurrent - 1);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="hero-kids bg-black">
        <div className="">
          <Navbar />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className=" text-center w-97 sm:w-full flex flex-col text-white">
              <h2 className="text-2xl  sm:text-3xl  lg:text-4xl bg-black/35 p-10 px-20 rounded-lg">
                Güvenilir, eğitici ve eğlenceli aktiviteler ile çocuklarınız
                sosyalleşsin!
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-10 right-0  transform -translate-x-1/2"
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
        img={image25}
        title="Minik Kalpler İçin Büyük Deneyimler"
        subTitle="Çocukların eğlenmesini destekleyen özel, renkli aktiviteler ve
            yaratıcı ortamlarla minik misafirlerimizi tasarlıyoruz. Her detayda
            çocuklar için destekleyen bir sevgi, her sade keşif etkinlikte bir
            oyun yolculuğu! Atölyeler ve güvenli bir alan içerisinde unutulmaz
            anılar, sadece öğrenme değil; keşfetme alanı var. Miniklerin
            gelişimlerini destekliyor, hayal güçlerini serbest bırakıyoruz."
      />

      <motion.div
        className="mb-20 px-4 sm:px-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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

        <div className="sm:hidden flex flex-col items-center gap-6 mt-10">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={galleryPrev}
              disabled={galleryCurrent === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-semibold transition-all duration-300 ${
                galleryCurrent === 0
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-[#C66E31] hover:bg-[#b75f27] hover:scale-110 shadow-md"
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
                  : "bg-[#C66E31] hover:bg-[#b75f27] hover:scale-110 shadow-md"
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
                    ? "bg-[#C66E31] scale-125"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center px-4 sm:px-10 py-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <div className="w-24 sm:w-32 mb-6 sm:mb-10">
          <img src={image26} alt="Hayal Gücü" className="w-full h-auto" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#D96B1A] menu-title   max-w-3xl">
          Hayal gücü serbest, eğlence sınırsız!
        </h2>
      </motion.div>

      <motion.div
        id="konsept"
        className="flex flex-col lg:flex-row justify-between p-6 sm:p-10 gap-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-8 lg:w-1/3 text-right">
          <div>
            <h3 className="text-[#855043] menu-title text-3xl sm:text-4xl mb-2">
              Yaratıcı Atölyeler
            </h3>
            <p className="text-[#7a6f67] menu-title text-base sm:text-lg leading-relaxed">
              Sanat, el işi ve rengârenk malzemelerle dolu bir hayal dünyası...
              Çocukların yaratıcılıklarını özgürce ifade edebilecekleri sınırsız
              bir keşif alanı sunuyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-[#855043] menu-title text-2xl sm:text-3xl mb-2">
              Oyun ve Etkinlik Alanı
            </h3>
            <p className="text-[#7a6f67] menu-title text-base sm:text-lg leading-relaxed">
              Eğlenirken teşvik eden, enerjik bir öğrenme… Çocuklar için güvenli
              ve destekleyici bir ortam sunuyoruz.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 flex items-center justify-center">
          <img
            src={image27}
            alt="Atölye Görseli"
            className="w-full max-w-sm h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 lg:w-1/3 text-left">
          <div>
            <h3 className="text-[#855043] menu-title text-3xl sm:text-4xl mb-2">
              Minik Zihinler için Eğitimler
            </h3>
            <p className="text-[#7a6f67] menu-title text-base sm:text-lg leading-relaxed">
              Yaş gruplarına uygun, pedagojik temelli eğitici içerikler ve
              yaratıcı aktivitelerle çocukların gelişimini destekliyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-[#855043] menu-title text-2xl sm:text-3xl mb-2">
              Aile Dostu Deneyim
            </h3>
            <p className="text-[#7a6f67] menu-title text-base sm:text-lg leading-relaxed">
              Hem çocuklar hem de ebeveynler için düşünülmüş özel bir alan…
              Birlikte keyifli vakit geçirebilecekleri sıcak ve samimi bir ortam
              sunuyoruz.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-[#FEF7EA] mb-20 mt-20 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <QuotesSection />
      </motion.div>
      <ContactWithUs />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default KidsPage;
