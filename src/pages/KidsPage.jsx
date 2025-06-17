import Navbar from "../components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
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
import { useState } from "react";
import Footer from "../components/Footer";
import ContactWithUs from "../components/ContactWithUs";
import AfterHero from "../components/AfterHero";
import QuotesSection from "../components/QuotesSection";
import ImageGallery from "../components/ImageGallery";
import Arrow from "../components/Arrow";
import AboutPage from "../components/AboutPage";

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

  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryCurrent, setGalleryCurrent] = useState(0);

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
      <div className="hero-kids bg-black relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Navbar />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="text-center sm:w-full flex flex-col text-white"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl bg-black/35 p-10 px-20 rounded-lg"
                variants={childVariants}
              >
                Güvenilir, Eğitici ve Eğlenceli Aktiviteler ile Çocuklarınız
                sosyalleşsin!
              </motion.h2>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Arrow />
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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
                  : "bg-[#C66E31] hover:bg-[#b75f27] hover:scale-110 shadow-md"
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
                  : "bg-[#C66E31] hover:bg-[#b75f27] hover:scale-110 shadow-md"
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
                    ? "bg-[#C66E31] scale-125"
                    : "bg-gray-400"
                }`}
                variants={childVariants}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center justify-center px-4 sm:px-10 py-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="w-24 sm:w-32 mb-6 sm:mb-10"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={image26} alt="Hayal Gücü" className="w-full h-auto" />
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-5xl lg:text-6xl text-[#D96B1A] menu-title max-w-3xl"
          variants={childVariants}
        >
          Hayal gücü serbest, eğlence sınırsız!
        </motion.h2>
      </motion.div>
      <motion.div
        id="konsept"
        className="flex flex-col lg:flex-row justify-between p-6 sm:p-10 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col gap-8 lg:w-1/3 text-right"
          variants={containerVariants}
        >
          <motion.div variants={childVariants}>
            <motion.h3
              className="text-[#855043] menu-title text-3xl sm:text-4xl mb-2"
              variants={childVariants}
            >
              Yaratıcı Atölyeler
            </motion.h3>
            <motion.p
              className="text-[#7a6f67] menu-title text-base sm:text-lg leading-relaxed"
              variants={childVariants}
            >
              Sanat, el işi ve rengârenk malzemelerle dolu bir hayal dünyası...
              Çocukların yaratıcılıklarını özgürce ifade edebilecekleri sınırsız
              bir keşif alanı sunuyoruz.
            </motion.p>
          </motion.div>
          <motion.div variants={childVariants}>
            <motion.h3
              className="text-[#855043] menu-title text-2xl sm:text-3xl mb-2"
              variants={childVariants}
            >
              Oyun ve Etkinlik Alanı
            </motion.h3>
            <motion.p
              className="text-[#7a6f67] menu-title text-base sm:text-lg leading-relaxed"
              variants={childVariants}
            >
              Eğlenirken teşvik eden, enerjik bir öğrenme… Çocuklar için güvenli
              ve destekleyici bir ortam sunuyoruz.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:w-1/3 flex items-center justify-center"
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image27}
            alt="Atölye Görseli"
            className="w-full max-w-sm h-auto rounded-xl shadow-md"
            style={{ y: yParallax }}
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-8 lg:w-1/3 text-left"
          variants={containerVariants}
        >
          <motion.div variants={childVariants}>
            <motion.h3
              className="text-[#855043] menu-title text-3xl sm:text-4xl mb-2"
              variants={childVariants}
            >
              Minik Zihinler için Eğitimler
            </motion.h3>
            <motion.p
              className="text-[#7a6f67] menu-title text-base sm:text-lg leading-relaxed"
              variants={childVariants}
            >
              Yaş gruplarına uygun, pedagojik temelli eğitici içerikler ve
              yaratıcı aktivitelerle çocukların gelişimini destekliyoruz.
            </motion.p>
          </motion.div>
          <motion.div variants={childVariants}>
            <motion.h3
              className="text-[#855043] menu-title text-2xl sm:text-3xl mb-2"
              variants={childVariants}
            >
              Aile Dostu Deneyim
            </motion.h3>
            <motion.p
              className="text-[#7a6f67] menu-title text-base sm:text-lg leading-relaxed"
              variants={childVariants}
            >
              Hem çocuklar hem de ebeveynler için düşünülmüş özel bir alan…
              Birlikte keyifli vakit geçirebilecekleri sıcak ve samimi bir ortam
              sunuyoruz.
            </motion.p>
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
      <motion.div
        className="w-full bg-[#FEF7EA] mb-20 mt-20 flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <QuotesSection />
      </motion.div>
      <ContactWithUs />
      <AboutPage />
      <ImageGallery images={images} />
      <Footer />
    </div>
  );
};

export default KidsPage;
