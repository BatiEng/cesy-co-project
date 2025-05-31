import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [bgClass, setBgClass] = useState("bg-kids");

  const handleEnter = (cls) => setBgClass(cls);

  return (
    <div className={`hero ${bgClass}`}>
      <div className="text-white text-center  ">
        <div className="bg-black/35 p-6 sm:p-10 md:p-16 w-full relative">
          <div className="flex items-center justify-center relative">
            {/* Phone number: visible on large screens (left-top) */}
            <p className="hidden sm:block absolute left-2 top-2 text-sm sm:text-base text-gray-300">
              +90 555 688 7162
            </p>

            {/* Centered title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mx-auto text-gray-300"
              style={{ fontFamily: "'Yellowtail', cursive" }}
            >
              Cesy Co.
            </h1>
          </div>

          {/* Phone number: visible only on small screens, below h1 */}
          <p className="block sm:hidden mt-4 text-sm text-gray-300">
            +90 555 688 7162
          </p>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <p
            className="text-base sm:text-lg md:text-xl max-w-md"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Yenişehir Mah. Gaziler Cad No: 353/2 D:52 Konak/ İzmir
          </p>

          <div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-6 sm:gap-12 md:gap-20 text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <Link
              to="/kids"
              className="link-underline cursor-pointer"
              onMouseEnter={() => handleEnter("bg-kids")}
            >
              KIDS
            </Link>
            <Link
              to="/workshop"
              className="link-underline cursor-pointer"
              onMouseEnter={() => handleEnter("bg-default")}
            >
              WORKSHOP
            </Link>
            <Link
              to="/coffee"
              className="link-underline cursor-pointer"
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
