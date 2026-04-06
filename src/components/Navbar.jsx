import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "О себе", href: "#about" },
  { name: "Проекты", href: "#projects" },
  { name: "Контакты", href: "#contact" },
  { name: "Engineering", href: "#engineering" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map(l => l.href.replace("#", ""));
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-gray-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Li Yanmei
          </span>
        </motion.div>
        {/* DESKTOP */}
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          {links.map(link => {
            const isActive = active === link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                className="relative group"
              >
                <span
                  className={`transition duration-300 ${
                    isActive ? "text-blue-400" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </span>

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-pink-500 transition-all duration-300 group-hover:w-full" />

                {/* active underline */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-400 to-pink-500" />
                )}
              </a>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400"
        >
          ☰
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 px-6 py-6 space-y-6"
          >
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 text-lg"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}