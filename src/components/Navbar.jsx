import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react for icons
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center p-6 md:px-20 text-white relative z-10">
        <h1
          onClick={() => navigate("/")}
          className="text-4xl md:text-6xl navbar-title cursor-pointer"
          style={{ fontFamily: "'Yellowtail', cursive" }}
        >
          Cesy Co.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-xl items-center">
          <a
            onClick={() => window.scrollTo(0, 0)}
            href="#anasayfa"
            className="nav-link"
          >
            ANASAYFA
          </a>
          <a className="nav-link" href="#" onClick={() => setShowModal(true)}>
            HAKKIMIZDA
          </a>
          <a className="nav-link" href="#konsept">
            KONSEPT
          </a>
          <a href="#iletisim" className="nav-link">
            İLETİŞİM
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#FEF7EA] z-40 flex flex-col justify-between items-center py-10 px-6 text-xl">
          {/* Close Button */}
          <div className="self-end">
            <button onClick={() => setMenuOpen(false)}>
              <X size={32} className="text-black" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-8 text-black">
            <a href="#anasayfa" onClick={() => setMenuOpen(false)}>
              ANASAYFA
            </a>
            <a
              href="#"
              onClick={() => {
                setShowModal(true);
                setMenuOpen(false);
              }}
            >
              HAKKIMIZDA
            </a>
            <a href="#konsept" onClick={() => setMenuOpen(false)}>
              KONSEPT
            </a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>
              İLETİŞİM
            </a>
          </div>

          {/* Bottom Brand Text */}
          <div
            className="text-4xl text-[#7E5246]"
            style={{ fontFamily: "'Yellowtail', cursive" }}
          >
            Cesy Co.
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-opacity-60"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-white text-black p-10 rounded-xl w-[90%] max-w-xl text-center animate-zoom">
            <h2 className="text-2xl font-bold mb-4 text-[#7E5246]">
              Hakkımızda
            </h2>
            <p className="text-lg">
              Cesy Co. olarak çocuklara, yetişkinlere ve kahve severlere özel
              konseptler sunuyoruz. Atölyelerimiz ve mekan tasarımımızla keyifli
              bir ortam sağlıyoruz.
            </p>
            <button
              className="mt-6 bg-[#C66E31] hover:bg-[#b75f27] text-white px-6 py-2 rounded cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
