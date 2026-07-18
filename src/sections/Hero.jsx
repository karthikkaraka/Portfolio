import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Shield } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import karthikImg from '../assets/karthik.png';
import resumePdf from '../assets/Karthik_Karaka_Resume.pdf';

export default function Hero() {
  const { name, title, summary } = resumeData.personal;
  const resumeDownloadUrl = resumePdf;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-bg pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Subtle drift ambient fog - very light, human-touch, high-end texture */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full bg-brand-primary/5 blur-[150px] animate-subtle-drift pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-brand-secondary/5 blur-[150px] animate-subtle-drift pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Bio Details */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

            {/* Name with tight, bold, editorial typography */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-heading"
              >
                I AM <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-[size:200%] bg-clip-text text-transparent hover:animate-pulse">{name.toUpperCase()}</span>
              </motion.h1>

              {/* Slogan Title */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-mono text-sm sm:text-base md:text-lg tracking-wider text-brand-secondary uppercase"
              >
                // {title}
              </motion.h2>
            </div>

            {/* Short introduction bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-xl text-sm sm:text-base text-brand-muted leading-relaxed font-light"
            >
              {summary}
            </motion.p>

            {/* CTAs Button Groups - High-end flat styling */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-widest text-white bg-brand-primary rounded-lg hover:bg-brand-primary/90 transition-all duration-300 active:scale-[0.98] shadow-lg shadow-brand-primary/10 cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              
              <a
                href={resumeDownloadUrl}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-widest text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-brand-secondary" />
                Resume / PDF
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-widest text-brand-muted hover:text-white border border-transparent hover:border-white/5 transition-all duration-300 cursor-pointer"
              >
                Contact
              </a>
            </motion.div>

            {/* Sub-badge showcasing security-first approach */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="font-mono text-[9px] tracking-wider text-brand-muted/50 flex items-center gap-2 pt-6"
            >
              <Shield className="w-3 h-3 text-brand-primary/50" />
              SECURE, TRANSACTIONAL BACKEND ENGINEERING FOCUS
            </motion.div>
          </div>
          
          {/* Right Column: Stunning Profile Portrait Display */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', duration: 1.2, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Outer rotating decorative rings - Premium creative effect */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-primary/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-brand-secondary/15 animate-[spin_60s_linear_infinite_reverse]" />
              
              {/* Soft background radial color gradient block to lift picture */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/15 blur-3xl pointer-events-none" />

              {/* Borderless Portrait cut-out with custom edge mask blending into background */}
              <div className="absolute inset-0 flex items-center justify-center group pointer-events-none">
                <img
                  src={karthikImg}
                  alt={name}
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 50%, black 45%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 45%, transparent 75%)'
                  }}
                  className="w-full h-full object-contain max-h-[105%] group-hover:scale-[1.02] transition-transform duration-500 origin-bottom select-none pointer-events-none drop-shadow-[0_20px_25px_rgba(124,58,237,0.18)]"
                />
              </div>

              {/* Tech corner accent notes */}
              <div className="absolute -top-1 -right-1 px-4 py-2 rounded-lg bg-brand-card border border-white/5 shadow-xl font-mono text-[9px] text-brand-secondary flex items-center gap-1.5 select-none pointer-events-none no-print">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>B.Tech CSE // ACTIVE</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Visual Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce no-print cursor-pointer group z-20"
      >
        <span className="font-mono text-[9px] tracking-[0.2em] text-brand-muted/70 group-hover:text-brand-primary transition-colors duration-300">SCROLL DOWN</span>
        <div className="w-[1px] h-4 bg-brand-primary group-hover:h-6 transition-all duration-300" />
      </a>
    </section>
  );
}
