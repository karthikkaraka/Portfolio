import { useState, useMemo } from 'react';
import { GitPullRequest, GitFork, Star, Info, ExternalLink } from 'lucide-react';

export default function GithubStats() {
  const [hoveredDay, setHoveredDay] = useState(null);

  // Generate 53 weeks * 7 days = 371 contributions grid
  const contributions = useMemo(() => {
    const list = [];
    const date = new Date('2025-05-31');
    
    for (let i = 0; i < 371; i++) {
      const currentDate = new Date(date);
      currentDate.setDate(date.getDate() - (370 - i));
      
      const month = currentDate.getMonth();
      const isInternshipTime = month === 7 || month === 8; // Aug or Sep
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
      
      let count = 0;
      const rand = Math.random();
      
      if (isInternshipTime) {
        count = isWeekend ? Math.floor(rand * 3) : Math.floor(rand * 8) + 2;
      } else {
        count = isWeekend ? Math.floor(rand * 2) : Math.floor(rand * 5);
      }

      let level = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 4) level = 2;
      else if (count > 4 && count <= 7) level = 3;
      else if (count > 7) level = 4;

      list.push({
        date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        count,
        level
      });
    }
    return list;
  }, []);

  const stats = [
    { label: 'Total Commits', value: '1,482' },
    { label: 'Pull Requests', value: '143' },
    { label: 'Repositories', value: '18' },
    { label: 'Contributions', value: '874' }
  ];

  const highlights = [
    {
      name: 'nostos',
      description: 'Lost & Found management platform secured with JWT filter guards, OTP verifications, duplicate claim checking modules, and admin moderators.',
      stars: 48,
      forks: 12,
      language: 'Java',
      langColor: '#b07219'
    },
    {
      name: 'hospital-management',
      description: 'Clinic administration REST APIs featuring custom Hibernate query abstractions, fetch joins, and granular Role-Based Access controls.',
      stars: 34,
      forks: 8,
      language: 'Java',
      langColor: '#b07219'
    },
    {
      name: 'bookstore-management',
      description: 'E-commerce transactional API infrastructure handling concurrent catalog book inventory queries, carts, and order checkout rollbacks.',
      stars: 29,
      forks: 5,
      language: 'Java',
      langColor: '#b07219'
    }
  ];

  return (
    <section id="github" className="py-24 lg:py-32 bg-brand-bg relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Title Section */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="editorial-label">
              [ 06 / ACTIVITY ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 font-heading tracking-tight">
              OPEN SOURCE CODE
            </h2>
          </div>
          <span className="font-mono text-xs text-brand-muted/70 tracking-widest uppercase">
            // GitHub Status
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stats & Contribution Map */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Contribution Map */}
            <div className="editorial-card p-6 rounded-3xl bg-white/[0.005]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold flex items-center gap-2">
                  <GitPullRequest className="w-4 h-4 text-brand-secondary" />
                  Contributions Tracker
                </h3>
                <span className="font-mono text-[9px] text-brand-muted/80 flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  Hover blocks
                </span>
              </div>

              {/* Responsive grid container */}
              <div className="overflow-x-auto pb-2">
                <div className="min-w-[640px] flex flex-col gap-2">
                  
                  {/* Contribution SVG Grid */}
                  <div className="grid grid-flow-col grid-rows-7 gap-1.5 h-28">
                    {contributions.map((day, idx) => {
                      let colorClass = 'bg-white/[0.03]'; // Level 0
                      if (day.level === 1) colorClass = 'bg-emerald-950/30 border border-emerald-900/10';
                      if (day.level === 2) colorClass = 'bg-emerald-800/40 border border-emerald-700/10';
                      if (day.level === 3) colorClass = 'bg-emerald-600/50';
                      if (day.level === 4) colorClass = 'bg-emerald-500';

                      return (
                        <div
                          key={idx}
                          className={`w-3.5 h-3.5 rounded-sm transition-all duration-150 cursor-crosshair ${colorClass} ${
                            hoveredDay?.date === day.date ? 'scale-125 ring-1 ring-brand-primary z-10' : ''
                          }`}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                        />
                      );
                    })}
                  </div>

                  {/* Months indicator */}
                  <div className="flex justify-between font-mono text-[9px] text-brand-muted/70 px-1.5 pt-2 select-none">
                    <span>Jun 2025</span>
                    <span>Aug 2025 (Internship)</span>
                    <span>Oct 2025</span>
                    <span>Dec 2025</span>
                    <span>Feb 2026</span>
                    <span>Apr 2026</span>
                    <span>May 2026</span>
                  </div>

                </div>
              </div>

              {/* Dynamic Commit Tooltip Display */}
              <div className="h-10 mt-4 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-[10px]">
                {hoveredDay ? (
                  <span className="text-brand-secondary font-bold">
                    &gt; {hoveredDay.count} {hoveredDay.count === 1 ? 'commit' : 'commits'} on {hoveredDay.date}
                  </span>
                ) : (
                  <span className="text-brand-muted/70">
                    &gt; Hover over grid to inspect commit indices...
                  </span>
                )}
                
                {/* Level guides */}
                <div className="flex items-center gap-1 select-none text-[9px]">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-sm bg-white/[0.03]" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950/30" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-800/40" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600/50" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                  <span>More</span>
                </div>
              </div>

            </div>

            {/* Quick stats counter items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/[0.005] border border-white/5 p-4 rounded-2xl text-center">
                  <div className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-white">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[8px] text-brand-muted/70 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Repository highlights */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white font-bold mb-3">
              Highlight Repositories
            </h3>

            {highlights.map((repo, idx) => (
              <a
                key={idx}
                href={`https://github.com/karthikkaraka444/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block editorial-card p-5 rounded-2xl group bg-white/[0.005]"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-mono flex items-center gap-1 group-hover:text-brand-secondary transition-colors uppercase">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-muted group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-xs text-brand-muted leading-relaxed mt-2.5 line-clamp-2 font-light">
                  {repo.description}
                </p>

                {/* Stars and language tags */}
                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/5 font-mono text-[9px] text-brand-muted/80">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-yellow-500/60" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <GitFork className="w-3 h-3 text-brand-secondary" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
