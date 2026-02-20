import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineBuildingOffice2, HiArrowRight, HiBars3, HiXMark } from "react-icons/hi2";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Work", path: "/work" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Credentials", path: "/credentials" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <HiOutlineBuildingOffice2 className="w-5 h-5" />
          </div>
          <h2 className="text-white text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
            LAMECH.DESIGN
          </h2>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all ${
                location.pathname === link.path
                  ? "text-primary after:w-full"
                  : "text-slate-300 hover:text-primary after:w-0 hover:after:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-300 hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <HiOutlineSun className="w-5 h-5" />
            ) : (
              <HiOutlineMoon className="w-5 h-5" />
            )}
          </button>
          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <span>Hire Me</span>
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel absolute top-20 left-0 w-full p-6 border-t border-white/5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold ${
                location.pathname === link.path ? "text-primary" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full py-3 bg-primary text-white text-center rounded-lg font-bold mt-2"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
