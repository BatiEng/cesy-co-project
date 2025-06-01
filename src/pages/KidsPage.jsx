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
import { motion } from "framer-motion";
import { useState } from "react";

const KidsPage = () => {
  const images = [image17, image18, image19, image20];
  const galleryImages = [image21, image22, image23, image24]; // Images for Galerimiz section

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
      <div className="hero-kids">
        <div className="">
          <Navbar />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center flex flex-col text-white">
              <h1
                className="big-title"
                style={{ fontFamily: "'Yellowtail', cursive" }}
              >
                Cesy Co.
              </h1>
              <h2 className="text-5xl hero-subtitle">KIDS</h2>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center p-6 sm:p-10 gap-8 md:gap-16 mt-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={image25} alt="a" className="w-full h-auto rounded-xl" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#7E5246] text-2xl sm:text-3xl mb-4">
            Minik Kalpler İçin Büyük Deneyimler
          </h3>
          <p className="text-lg sm:text-2xl text-gray-500 leading-loose text-justify">
            Çocukların eğlenmesini destekleyen özel, renkli aktiviteler ve
            yaratıcı ortamlarla minik misafirlerimizi tasarlıyoruz. Her detayda
            çocuklar için destekleyen bir sevgi, her sade keşif etkinlikte bir
            oyun yolculuğu! Atölyeler ve güvenli bir alan içerisinde unutulmaz
            anılar, sadece öğrenme değil; keşfetme alanı var. Miniklerin
            gelişimlerini destekliyor, hayal güçlerini serbest bırakıyoruz.
          </p>
        </motion.div>
      </div>

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
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#C66E31] font-semibold leading-snug max-w-3xl">
          Hayal gücü serbest, eğlence sınırsız!
        </h2>
      </motion.div>

      <motion.div
        id="konsept"
        className="flex flex-col lg:flex-row  justify-between p-6 sm:p-10 gap-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left Column */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          <div>
            <h3 className="text-[#7E5246] text-3xl sm:text-4xl mb-2">
              Yaratıcı Atölyeler
            </h3>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              Sanat, el işi ve rengârenk malzemelerle dolu bir hayal dünyası...
              Çocukların yaratıcılıklarını özgürce ifade edebilecekleri sınırsız
              bir keşif alanı sunuyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-[#7E5246] text-2xl sm:text-3xl mb-2">
              Oyun ve Etkinlik Alanı
            </h3>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
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
        <div className="flex flex-col gap-8 lg:w-1/3">
          <div>
            <h3 className="text-[#7E5246] text-3xl sm:text-4xl mb-2">
              Minik Zihinler için Eğitimler
            </h3>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              Yaş gruplarına uygun, pedagojik temelli eğitici içerikler ve
              yaratıcı aktivitelerle çocukların gelişimini destekliyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-[#7E5246] text-2xl sm:text-3xl mb-2">
              Aile Dostu Deneyim
            </h3>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              Hem çocuklar hem de ebeveynler için düşünülmüş özel bir alan…
              Birlikte keyifli vakit geçirebilecekleri sıcak ve samimi bir ortam
              sunuyoruz.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-[#FEF7EA] mb-20 py-10 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 px-4">
          <div className="text-[#C66E31] text-4xl sm:text-5xl leading-none">
            “
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 text-[#C66E31]">
            <div className="hidden sm:block text-3xl sm:text-5xl cursor-pointer">
              ←
            </div>
            <p className="text-xl sm:text-3xl font-medium text-center  px-2">
              Güvenli ortamımızda çocuklar hem eğlenir hem de gelişimlerine
              katkı sağlayan etkinliklerle büyürken öğrenmenin tadına varırlar.
              Ailelerin gönül rahatlığıyla çocuklarını emanet edebilecekleri,
              sıcak ve güvenilir bir ortam sunuyoruz.
            </p>
            <div className="hidden sm:block text-3xl sm:text-5xl cursor-pointer">
              →
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img className="w-full h-[35rem] object-cover" src={image16} alt="" />
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-30 gap-16 mt-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left ">
            <h2 className="text-[#C66E31] text-4xl">
              Herhangi Bir Sorunuz Varsa
            </h2>
            <h2 className="text-[#C66E31] text-4xl mb-10">
              Bizimle İletişime Geçin
            </h2>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="İsminiz"
                className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#C66E31] text-lg px-2 py-1 w-72"
              />
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#C66E31] text-lg px-2 py-1 w-72"
              />
              <input
                type="text"
                placeholder="Mesajınız"
                className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#C66E31] text-lg px-2 py-1 w-72"
              />
              <button className="bg-[#C66E31] text-white text-lg px-6 py-2 rounded-full hover:bg-[#b75f27] transition cursor-pointer">
                Katılım talebi oluştur.
              </button>
            </div>
          </div>
          <div className="max-w-md">
            <img
              className="w-full h-auto object-contain"
              src={image10}
              alt="Contact Visual"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="px-4 sm:px-10 mb-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="hidden sm:flex gap-6 flex-wrap justify-center">
          {images.map((img, i) => (
            <img
              key={i}
              className="w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={img}
              alt=""
            />
          ))}
        </div>
        {/* Mobile View: One image with pagination arrows outside */}
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
              src={images[galleryCurrent]}
              alt=""
            />
            <button
              onClick={galleryNext}
              disabled={galleryCurrent === images.length - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-semibold transition-all duration-300 ${
                galleryCurrent === images.length - 1
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-[#C66E31] hover:bg-[#b75f27] hover:scale-110 shadow-md"
              }`}
            >
              →
            </button>
          </div>
          <div className="flex gap-2">
            {images.map((_, i) => (
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
        id="iletisim"
        className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 sm:px-10 lg:px-40 mb-20 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="text-[#7E5246] text-3xl sm:text-4xl mb-4">İletişim</h3>
          <p className="text-gray-500 text-lg sm:text-xl mb-2">0556 842 9165</p>
          <p className="text-gray-500 text-lg sm:text-xl mb-2">
            info@cesyco.com
          </p>
          <p className="text-gray-500 text-lg sm:text-xl mb-2">Buca / İzmir</p>
        </div>
        <div>
          <img
            className="w-[8rem] sm:w-[10rem] h-[8rem] sm:h-[10rem] object-cover rounded-xl"
            src={image15}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-[#7E5246] text-3xl sm:text-4xl mb-4">
            Çalışma Saatleri
          </h3>
          <div className="flex justify-between mb-2 w-[200px] sm:w-[250px] mx-auto lg:mx-0">
            <p className="text-gray-500 text-lg sm:text-xl">Mon-Fri</p>
            <p className="text-gray-500 text-lg sm:text-xl">09-22</p>
          </div>
          <div className="flex justify-between mb-2 w-[200px] sm:w-[250px] mx-auto lg:mx-0">
            <p className="text-gray-500 text-lg sm:text-xl">Saturday</p>
            <p className="text-gray-500 text-lg sm:text-xl">09-01</p>
          </div>
          <div className="flex justify-between mb-2 w-[200px] sm:w-[250px] mx-auto lg:mx-0">
            <p className="text-gray-500 text-lg sm:text-xl">Sunday</p>
            <p className="text-gray-500 text-lg sm:text-xl">09-23</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KidsPage;
