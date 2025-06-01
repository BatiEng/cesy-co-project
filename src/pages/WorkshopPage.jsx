import Navbar from "../components/Navbar";
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
import { motion } from "framer-motion";
import image15 from "../assets/37.png";
import { useState } from "react";

const WorkshopPage = () => {
  const images = [image11, image12, image13, image14];
  const galleryImages = [image5, image6, image7, image8]; // Images for Galerimiz section

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
      <div className="hero-workshop">
        <div className="">
          <Navbar />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center flex flex-col text-white">
              <h1
                className="big-title"
                style={{ fontFamily: "'Yellowtail', cursive" }}
              >
                Cesy Co.
              </h1>
              <h2 className="text-5xl hero-subtitle">WORKSHOP</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center my-16 mx-6 md:mx-20">
        <div className="w-full lg:w-[950px]">
          <img src={image} alt="a" className="w-full h-auto max-w-sm mx-auto" />
        </div>
        <div className="flex flex-col justify-between text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#C66E31] mb-4">
            Yaratıcılığın Buluşma Noktası
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            CESY CO. Workshop, hayal gücünü pratiiğe döken, üretimi deneyimle
            bulușturan ilham verici bir alan. Kahve kokulari eșliğinde
            gerçekleşen atölyelerde; sanat, tasarım, el iş, gastronomi ve daha
            pek çok farklı disiplini bir araya getiriyoruz.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="bg-[#C66E31] hover:bg-[#b75f27] btn rounded-full px-6 py-3 text-white text-lg sm:text-xl transition"
            >
              Daha Fazla Keşfet
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[300px] py-10 bg-[#FEF7EA] mb-20 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 items-center justify-center">
          <input
            type="text"
            placeholder="Seramik yapma"
            className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#C66E31] text-base sm:text-lg px-2 py-1 w-64"
          />
          <input
            type="text"
            placeholder="31 Mayıs, 11.00"
            className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#C66E31] text-base sm:text-lg px-2 py-1 w-64"
          />
          <input
            type="text"
            placeholder="1 kişi"
            className="bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-[#C66E31] text-base sm:text-lg px-2 py-1 w-64"
          />
          <button className="bg-[#C66E31] text-white text-base sm:text-lg px-6 py-2 rounded-full hover:bg-[#b75f27] transition cursor-pointer whitespace-nowrap">
            Katılım talebi oluştur.
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center p-6 sm:p-10">
        <h1 className="text-[#C66E31] text-3xl sm:text-5xl mb-10 sm:mb-20 text-center">
          CESY CO. WORKSHOP
        </h1>
        <div
          id="konsept"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center w-full"
        >
          <div className="max-w-4xl">
            <h3 className="text-[#7E5246] text-2xl sm:text-3xl mb-4">
              Misyonumuz
            </h3>
            <p className="text-lg sm:text-2xl text-gray-500 leading-loose text-justify">
              Katılımcıların yaratıcılıklarını keşfetmelerine, üretmenin keyfini
              deneyimlemelerine ve sosyal bağlar kurmalarına olanak tanıyan
              ilham dolu atölyeler sunmak. CESY CO. Workshop sadece bir atölye
              değil; paylaşım, öğrenme ve bir etkinlik dönüşüm alanıdır.
            </p>
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
              className="w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image3}
              alt=""
            />
            <img
              className="hidden sm:block w-[16rem] sm:w-[20rem] h-[16rem] sm:h-[20rem] object-cover rounded-xl"
              src={image4}
              alt=""
            />
          </div>
          <div className="max-w-4xl">
            <h3 className="text-[#7E5246] text-2xl sm:text-3xl mb-4">
              Vizyonumuz
            </h3>
            <p className="text-lg sm:text-2xl text-gray-500 leading-loose text-justify">
              Sanatın, tasarımın ve ulaşılabilirliğin bir araya geldiği; ilhamın
              bulaşıcı bir hale dönüştüğü bir ortam oluşturmak. CESY CO.
              Workshop’u bu hayalin gerçeğe dönüştüğü bir yer haline getirmek.
              Emeğin, fikirlerin özgürce paylaşıldığı; herkesin katkıda
              bulunabildiği yaratıcı üretimin merkezi olan bir topluluk inşa
              etmek.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FEF7EA] mb-20 py-10 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 px-4">
          <div className="text-[#C66E31] text-4xl sm:text-5xl leading-none">
            “
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 text-[#C66E31]">
            <div className="hidden sm:block text-3xl sm:text-5xl cursor-pointer">
              ←
            </div>
            <p className="text-xl sm:text-3xl font-medium text-center sm:text-left px-2">
              Hayal et, dene, üret. Hepsi burada başlıyor.
            </p>
            <div className="hidden sm:block text-3xl sm:text-5xl cursor-pointer">
              →
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 px-4 sm:px-10">
        <h1 className="text-[#C66E31] text-4xl sm:text-6xl text-center">
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
      </div>
      <div className="mb-20">
        <img className="w-full h-[35rem] object-cover" src={image9} alt="" />
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
      </div>
      <div className="px-4 sm:px-10 mb-20">
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
      </div>
      <div
        id="iletisim"
        className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 sm:px-10 lg:px-40 mb-20 text-center lg:text-left"
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
      </div>
    </div>
  );
};

export default WorkshopPage;
