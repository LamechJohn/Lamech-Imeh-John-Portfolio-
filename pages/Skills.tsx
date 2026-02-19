
import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-primary"></div>
          <span className="text-primary text-xs font-bold tracking-[0.2em]">03. TECHNICAL_STACK</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
          System <span className="text-primary/50 text-stroke">Capabilities</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Expertise & Toolkit</span>
        </h2>
        <p className="max-w-2xl text-slate-400 leading-relaxed text-sm md:text-base border-l-2 border-primary/30 pl-6">
          A comprehensive breakdown of my operational capacity across design strategy, user experience engineering, and the software ecosystem used to deploy scalable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Hard Skills */}
        <div className="lg:col-span-4 group/card">
          <div className="glass-panel rounded-xl p-6 h-full hover:border-primary/50 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover/card:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-primary">computer</span>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-lg bg-surface-dark border border-white/5 flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-primary">architecture</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none uppercase tracking-wide">Hard Skills</h3>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Core Competencies</span>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { name: 'Interaction Design', level: '98%' },
                { name: 'Design Systems', level: '95%' },
                { name: 'Prototyping', level: '92%' }
              ].map(skill => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-300 font-medium group-hover/skill:text-primary transition-colors">{skill.name}</span>
                    <span className="text-xs text-primary font-mono">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-surface-dark rounded-full overflow-hidden">
                    <div className="h-full bg-primary shadow-[0_0_10px_rgba(0,128,57,0.5)]" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
              <div className="pt-4 flex flex-wrap gap-2">
                {['Wireframing', 'User Research', 'Info Architecture', 'Usability Testing', 'Motion UI'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded bg-surface-dark border border-white/5 text-xs text-slate-300 hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="lg:col-span-4 group/card">
          <div className="glass-panel rounded-xl p-6 h-full hover:border-primary/50 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover/card:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-primary">psychology</span>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-lg bg-surface-dark border border-white/5 flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-primary">diversity_3</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none uppercase tracking-wide">Soft Skills</h3>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Leadership & Strategy</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { title: 'Product Strategy', icon: 'strategy', desc: 'Aligning design goals with business KPIs.' },
                { title: 'Stakeholder Management', icon: 'groups', desc: 'Cross-functional communication & buy-in.' },
                { title: 'Mentorship', icon: 'school', desc: 'Guiding junior designers & fostering growth.' },
                { title: 'Agile Methodology', icon: 'bolt', desc: 'Iterative design in fast-paced sprints.' }
              ].map(item => (
                <div key={item.title} className="p-3 rounded bg-surface-dark/50 border border-white/5 hover:border-primary/30 transition-all group/item flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toolkit */}
        <div className="lg:col-span-4 group/card">
          <div className="glass-panel rounded-xl p-6 h-full hover:border-primary/50 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover/card:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-4xl text-primary">build_circle</span>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 rounded-lg bg-surface-dark border border-white/5 flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-primary">construction</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none uppercase tracking-wide">The Toolkit</h3>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Software Ecosystem</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Figma', icon: 'design_services' },
                { name: 'Adobe CC', icon: 'draw' },
                { name: 'Useberry', icon: 'touch_app' },
                { name: 'Webflow', icon: 'web' }
              ].map(tool => (
                <div key={tool.name} className="flex flex-col items-center justify-center p-4 rounded bg-surface-dark border border-white/5 hover:border-primary/40 hover:shadow-[0_0_10px_rgba(0,128,57,0.1)] transition-all group/tool">
                  <span className="material-symbols-outlined text-3xl mb-2 text-slate-400 group-hover/tool:text-white transition-colors">{tool.icon}</span>
                  <span className="text-xs font-bold text-slate-300">{tool.name}</span>
                </div>
              ))}
              <div className="col-span-2 flex items-center justify-between p-3 rounded bg-surface-dark/30 border border-white/5 mt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">laptop_mac</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Hardware Environment</span>
                </div>
                <span className="text-[10px] text-white font-bold">Mac Studio / Wacom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
