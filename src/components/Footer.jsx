import { ArrowUp } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.438 21.8 8.205 23.385C8.805 23.495 9.025 23.127 9.025 22.808C9.025 22.52 9.015 21.755 9.01 20.74C5.672 21.465 4.968 19.13 4.968 19.13C4.425 17.75 3.645 17.385 3.645 17.385C2.557 16.643 3.728 16.658 3.728 16.658C4.93 16.743 5.564 17.895 5.564 17.895C6.634 19.728 8.37 19.2 9.052 18.895C9.16 18.12 9.47 17.59 9.812 17.29C7.147 16.99 4.345 15.958 4.345 11.358C4.345 10.048 4.81 8.978 5.578 8.138C5.455 7.833 5.045 6.61 5.694 4.96C5.694 4.96 6.7 4.638 8.99 6.19C9.948 5.922 10.978 5.79 12.002 5.785C13.023 5.79 14.053 5.922 15.012 6.19C17.3 4.638 18.303 4.96 18.303 4.96C18.955 6.61 18.545 7.833 18.423 8.138C19.193 8.978 19.654 10.048 19.654 11.358C19.654 15.97 16.848 16.985 14.175 17.28C14.605 17.65 14.99 18.38 14.99 19.505C14.99 21.113 14.975 22.41 14.975 22.802C14.975 23.125 15.19 23.502 15.8 23.382C20.563 21.795 24 17.3 24 12C24 5.37 18.63 0 12 0Z" fill="#F5F5F0"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M8.5 19H5.5V9.5H8.5V19ZM7 8.22C6.03 8.22 5.25 7.44 5.25 6.47C5.25 5.5 6.03 4.72 7 4.72C7.97 4.72 8.75 5.5 8.75 6.47C8.75 7.44 7.97 8.22 7 8.22ZM19 19H16V14.12C16 12.95 15.98 11.45 14.38 11.45C12.75 11.45 12.5 12.72 12.5 14.04V19H9.5V9.5H12.38V10.8H12.42C12.82 10.04 13.8 9.25 15.24 9.25C18.24 9.25 18.8 11.23 18.8 13.81V19H19Z" fill="white"/>
  </svg>
);

const GmailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="#eeeeee"/>
    <path d="M22 6c0-1.1-.9-2-2-2h-3v7l5-3.75V6z" fill="#EA4335"/>
    <path d="M2 6v3.25L7 11V4H4c-1.1 0-2 .9-2 2z" fill="#C5221F"/>
    <path d="M2 18c0 1.1.9 2 2 2h3v-9l-5 3.75V18z" fill="#4285F4"/>
    <path d="M17 11v9h3c1.1 0 2-.9 2-2v-5.75L17 11z" fill="#34A853"/>
    <path d="M7 11v9h10v-9L12 7.25 7 11z" fill="#EA4335"/>
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
              <GmailIcon className="w-4.5 h-4.5" />
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
            className="group flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white bg-brand-primary hover:bg-brand-primary/90 rounded-lg transition-all duration-300 cursor-pointer shadow-lg shadow-brand-primary/20 hover:scale-[1.05]"
          >
            Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
