import React from "react";
import { HiOutlineEnvelope, HiOutlineUserCircle, HiOutlinePhone } from "react-icons/hi2";

const contacts = [
  { label: "Email Me", value: "imehjohnlamech16@gmail.com", icon: HiOutlineEnvelope, href: "mailto:imehjohnlamech16@gmail.com" },
  { label: "Connect", value: "LinkedIn / Lamech Imeh-John", icon: HiOutlineUserCircle, href: "#" },
  { label: "Call Me", value: "+2349064942385", icon: HiOutlinePhone, href: "tel:+2349064942385" },
];

export default function Contact() {
  return (
    <div className="relative w-full flex-grow flex flex-col justify-between overflow-hidden py-20 lg:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary tracking-wide uppercase">Open to new opportunities</span>
        </div>

        <div className="text-center max-w-5xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            Let's build something <br className="hidden md:block" />
            <span className="italic text-primary/90">extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mt-6">
            Senior Product Designer & Strategist — Lamech Imeh-john
          </p>
        </div>

        <div className="w-full max-w-4xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="group relative flex flex-col items-center justify-center gap-4 rounded-xl border border-border-dark bg-surface-dark p-8 transition-all duration-300 hover:border-primary/50 hover:bg-surface-dark/80 hover:-translate-y-1"
            >
              <div className="rounded-full bg-background-dark p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <contact.icon className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">{contact.label}</p>
                <h3 className="text-md font-bold text-white group-hover:text-primary transition-colors">{contact.value}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <span className="text-sm text-slate-500 uppercase tracking-widest font-medium">Focus Areas</span>
          <div className="flex flex-wrap justify-center gap-3">
            {["AI & Machine Learning", "Web3 Interfaces", "FinTech", "Design Systems"].map((area) => (
              <div key={area} className="px-4 py-2 rounded-lg border border-border-dark bg-background-dark/50 text-slate-300 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
