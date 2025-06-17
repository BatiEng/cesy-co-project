import image15 from "../assets/footer-img.png";

function Footer() {
  return (
    <div>
      <div
        id="iletisim"
        className="flex flex-col lg:flex-row justify-between items-center gap-10 px-6 sm:px-10 lg:px-40 mb-5 text-center lg:text-left"
      >
        <div>
          <h3 className="text-[#855043] text-[24px] mb-4">İletişim</h3>
          <a
            href="tel:05568429165"
            className="text-gray-500 text-[17px] mb-2 block hover:text-[#855043] transition"
          >
            0556 842 9165
          </a>
          <a
            href="mailto:info@cesyco.com"
            className="text-gray-500 text-[17px] mb-2 block hover:text-[#855043] transition"
          >
            info@cesyco.com
          </a>
          <p className="text-gray-500 text-[17px] mb-2">Buca / İzmir</p>
        </div>

        <div>
          <img
            className="w-[7rem] sm:w-[9rem] h-[8rem] sm:h-[11rem] object-cover rounded-xl"
            src={image15}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-[#855043] text-[24px] mb-4">Çalışma Saatleri</h3>
          <div className="flex justify-between mb-2 w-[200px] sm:w-[250px] mx-auto lg:mx-0">
            <p className="text-gray-500 text-[17px]">Mon-Fri</p>
            <p className="text-gray-500 text-[17px]">09-22</p>
          </div>
          <div className="flex justify-between mb-2 w-[200px] sm:w-[250px] mx-auto lg:mx-0">
            <p className="text-gray-500 text-[17px]">Saturday</p>
            <p className="text-gray-500 text-[17px]">09-01</p>
          </div>
          <div className="flex justify-between mb-2 w-[200px] sm:w-[250px] mx-auto lg:mx-0">
            <p className="text-gray-500 text-[17px]">Sunday</p>
            <p className="text-gray-500 text-[17px]">09-23</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
