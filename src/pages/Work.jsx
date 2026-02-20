import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { HiOutlineBuildingOffice2, HiOutlineBeaker, HiOutlineHeart, HiOutlineCircleStack } from "react-icons/hi2";
import { HiOutlineArrowTopRightOnSquare, HiArrowRight } from "react-icons/hi2";

const ICON_MAP = {
  account_balance: HiOutlineBuildingOffice2,
  oil_barrel: HiOutlineBeaker,
  cardiology: HiOutlineHeart,
  dataset: HiOutlineCircleStack,
};

function ProjectIcon({ name }) {
  const Icon = ICON_MAP[name] || HiOutlineCircleStack;
  return <Icon className="text-[14px] w-[14px] h-[14px]" />;
}

export default function Work() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Fintech", "Oil & Gas", "Healthcare", "Strategy"];

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-surface-dark pb-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-white">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Case Studies</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-xl">
            A curation of strategic design work. Crafting high-fidelity experiences for Fintech, Energy, and Healthcare industries.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 self-start md:self-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-white shadow-[0_0_15px_-3px_rgba(0,128,57,0.4)]"
                  : "bg-surface-dark text-slate-300 hover:text-white hover:bg-surface-dark-hover border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col gap-6 rounded-2xl bg-surface-dark p-2 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,128,57,0.2)] border border-transparent hover:border-surface-dark-hover"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-800">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/20 transition-opacity group-hover:opacity-0"></div>

              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-background-dark/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary border border-secondary/20">
                  <ProjectIcon name={project.icon} />
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-4 pb-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-secondary mt-1 text-sm font-medium tracking-wide">{project.role}</p>
                </div>
                <button type="button" className="hidden md:flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <HiOutlineArrowTopRightOnSquare className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </div>
              <p className="text-slate-400 line-clamp-2 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mt-2 pt-4 border-t border-white/5 flex items-center justify-between md:hidden">
                <span className="text-sm font-bold text-primary">Read Case Study</span>
                <HiArrowRight className="text-primary text-sm w-4 h-4" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
