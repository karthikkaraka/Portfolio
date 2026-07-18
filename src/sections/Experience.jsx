import { Briefcase, GraduationCap, Server, Database, ShieldCheck, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  const { internship } = resumeData;

  return (
    <section id="experience" className="py-24 lg:py-32 bg-brand-bg-secondary relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 font-heading tracking-tight">
              PROFESSIONAL JOURNEY
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-muted/70 tracking-widest uppercase">
            // Roadmap & Milestones
          </span>
        </div>

        {/* Timeline Path Container - Clean editorial flat styling */}
        <div className="relative border-l border-white/10 ml-2 md:ml-32 space-y-12 py-4 text-left">
          
          {/* Timeline Item: B.Tech CSE (Andhra University) - Active */}
          <div className="relative pl-8 md:pl-10">
            {/* Timeline pin */}
            <div className="absolute -left-[25px] top-2.5 w-3 h-3 rounded-full bg-brand-bg-secondary border border-brand-primary flex items-center justify-center">
              <GraduationCap className="w-1.5 h-1.5 text-brand-primary" />
            </div>

            {/* Time badge floating on left for desktop */}
            <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right font-mono text-[10px] text-brand-secondary font-bold uppercase tracking-wider">
              2023 – 2027 //
            </div>

            <div className="editorial-card p-6 sm:p-8 rounded-3xl">
              <span className="md:hidden block font-mono text-[9px] text-brand-secondary font-bold uppercase tracking-wider mb-2">
                Aug 2023 – Jul 2027 // ACTIVE
              </span>
              
              <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-tight leading-tight">
                Bachelor of Technology (Computer Science and Engineering)
              </h3>
              
              <p className="font-mono text-[10px] text-brand-secondary mt-1">
                Andhra University College of Engineering
              </p>
              
              <p className="text-xs sm:text-sm text-brand-muted mt-4 leading-relaxed font-light">
                Deepening theoretical and practical skills in data structures, compiler design, query compilation, network boundaries, and scalable Java software design patterns.
              </p>
            </div>
          </div>

          {/* Timeline Item: Elevate Labs Internship (Aug 2025 – Sep 2025) */}
          <div className="relative pl-8 md:pl-10">
            {/* Timeline pin */}
            <div className="absolute -left-[25px] top-2.5 w-3 h-3 rounded-full bg-brand-bg-secondary border border-brand-secondary flex items-center justify-center animate-pulse">
              <Briefcase className="w-1.5 h-1.5 text-brand-secondary" />
            </div>

            {/* Time badge floating on left for desktop */}
            <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right font-mono text-[10px] text-brand-secondary font-bold uppercase tracking-wider">
              Aug – Sep 2025 //
            </div>

            <div className="editorial-card p-6 sm:p-8 rounded-3xl border border-brand-secondary/20">
              <span className="md:hidden block font-mono text-[9px] text-brand-secondary font-bold uppercase tracking-wider mb-2">
                Aug 2025 – Sep 2025 // INTERNSHIP
              </span>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-tight leading-tight">
                  {internship.position}
                </h3>
                <span className="font-mono text-[8px] font-bold bg-brand-secondary/5 text-brand-secondary border border-brand-secondary/15 px-2.5 py-0.5 rounded uppercase tracking-wider">
                  Internship
                </span>
              </div>
              
              <p className="font-mono text-[10px] text-brand-secondary mb-5">
                {internship.company}
              </p>

              {/* Responsibilities list exactly as stated in resume */}
              <ul className="space-y-3.5">
                {internship.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-xs text-brand-muted leading-relaxed flex items-start gap-3 font-light">
                    {idx === 0 && <Server className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />}
                    {idx === 1 && <Database className="w-3.5 h-3.5 text-brand-secondary shrink-0 mt-0.5" />}
                    {idx === 2 && <ShieldCheck className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />}
                    {idx === 3 && <Briefcase className="w-3.5 h-3.5 text-brand-secondary shrink-0 mt-0.5" />}
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline Item: Tirumala Junior College (2021 – 2023) */}
          <div className="relative pl-8 md:pl-10">
            {/* Timeline pin */}
            <div className="absolute -left-[25px] top-2.5 w-3 h-3 rounded-full bg-brand-bg-secondary border border-brand-primary flex items-center justify-center">
              <BookOpen className="w-1.5 h-1.5 text-brand-primary" />
            </div>

            {/* Time badge floating on left for desktop */}
            <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right font-mono text-[10px] text-brand-secondary font-bold uppercase tracking-wider">
              2021 – 2023 //
            </div>

            <div className="editorial-card p-6 sm:p-8 rounded-3xl">
              <span className="md:hidden block font-mono text-[9px] text-brand-secondary font-bold uppercase tracking-wider mb-2">
                Jun 2021 – May 2023 // SCHOOL
              </span>
              
              <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-tight leading-tight">
                Intermediate (MPC)
              </h3>
              
              <p className="font-mono text-[10px] text-brand-secondary mt-1">
                Tirumala Junior College
              </p>
              
              <p className="text-xs sm:text-sm text-brand-muted mt-4 leading-relaxed font-light">
                Rigorous training in Mathematics, Calculus, and Logic, developing fundamental analytical problem-solving patterns.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
