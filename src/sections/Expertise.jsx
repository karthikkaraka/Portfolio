import { Cpu, ShieldAlert, Database, Layers } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const iconMap = {
  Cpu: Cpu,
  ShieldAlert: ShieldAlert,
  Database: Database,
  Layers: Layers
};

export default function Expertise() {
  const { expertise } = resumeData;

  return (
    <section id="expertise" className="py-24 lg:py-32 bg-brand-bg relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 font-heading tracking-tight animate-fade-in">
              CORE EXPERTISE
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-muted/70 tracking-widest uppercase">
            // Architecture & Implementations
          </span>
        </div>

        {/* 4-Card Grid - Human made flat architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {expertise.map((expert, idx) => {
            const IconComponent = iconMap[expert.icon] || Cpu;
            
            return (
              <div 
                key={idx}
                className="editorial-card p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-start text-left"
              >
                {/* Icon Wrapper with sharp borders */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-brand-secondary" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-tight leading-snug">
                    {expert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                    {expert.description}
                  </p>
                  
                  {/* Monospace tag chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {expert.title.includes('Security') && (
                      <>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-brand-primary/5 border border-brand-primary/15 text-brand-primary px-2 py-0.5 rounded">ROLE-BASED CONTROL</span>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-brand-secondary/5 border border-brand-secondary/15 text-brand-secondary px-2 py-0.5 rounded">STATELESS FILTERS</span>
                      </>
                    )}
                    {expert.title.includes('API') && (
                      <>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-brand-primary/5 border border-brand-primary/15 text-brand-primary px-2 py-0.5 rounded">LAYERED DTOS</span>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-brand-secondary/5 border border-brand-secondary/15 text-brand-secondary px-2 py-0.5 rounded">REST ENDPOINTS</span>
                      </>
                    )}
                    {expert.title.includes('Database') && (
                      <>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-brand-primary/5 border border-brand-primary/15 text-brand-primary px-2 py-0.5 rounded">N+1 TUNING</span>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-brand-secondary/5 border border-brand-secondary/15 text-brand-secondary px-2 py-0.5 rounded">JPA QUERY SCOPES</span>
                      </>
                    )}
                    {expert.title.includes('Docker') && (
                      <>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-brand-primary/5 border border-brand-primary/15 text-brand-primary px-2 py-0.5 rounded">MULTI-STAGE BUILD</span>
                        <span className="font-mono text-[8px] tracking-wider uppercase bg-brand-secondary/5 border border-brand-secondary/15 text-brand-secondary px-2 py-0.5 rounded">ISOLATED SPACES</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
