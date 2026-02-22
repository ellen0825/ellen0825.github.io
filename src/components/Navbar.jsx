import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
       <div className="text-white text-lg font-light tracking-wider">
          ELLEN <span className="text-blue-400">M.</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm tracking-wide">
          <a
            href="#about"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4 text-gray-400">
          <a href="#about" className="block hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="block hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="block hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}