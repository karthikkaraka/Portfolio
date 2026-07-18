import { Mail, ArrowUp } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-brand-bg border-t border-white/5 py-12 lg:py-16 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-white/5 text-left">
          
          {/* Slogan */}
          <div>
            <h3 className="font-heading font-extrabold text-lg text-white mb-2 tracking-tight">KARAKA KARTHIK</h3>
            <p className="text-xs text-brand-muted leading-relaxed max-w-xs font-light">
              Full Stack Java Developer specializing in constructing transaction-safe, secure, and highly scalable API microservices.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-brand-muted">
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors duration-200">Journey</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end space-x-3.5">
            <a
              href="https://github.com/karthikkaraka"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-center text-brand-muted hover:text-white hover:border-white/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/karaka-karthik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-center text-brand-muted hover:text-white hover:border-white/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="mailto:karthikkaraka444@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/[0.01] border border-white/5 flex items-center justify-center text-brand-muted hover:text-white hover:border-white/20 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Lower Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] font-mono text-brand-muted/60">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Karaka Karthik. Engineered for performance and secure data transactions.
          </div>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 px-4.5 py-2 font-mono text-[9px] uppercase tracking-widest text-brand-muted hover:text-white border border-white/5 hover:border-brand-primary rounded-lg transition-all duration-300 cursor-pointer"
          >
            [ Top ]
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
