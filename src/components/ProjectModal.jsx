import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Database, ShieldAlert, BookOpen, Layers, GitBranch, AlertCircle } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'architecture', label: 'Architecture', icon: Layers },
    { id: 'database', label: 'Database Design', icon: Database },
    { id: 'security', label: 'Security & Auth', icon: ShieldAlert },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 no-print">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-bg/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden editorial-card rounded-3xl flex flex-col z-10 shadow-2xl text-left"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/5 bg-white/[0.01]">
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-primary">
                  {project.role}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-heading tracking-tight">{project.title}</h2>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 font-mono text-[8px] rounded bg-white/5 border border-white/5 text-brand-secondary uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white border border-white/5 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Tabs - space mono typography */}
            <div className="flex border-b border-white/5 overflow-x-auto bg-white/[0.005] px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-mono text-[10px] tracking-wider uppercase border-b transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? 'border-brand-primary text-white bg-white/[0.01]'
                        : 'border-transparent text-brand-muted hover:text-white'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-primary' : 'text-brand-muted'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-brand-bg/25">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* OVERVIEW TAB */}
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-white uppercase font-bold mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-brand-primary" />
                          The Problem Statement
                        </h4>
                        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed bg-white/[0.01] p-5 rounded-2xl border border-white/5 font-light">
                          {project.details.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-white uppercase font-bold mb-3">
                          Key Features Summary
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.features.map((feat, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-brand-muted leading-relaxed flex items-start gap-2.5 bg-white/[0.005] p-3.5 rounded-xl border border-white/5 font-light"
                            >
                              <span className="w-1 h-1 rounded-full bg-brand-secondary shrink-0 mt-2" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-white uppercase font-bold mb-3">
                          Key Takeaways & Lessons
                        </h4>
                        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed bg-brand-primary/5 p-5 rounded-2xl border border-brand-primary/10 font-light">
                          {project.details.lessons}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ARCHITECTURE TAB */}
                  {activeTab === 'architecture' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-white uppercase font-bold mb-3">
                          Core System Architecture
                        </h4>
                        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed font-light">
                          {project.details.architecture}
                        </p>
                      </div>

                      {/* Interactive Visual Architecture diagram - Editorial human flat styling */}
                      <div className="flex flex-col items-center justify-center gap-4 bg-white/[0.01] p-8 rounded-2xl border border-white/5 overflow-x-auto min-w-[280px]">
                        <span className="font-mono text-[8px] text-brand-muted tracking-widest uppercase mb-4">
                          Layered MVC Flow Overview
                        </span>

                        <div className="flex flex-col items-center w-full max-w-sm gap-3 font-mono text-[10px] text-center uppercase tracking-wider">
                          
                          <div className="w-full py-3 rounded bg-brand-secondary/5 border border-brand-secondary/20 text-brand-secondary font-bold">
                            React SPA Frontend
                          </div>

                          <div className="h-3 w-0.5 bg-white/10" />

                          <div className="w-full py-3 rounded bg-brand-primary/5 border border-brand-primary/20 text-brand-primary font-bold">
                            @RestController Layer
                          </div>

                          <div className="h-3 w-0.5 bg-white/10" />

                          <div className="w-full py-3 rounded bg-white/[0.02] border border-white/10 text-white font-bold">
                            @Service Layer (Business Logic)
                          </div>

                          <div className="h-3 w-0.5 bg-white/10" />

                          <div className="w-full py-3 rounded bg-white/[0.01] border border-white/5 text-white/70">
                            Spring Data JPA Repository
                          </div>

                          <div className="h-3 w-0.5 bg-white/10" />

                          <div className="w-full py-3 rounded bg-white/[0.005] border border-brand-primary/10 text-brand-muted flex items-center justify-center gap-1.5 font-bold">
                            MySQL Persistent Database
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* DATABASE TAB */}
                  {activeTab === 'database' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-white uppercase font-bold mb-3 flex items-center gap-2">
                          <Database className="w-4 h-4 text-brand-secondary" />
                          Relational Schema Overview
                        </h4>
                        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-4 font-light">
                          {project.details.database}
                        </p>
                      </div>

                      {/* Representation Table view */}
                      <div className="bg-white/[0.01] rounded-2xl border border-white/5 overflow-hidden">
                        <div className="p-4 bg-white/[0.01] border-b border-white/5 flex items-center justify-between">
                          <span className="font-mono text-[9px] font-bold text-white uppercase tracking-wider">
                            Typical Schema Mapping
                          </span>
                          <span className="font-mono text-[8px] text-brand-secondary bg-brand-secondary/5 px-2.5 py-0.5 rounded border border-brand-secondary/15">
                            MySQL v8.0 / InnoDB
                          </span>
                        </div>
                        
                        <div className="p-4 text-[10px] font-mono text-brand-muted space-y-3">
                          <div className="bg-brand-bg/50 p-4 rounded-xl border border-white/5">
                            <div className="text-white font-bold flex items-center gap-1 mb-2">
                              <span className="text-brand-primary">TABLE //</span> users
                            </div>
                            <div className="pl-3 space-y-0.5 text-brand-muted/80">
                              id : BIGINT (PK, AUTO_INCREMENT)<br />
                              email : VARCHAR(255) (UNIQUE, NOT NULL)<br />
                              password_hash : VARCHAR(255) (NOT NULL)<br />
                              is_active : BOOLEAN (DEFAULT TRUE)
                            </div>
                          </div>
                          
                          <div className="bg-brand-bg/50 p-4 rounded-xl border border-white/5">
                            <div className="text-white font-bold flex items-center gap-1 mb-2">
                              <span className="text-brand-primary">TABLE //</span> roles
                            </div>
                            <div className="pl-3 space-y-0.5 text-brand-muted/80">
                              id : BIGINT (PK, AUTO_INCREMENT)<br />
                              name : VARCHAR(50) (NOT NULL, e.g. 'ROLE_USER', 'ROLE_ADMIN')
                            </div>
                          </div>

                          <div className="bg-brand-bg/50 p-4 rounded-xl border border-white/5">
                            <div className="text-white font-bold flex items-center gap-1 mb-2">
                              <span className="text-brand-primary">TABLE //</span> user_roles
                            </div>
                            <div className="pl-3 space-y-0.5 text-brand-muted/80">
                              user_id : BIGINT (FK users.id, PK)<br />
                              role_id : BIGINT (FK roles.id, PK)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SECURITY TAB */}
                  {activeTab === 'security' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-mono text-[10px] tracking-widest text-white uppercase font-bold mb-3 flex items-center gap-2">
                          <ShieldAlert className="w-4 h-4 text-brand-primary" />
                          Security Architecture Details
                        </h4>
                        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed font-light">
                          {project.details.security}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="editorial-card p-6 rounded-2xl flex gap-4 text-left">
                          <div className="w-9 h-9 rounded-lg bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center shrink-0">
                            <ShieldAlert className="w-4 h-4 text-brand-primary" />
                          </div>
                          <div>
                            <h5 className="font-mono text-[10px] uppercase tracking-wider text-white font-bold mb-1">Stateless Sessions</h5>
                            <p className="text-xs text-brand-muted leading-relaxed font-light">
                              Configured SecurityFilterChain to use stateless SessionCreationPolicy.STATELESS, completely eliminating state tracking vulnerabilities.
                            </p>
                          </div>
                        </div>

                        <div className="editorial-card p-6 rounded-2xl flex gap-4 text-left">
                          <div className="w-9 h-9 rounded-lg bg-brand-secondary/5 border border-brand-secondary/10 flex items-center justify-center shrink-0">
                            <GitBranch className="w-4 h-4 text-brand-secondary" />
                          </div>
                          <div>
                            <h5 className="font-mono text-[10px] uppercase tracking-wider text-white font-bold mb-1">JWT Filter Chains</h5>
                            <p className="text-xs text-brand-muted leading-relaxed font-light">
                              Stateless requests carries JWT token parsed inside custom validation filters, mapping credentials into dynamic SecurityContext scopes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 p-6 border-t border-white/5 bg-white/[0.01]">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-primary/20 rounded-md transition-all cursor-pointer"
              >
                [ VIEW REPOSITORY ]
              </a>
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-white bg-brand-primary rounded-md transition-all cursor-pointer animate-pulse"
                >
                  [ LIVE DEMO ]
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
