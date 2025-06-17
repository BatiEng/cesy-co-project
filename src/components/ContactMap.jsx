import { useState } from "react";

function ContactMap() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Toggle full-screen mode
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`relative w-full ${
        isFullScreen ? "fixed inset-0 z-50" : "h-[400px]"
      } rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-800`}
    >
      {/* Map Container */}
      <div className="relative w-full h-full group">
        {/* Google Maps Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.672398717304!2d27.14767411154048!3d38.379699376966954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdf007c76e605%3A0x43c82df7a350a254!2sCesyCo.%20Kids!5e0!3m2!1str!2str!4v1750160814397!5m2!1str!2str"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full transition-transform duration-300 group-hover:scale-105"
          title="CesyCo Kids Location Map"
          aria-label="Google Maps showing CesyCo Kids location"
        ></iframe>

        {/* Overlay for Loading State */}
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse hidden"
          id="map-loader"
        ></div>

        {/* Full-Screen Toggle Button */}
        <button
          onClick={toggleFullScreen}
          className="absolute top-4 right-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={
            isFullScreen ? "Exit full-screen map" : "View map in full-screen"
          }
        >
          {isFullScreen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m12 0v-4m0 4h-4"
              />
            </svg>
          )}
        </button>

        {/* Optional Map Style Toggle */}
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full shadow-md text-sm font-medium">
          Map View
        </div>
      </div>

      {/* Optional Overlay for Branding or Info */}
      <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent p-4">
        <h3 className="text-white text-lg font-semibold drop-shadow-md">
          CesyCo Kids
        </h3>
        <p className="text-white text-sm drop-shadow-md">
          Visit us at our location!
        </p>
      </div>
    </div>
  );
}

export default ContactMap;
