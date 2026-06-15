import { useState } from 'react';
import { ArrowUpRight, FolderGit2, ShieldCheck, Calendar, BookOpen, Lock } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Helper to render customized SVG/CSS graphics representing each project's context in a minimalist, high-end manner
  const renderProjectMockGraphic = (projectId) => {
    switch (projectId) {
      case 'nostos':
        return (
          <div className="w-full h-full bg-brand-bg-secondary flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex flex-col items-center gap-2.5 relative z-10 font-mono text-center select-none">
              <div className="w-11 h-11 rounded-lg bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <FolderGit2 className="w-5 h-5 animate-pulse" />
              </div>
              <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">NOSTOS // SYSTEM</span>
              <span className="text-[8px] text-brand-muted/70 bg-black/40 px-2.5 py-0.5 rounded border border-white/5 uppercase">Spring Security OTP</span>
            </div>
          </div>
        );
      case 'hospital':
        return (
          <div className="w-full h-full bg-brand-bg-secondary flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex flex-col items-center gap-2.5 relative z-10 font-mono text-center select-none">
              <div className="w-11 h-11 rounded-lg bg-brand-secondary/5 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">HOSPITAL // API</span>
              <span className="text-[8px] text-brand-muted/70 bg-black/40 px-2.5 py-0.5 rounded border border-white/5 uppercase">RBAC Roles Filter</span>
            </div>
          </div>
        );
      case 'bookstore':
        return (
          <div className="w-full h-full bg-brand-bg-secondary flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex flex-col items-center gap-2.5 relative z-10 font-mono text-center select-none">
              <div className="w-11 h-11 rounded-lg bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">BOOKSTORE // CORE</span>
              <span className="text-[8px] text-brand-muted/70 bg-black/40 px-2.5 py-0.5 rounded border border-white/5 uppercase">Inventory Rollbacks</span>
            </div>
          </div>
        );
      case 'quiz':
        return (
          <div className="w-full h-full bg-brand-bg-secondary flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex flex-col items-center gap-2.5 relative z-10 font-mono text-center select-none">
              <div className="w-11 h-11 rounded-lg bg-brand-secondary/5 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">QUIZ // SERVICES</span>
              <span className="text-[8px] text-brand-muted/70 bg-black/40 px-2.5 py-0.5 rounded border border-white/5 uppercase">Instant Evaluation</span>
            </div>
          </div>
        );
      case 'notes':
      default:
        return (
          <div className="w-full h-full bg-brand-bg-secondary flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex flex-col items-center gap-2.5 relative z-10 font-mono text-center select-none">
              <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-white uppercase tracking-[0.2em] font-bold">SECURE // NOTES</span>
              <span className="text-[8px] text-brand-muted/70 bg-black/40 px-2.5 py-0.5 rounded border border-white/5 uppercase">CRUD Validations</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-brand-bg relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="editorial-label">
              [ 04 / PORTFOLIO ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 font-heading tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-muted/70 tracking-widest uppercase">
            // Spring Boot REST APIs
          </span>
        </div>

        {/* Projects Cards Grid - Clean flat borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="editorial-card flex flex-col h-full rounded-3xl overflow-hidden group cursor-pointer"
              onClick={() => openProjectDetails(proj)}
            >
              {/* Minimal preview graphic block */}
              <div className="h-40 border-b border-white/5 overflow-hidden relative">
                {renderProjectMockGraphic(proj.id)}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-wider text-brand-primary uppercase font-bold">
                      {proj.role}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-brand-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight font-heading tracking-tight">
                    {proj.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-3 font-light">
                    {proj.description}
                  </p>
                </div>

                {/* Technical stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 font-mono text-[8px] rounded bg-white/[0.02] border border-white/5 text-brand-secondary uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2 py-0.5 font-mono text-[8px] text-brand-muted bg-white/[0.01] border border-white/5 rounded">
                      +{proj.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
