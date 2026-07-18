import { Server, LayoutTemplate, Database, Wrench, Lock, Code2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconMap = {
  "Backend": Server,
  "Frontend": LayoutTemplate,
  "Databases": Database,
  "Tools & Platforms": Wrench,
  "Build Tools & Security": Lock,
  "Programming Languages": Code2
};

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="py-24 lg:py-32 bg-brand-bg-secondary relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 font-heading tracking-tight">
              TECHNICAL SKILLS
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-muted/70 tracking-widest uppercase">
            // Full Stack Scope
          </span>
        </div>

        {/* 6-Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skillGroup, idx) => {
            const Icon = iconMap[skillGroup.category] || Code2;
            
            return (
              <div 
                key={idx}
                className="editorial-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between text-left"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-brand-secondary">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Skills Tag Chips - Clean flat details */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 font-mono text-[10px] text-brand-muted bg-white/[0.01] border border-white/5 rounded-md hover:text-white hover:border-brand-primary/20 hover:bg-brand-primary/5 transition-colors select-none"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bar accent line - Faded and elegant */}
                <div className="w-full h-[1px] bg-white/5 mt-8 overflow-hidden">
                  <div 
                    className={`h-full bg-brand-primary`} 
                    style={{ width: `${80 - idx * 6}%` }} 
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
