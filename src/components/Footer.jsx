import React from "react";
import { FaTerminal } from "react-icons/fa6";
import { HiOutlineShare, HiOutlineEnvelope, HiOutlineGlobeAlt } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-background-dark py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <FaTerminal className="text-primary w-5 h-5" />
            <h3 className="text-white font-bold tracking-widest uppercase">
              Lamech Imeh-john
            </h3>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 Lamech Imeh-john. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-slate-400 hover:text-primary transition-colors"
            aria-label="Share"
          >
            <HiOutlineShare className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <HiOutlineEnvelope className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-primary transition-colors"
            aria-label="Language"
          >
            <HiOutlineGlobeAlt className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
