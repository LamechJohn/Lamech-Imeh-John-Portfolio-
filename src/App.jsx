import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ExperiencePage from "./pages/Experience";
import Skills from "./pages/Skills";
import Credentials from "./pages/Credentials";
import Contact from "./pages/Contact";
import { HiOutlineArrowDown } from "react-icons/hi2";

import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col relative selection:bg-primary selection:text-white">
          <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-grid-pattern bg-[length:40px_40px]"></div>
          <div className="fixed inset-0 z-0 pointer-events-none bg-radial-glow"></div>

          <Navbar />
          <main className="flex-grow z-10 relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />

          <div className="fixed bottom-8 right-8 z-50 hidden md:flex items-center gap-2 animate-bounce">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Scroll</span>
            <HiOutlineArrowDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
