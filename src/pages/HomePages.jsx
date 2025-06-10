import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const HomePage = () => {
  const [bgClass, setBgClass] = useState("bg-kids");
  const handleEnter = (cls) => setBgClass(cls);
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className={`hero ${bgClass} bg-black`}>
      <div className="text-white text-center  ">
        <div className="bg-black/35 px-6 sm:px-10 md:px-16 w-full relative">
          <div className="flex items-center justify-center relative">
            <img className="w-60" src={logo} alt="" />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20 text-2xl sm:text-3xl md:text-4xl">
            <Link
              to="/kids"
              className="px-6 py-3 border border-white bg-black/35 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              onMouseEnter={() => handleEnter("bg-kids")}
            >
              KIDS
            </Link>
            <Link
              to="/workshop"
              className="px-6 py-3 border border-white bg-black/35 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              onMouseEnter={() => handleEnter("bg-default")}
            >
              WORKSHOP
            </Link>
            <Link
              to="/coffee"
              className="px-6 py-3 border border-white bg-black/35 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              onMouseEnter={() => handleEnter("bg-coffee")}
            >
              COFFEE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
