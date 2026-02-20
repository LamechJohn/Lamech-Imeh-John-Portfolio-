import React from "react";
import { CERTIFICATIONS, ACADEMICS } from "../constants";
import { HiOutlineCheckBadge, HiOutlineAcademicCap, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { HiOutlineLink, HiOutlinePlus, HiOutlineCursorArrowRays, HiOutlineShieldCheck } from "react-icons/hi2";

const CERT_ICONS = {
  verified: HiOutlineCheckBadge,
  psychology: HiOutlineShieldCheck,
  touch_app: HiOutlineCursorArrowRays,
};

function CertIcon({ name }) {
  const Icon = CERT_ICONS[name] || HiOutlineCheckBadge;
  return <Icon className="w-7 h-7" />;
}

export default function Credentials() {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border-dark pb-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            <p className="text-accent-text text-xs font-mono tracking-widest uppercase">System Online // Vault Access Granted</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tighter uppercase">
            Credentials & Education
          </h1>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <p className="text-slate-400 text-sm font-normal max-w-[300px] md:text-right">
            Verified professional accreditations, academic history, and industry certifications.
          </p>
          <p className="text-primary text-xs font-mono mt-2">ID: LAMECH-IJ // STATUS: VERIFIED</p>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <HiOutlineCheckBadge className="w-6 h-6 text-primary" />
            <h2 className="text-white text-2xl font-bold tracking-tight">Professional Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="group relative flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_4px_20px_-10px_rgba(0,128,57,0.3)]">
                <div className="absolute top-4 right-4 text-primary/30 group-hover:text-primary transition-colors">
                  <HiOutlineCheckBadge className="w-5 h-5" />
                </div>
                <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <CertIcon name={cert.icon} />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-accent-text text-xs font-mono mb-2">ISSUED BY {cert.issuer}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-mono">ID: {cert.id_number}</span>
                  <a className="text-xs font-bold text-white flex items-center gap-1 hover:text-primary transition-colors" href="#">
                    VIEW CREDENTIAL <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative py-4 flex items-center justify-center">
          <div className="absolute w-full h-px bg-border-dark"></div>
          <div className="relative bg-background-dark px-4 z-10">
            <HiOutlineLink className="w-5 h-5 text-border-dark" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <HiOutlineAcademicCap className="w-6 h-6 text-primary" />
            <h2 className="text-white text-2xl font-bold tracking-tight">Academic History</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ACADEMICS.map((edu) => (
              <div key={edu.id} className="group relative flex flex-col md:flex-row gap-0 rounded-xl border border-border-dark bg-surface-dark overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="w-full md:w-48 h-48 md:h-auto relative shrink-0">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
                  <div
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ backgroundImage: `url(${edu.image})` }}
                  ></div>
                </div>
                <div className="flex flex-col p-6 flex-1 justify-center relative">
                  <div className="absolute top-6 right-6 text-primary/30 group-hover:text-primary transition-colors">
                    <HiOutlineCheckBadge className="w-5 h-5" />
                  </div>
                  <h3 className="text-white text-xl font-bold leading-tight mb-1 group-hover:text-primary transition-colors">{edu.degree}</h3>
                  <p className="text-accent-text text-sm font-mono mb-4">{edu.school}</p>
                  <div className="flex flex-col gap-3">
                    {edu.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <HiOutlineCheckBadge className="w-[18px] h-[18px] text-primary mt-0.5 shrink-0" />
                        <p className="text-slate-400 text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {edu.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded bg-background-dark border border-border-dark text-[10px] text-accent-text uppercase tracking-wider font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="group relative flex flex-col justify-center items-center gap-4 rounded-xl border border-border-dark border-dashed bg-card-dark/30 p-6 min-h-[240px] hover:bg-card-dark/50 transition-colors">
              <div className="size-16 rounded-full bg-background-dark border border-border-dark flex items-center justify-center text-slate-600 group-hover:text-primary group-hover:border-primary/50 transition-all">
                <HiOutlinePlus className="w-8 h-8" />
              </div>
              <div className="text-center">
                <h3 className="text-slate-400 text-lg font-bold leading-tight">Additional Education</h3>
                <p className="text-slate-600 text-sm mt-1">Pending future updates to the vault.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
