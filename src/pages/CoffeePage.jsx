import Navbar from "../components/Navbar";
import image1 from "../assets/23.png";
import image2 from "../assets/24.png";
import image3 from "../assets/25.png";
import image4 from "../assets/26.png";
import image10 from "../assets/32.png";
import image15 from "../assets/37.png";
import image16 from "../assets/51.png";
import image17 from "../assets/52.png";
import image18 from "../assets/53.png";
import image19 from "../assets/54.png";
import image20 from "../assets/55.png";
import image21 from "../assets/56.png";
import image22 from "../assets/57.png";
import image23 from "../assets/58.png";
import image24 from "../assets/59.png";
import image25 from "../assets/39.png";
import { useState } from "react";

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
      <div className="hero-coffee">
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
              <h2 className="text-5xl hero-subtitle">COFFEE COMPANY</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center my-16 mx-6 md:mx-20">
        <div className="w-full lg:w-[950px]">
          <img
            src={image16}
            alt="a"
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>
        <div className="flex flex-col justify-between text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#C66E31] mb-4">
            En İyi Kalite Kahve, Tek Bir Noktada
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            Her fincanda özenle seçilmiş çekirdeklerin, ustalıkla harmanlandığı
            özel bir deneyime davetlisiniz. Cesy Co. Coffee, kahve tutkunları
            için lezzetin, özenin ve keyfin buluşma noktasıdır.
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
      <div className="w-full py-20 bg-[#FEF7EA] mb-20 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Text with vertical line */}
          <div className="relative pl-6 border-l-4 border-[#C66E31] text-gray-500 max-w-3xl">
            <p className="text-xl">
              Kahve tutkusunu paylaşan girişimcilerle birlikte büyümeye devam
              ediyoruz. Eğer siz de <strong>CESY CO.</strong>’nun sıcak
              atmosferini, lezzet dolu menüsünü ve yaratıcı atölye konseptini
              kendi şehrinize taşımak isterseniz, franchise sistemimiz tam size
              göre!
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#C66E31] text-white text-base sm:text-lg px-6 py-3 rounded-full hover:bg-[#b75f27] transition whitespace-nowrap">
            Franchise Başvuru
          </button>
        </div>
      </div>

      <div id="konsept" className="flex flex-col items-center p-6 sm:p-10 ">
        <h1 className="text-[#C66E31] text-3xl sm:text-5xl mb-5 text-center">
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
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#743F2B]">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-base sm:text-lg">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#743F2B] font-bold text-xl sm:text-2xl">
                    {item.price}
                  </span>
                  {item.isNew && (
                    <span className="bg-[#E87817] text-white text-sm px-4 py-1 rounded-full font-semibold">
                      NEW
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
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#743F2B]">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-base sm:text-lg">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#743F2B] font-bold text-xl sm:text-2xl">
                    {item.price}
                  </span>
                  {item.isNew && (
                    <span className="bg-[#E87817] text-white text-sm px-4 py-1 rounded-full font-semibold">
                      NEW
                    </span>
                  )}
                </div>
              </div>
            ))}
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
              Çekirdekten fincana kadar geçen her aşamayı özenle seçiyor, kahve
              deneyimini bir ritüele dönüştürüyoruz.
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
        <img className="w-full h-[35rem] object-cover" src={image25} alt="" />
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

export default CoffeePage;
