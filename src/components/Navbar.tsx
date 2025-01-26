import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Redes sociais */}
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>

        {/* Nome no centro */}
        <div className="text-xl font-bold tracking-wide font-serif">
          GABRIELLE RIOS
        </div>

        {/* Menu hambúrguer */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-8 h-6 flex flex-col justify-center items-center gap-1 focus:outline-none cursor-pointer"
        >
          <span className="w-full h-0.5 bg-white"></span>
          <span className="w-full h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-4 shadow-lg">
          <p className="text-center">Aqui vai o conteúdo do menu</p>
        </div>
      )}
    </header>
  );
}
