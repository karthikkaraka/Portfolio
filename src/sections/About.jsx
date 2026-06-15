import { GraduationCap, Target, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About() {
  const { education } = resumeData;

  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-bg-secondary relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="editorial-label">
              [ 01 / BACKGROUND ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 font-heading tracking-tight">
              DEVELOPER SUMMARY
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-muted/70 tracking-widest uppercase">
            // Full Stack Java Developer
          </span>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: My Story */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-heading tracking-tight">
              Designing robust backend systems backed by secure Spring Boot foundations.
            </h3>
            
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              I am an aspiring Full Stack Java Developer focusing on transaction-safe backend services. Over my B.Tech studies and internship experience, I have cultivated a strong commitment to clean coding principles, layered controller-service-repository patterns, and strict web security boundaries.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Equipped with a solid foundation in <strong>Java</strong>, <strong>Spring Boot</strong>, and relational database management (<strong>MySQL</strong>), I focus on the critical details: optimizing SQL queries, crafting RESTful endpoints, protecting APIs with JWT tokens, and maintaining scalable object mappings via Hibernate.
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              My engineering approach blends <strong>60% structured logic and performance engineering</strong> (ensuring services remain lightweight, secure, and easily testable) with <strong>40% interactive creativity</strong> (designing clean frontend interfaces using React to create highly usable, modern end-to-end applications).
            </p>

            {/* Micro Goals Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="editorial-card p-6 rounded-2xl flex items-start gap-4">
                <Target className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">Security-First Focus</h4>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">Integrating stateless JWT filter guards and detailed authorization rules in Spring Boot APIs.</p>
                </div>
              </div>

              <div className="editorial-card p-6 rounded-2xl flex items-start gap-4">
                <Award className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">Database Integrity</h4>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">Maintaining optimized relational entity hierarchies and highly performant query scopes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="editorial-card p-8 rounded-3xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-8 flex items-center gap-2 font-bold">
                <GraduationCap className="w-4 h-4 text-brand-secondary" />
                Education Journey
              </h3>

              <div className="relative border-l border-white/5 ml-2 space-y-10 pl-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle timeline pin */}
                    <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-brand-bg-secondary border border-brand-primary flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-brand-secondary" />
                    </div>

                    <span className="font-mono text-[9px] text-brand-secondary bg-brand-secondary/5 border border-brand-secondary/15 px-2.5 py-0.5 rounded uppercase tracking-wider">
                      {edu.duration}
                    </span>
                    
                    <h4 className="text-sm font-bold text-white mt-3 font-heading leading-tight">
                      {edu.degree}
                    </h4>
                    
                    <p className="font-mono text-[10px] text-brand-muted mt-1">
                      {edu.institution}
                    </p>
                    
                    <p className="text-xs text-brand-muted/80 mt-2 leading-relaxed font-light">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
