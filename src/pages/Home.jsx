import React from "react";
import { Link } from "react-router-dom";
import { FiLayers, FiMessageCircle } from "react-icons/fi";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { HiOutlineCube } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-16 relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"></div>
      <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"></div>

      <div className="flex-1 flex flex-col gap-8 relative z-10 w-full lg:w-1/2">
        <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest font-semibold text-secondary">Senior Product Designer & Strategist</span>
        </div>

        <div className="flex flex-col">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white">
            LAMECH <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">IMEH-JOHN</span>
          </h1>
        </div>

        <p className="text-slate-400 text-lg sm:text-xl max-w-lg font-light leading-relaxed border-l-2 border-primary/30 pl-6">
          Bridging architectural precision with digital strategy to build sublime, high-converting interfaces for the web of tomorrow.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <Link to="/work" className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-base font-bold rounded-lg shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
            View Case Studies
            <FiLayers className="w-5 h-5" />
          </Link>
          <Link to="/contact" className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-secondary/30 text-white text-base font-bold rounded-lg hover:bg-secondary/10 hover:border-secondary transition-all duration-300 backdrop-blur-sm">
            Let's Talk
            <FiMessageCircle className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex items-center gap-8 mt-8 pt-8 border-t border-slate-800/50">
          <div>
            <p className="text-3xl font-bold text-white">8+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Years Exp.</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">12</p>
            <p className="text-xs text-slate-500 uppercase tracking-wide">Awards</p>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end relative">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden glass-panel border-slate-700/50 group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('https://picsum.photos/600/800?grayscale')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-80"></div>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-surface-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl transform transition-transform group-hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-full bg-slate-700 overflow-hidden border border-primary/50">
                  <img src="https://picsum.photos/100/100" alt="Lamech" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Lamech Imeh-john</p>
                  <p className="text-secondary text-xs">@lamech.design</p>
                </div>
                <div className="ml-auto text-primary">
                  <HiOutlineCheckBadge className="w-5 h-5" />
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">UI/UX</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">Strategy</span>
                <span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">Architecture</span>
              </div>
            </div>
          </div>

          <div className="absolute top-6 right-6 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-primary">
            <HiOutlineCube className="w-6 h-6 animate-spin-slow" />
          </div>
        </div>
      </div>
    </div>
  );
}
