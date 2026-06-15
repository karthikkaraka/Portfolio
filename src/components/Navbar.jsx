import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { num: '01', name: 'About', href: '#about' },
  { num: '02', name: 'Expertise', href: '#expertise' },
  { num: '03', name: 'Skills', href: '#skills' },
  { num: '04', name: 'Projects', href: '#projects' },
  { num: '05', name: 'Journey', href: '#experience' },
  { num: '06', name: 'GitHub', href: '#github' },
  { num: '07', name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map(item => item.href.substring(1));
      let currentActive = '';
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-print ${
      scrolled 
        ? 'py-4 bg-brand-bg/90 backdrop-blur-md border-b border-white/5 shadow-2xl' 
        : 'py-8 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Signature */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20 group-hover:rotate-6 transition-all duration-300">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/90 group-hover:text-brand-primary transition-colors duration-300">
              KARAKA<span className="text-white/40 font-light font-sans">.KARTHIK</span>
            </span>
          </a>

          {/* Desktop Navigation - Human editorial style */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-xs font-mono tracking-wider transition-colors duration-300 rounded-md hover:text-white ${
                    isActive ? 'text-white' : 'text-brand-muted hover:text-white/70'
                  }`}
                >
                  <span className="text-brand-primary mr-1 font-light text-[10px]">{item.num} //</span>
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-4 right-4 h-[1px] bg-brand-primary"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-6 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white border border-white/10 hover:border-brand-primary hover:bg-brand-primary/10 rounded-md transition-all duration-300 active:scale-[0.98]"
            >
              [ CONNECT ]
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-brand-muted hover:text-white hover:bg-white/5 focus:outline-none transition-all"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-white/5 bg-brand-bg/95 backdrop-blur-xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-mono tracking-wider transition-all duration-200 ${
                      isActive 
                        ? 'text-white bg-white/5 border-l-2 border-brand-primary' 
                        : 'text-brand-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-brand-primary text-xs mr-2 font-light">{item.num} /</span>
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3.5 text-center font-mono text-xs uppercase tracking-widest text-white border border-white/10 hover:border-brand-primary rounded-xl transition-all duration-200"
                >
                  [ CONNECT ]
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
