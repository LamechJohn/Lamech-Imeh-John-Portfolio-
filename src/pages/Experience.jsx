import React from "react";
import { EXPERIENCES } from "../constants";
import { HiOutlineClock, HiOutlineStar, HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineTruck } from "react-icons/hi2";
import { HiOutlineShieldCheck } from "react-icons/hi2";

const STAT_ICONS = {
  schedule: HiOutlineClock,
  star: HiOutlineStar,
  rocket_launch: HiOutlineRocketLaunch,
};

const IMPACT_ICONS = {
  verified_user: HiOutlineShieldCheck,
  school: HiOutlineAcademicCap,
  two_wheeler: HiOutlineTruck,
};

function StatIcon({ name }) {
  const Icon = STAT_ICONS[name] || HiOutlineClock;
  return <Icon className="w-5 h-5" />;
}

function ImpactIcon({ name }) {
  const Icon = IMPACT_ICONS[name] || HiOutlineShieldCheck;
  return <Icon className="text-lg w-5 h-5" />;
}

export default function ExperiencePage() {
  const stats = [
    { label: "Efficiency", value: "50%", sub: "Reduction in approval delay", icon: "schedule", bar: "w-1/2" },
    { label: "Quality", value: "100%", sub: "Instructor Satisfaction Rating", icon: "star", bar: "w-full" },
    { label: "Performance", value: "35%", sub: "Boost in app efficiency", icon: "rocket_launch", bar: "w-[35%]" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6 lg:px-8 flex flex-col gap-12">
      <div className="text-center space-y-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold tracking-tight text-white">
          Professional <span className="text-primary">Experience</span> & Impact
        </h1>
        <p className="relative text-slate-400 text-lg max-w-2xl mx-auto">
          Navigating complex product challenges with strategic design leadership. Transforming logistics, edtech, and enterprise workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {stats.map((stat, i) => (
          <div key={i} className="glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <StatIcon name={stat.icon} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</span>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-white group-hover:text-primary transition-colors">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.sub}</p>
            </div>
            <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full bg-primary ${stat.bar} rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-8">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start group ${!isEven ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`md:w-1/2 flex flex-col items-start ${isEven ? "md:pr-12 md:items-end md:text-right" : "md:pl-12"}`}>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-surface-dark text-slate-400 border border-slate-700/50 mb-4">
                    {exp.period}
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-md">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="text-xs text-slate-500 bg-surface-dark px-2 py-1 rounded border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-background-dark border-2 border-primary rounded-full z-10 md:-translate-x-1/2 mt-2 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,128,57,0.5)]"></div>

                <div className={`md:w-1/2 w-full pl-12 md:pl-0 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                  <div className={`glass-panel p-5 rounded-lg border border-white/5 hover:border-primary/20 transition-all group-hover:-translate-y-1 duration-300 ${!isEven ? "ml-auto md:max-w-sm" : ""}`}>
                    <div className={`flex items-center gap-3 mb-3 pb-3 border-b border-white/5 ${!isEven ? "md:flex-row-reverse" : ""}`}>
                      <div className="bg-primary/20 p-1.5 rounded text-primary">
                        <ImpactIcon name={exp.impactIcon} />
                      </div>
                      <span className="text-sm font-semibold text-white">Impact Highlight</span>
                    </div>
                    <div className={`flex items-center justify-between ${!isEven ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-slate-400 text-sm">{exp.impactTitle}</span>
                      <span className="text-primary font-bold text-lg">{exp.impactMetric}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
