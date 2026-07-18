import { useState, useMemo, useEffect } from 'react';
import { GitPullRequest, GitFork, Star, Info, ExternalLink } from 'lucide-react';

export default function GithubStats() {
  const [hoveredDay, setHoveredDay] = useState(null);
  const [contributionsData, setContributionsData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const username = 'karthikkaraka';
        
        // Fetch contributions calendar
        const contribPromise = fetch(`https://github-contributions-api.deno.dev/${username}.json`)
          .then(res => res.ok ? res.json() : null)
          .catch(() => null);

        // Fetch user profile stats
        const profilePromise = fetch(`https://api.github.com/users/${username}`)
          .then(res => res.ok ? res.json() : null)
          .catch(() => null);

        // Fetch user repositories
        const reposPromise = fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
          .then(res => res.ok ? res.json() : [])
          .catch(() => []);

        const [contribs, profile, repos] = await Promise.all([
          contribPromise,
          profilePromise,
          reposPromise
        ]);

        if (contribs) {
          setContributionsData(contribs);
        }
        if (profile) {
          setProfileData(profile);
        }
        if (repos && repos.length > 0) {
          setReposData(repos);
        }
      } catch (err) {
        console.error("Error loading GitHub stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGithubStats();
  }, []);

  // Generate 53 weeks * 7 days = 371 contributions grid
  const contributions = useMemo(() => {
    if (contributionsData && contributionsData.contributions) {
      const flatDays = contributionsData.contributions.flat();
      return flatDays.map((day) => {
        let level = 0;
        if (day.contributionLevel === 'FIRST_QUARTILE') level = 1;
        else if (day.contributionLevel === 'SECOND_QUARTILE') level = 2;
        else if (day.contributionLevel === 'THIRD_QUARTILE') level = 3;
        else if (day.contributionLevel === 'FOURTH_QUARTILE') level = 4;

        return {
          date: new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count: day.contributionCount,
          level
        };
      });
    }

    // Fallback: Generate the same nice mock matrix if API fails or is loading
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
  }, [contributionsData]);

  // Compute month labels aligned to the dynamic weeks
  const monthLabels = useMemo(() => {
    const labels = [];
    let prevMonth = -1;
    
    if (contributionsData && contributionsData.contributions) {
      contributionsData.contributions.forEach((week, weekIdx) => {
        if (week && week.length > 0) {
          const dateVal = new Date(week[0].date);
          const m = dateVal.getMonth();
          if (m !== prevMonth) {
            labels.push({
              name: dateVal.toLocaleDateString('en-US', { month: 'short' }),
              weekIndex: weekIdx
            });
            prevMonth = m;
          }
        }
      });
    }
    return labels;
  }, [contributionsData]);

  const stats = useMemo(() => {
    const totalRepos = profileData ? profileData.public_repos : 23;
    const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0) || 3;
    const followers = profileData ? profileData.followers : 3;
    const contributionsCount = contributionsData ? contributionsData.totalContributions : 874;

    return [
      { label: 'Public Repos', value: totalRepos.toString() },
      { label: 'Total Stars', value: totalStars.toString() },
      { label: 'Followers', value: followers.toString() },
      { label: 'Year Activity', value: contributionsCount.toLocaleString() }
    ];
  }, [profileData, reposData, contributionsData]);

  const highlights = useMemo(() => {
    const config = [
      {
        key: 'NOSTOSBACKEND',
        fallbackName: 'NOSTOSBACKEND',
        description: 'Lost & Found management platform secured with JWT filter guards, OTP verifications, duplicate claim checking modules, and admin moderators.',
        fallbackStars: 0,
        fallbackForks: 0,
        language: 'Java',
        langColor: '#b07219'
      },
      {
        key: 'HospitalManagementSystem',
        fallbackName: 'HospitalManagementSystem',
        description: 'Clinic administration REST APIs featuring custom Hibernate query abstractions, fetch joins, and granular Role-Based Access controls.',
        fallbackStars: 1,
        fallbackForks: 0,
        language: 'Java',
        langColor: '#b07219'
      },
      {
        key: 'BOOKSTORE',
        fallbackName: 'BOOKSTORE',
        description: 'E-commerce transactional API infrastructure handling concurrent catalog book inventory queries, carts, and order checkout rollbacks.',
        fallbackStars: 1,
        fallbackForks: 0,
        language: 'Java',
        langColor: '#b07219'
      }
    ];

    return config.map((cfg) => {
      const actualRepo = reposData.find(r => r.name.toLowerCase() === cfg.key.toLowerCase());
      return {
        name: actualRepo ? actualRepo.name : cfg.fallbackName,
        description: actualRepo && actualRepo.description ? actualRepo.description : cfg.description,
        stars: actualRepo ? actualRepo.stargazers_count : cfg.fallbackStars,
        forks: actualRepo ? actualRepo.forks_count : cfg.fallbackForks,
        language: actualRepo && actualRepo.language ? actualRepo.language : cfg.language,
        langColor: cfg.langColor
      };
    });
  }, [reposData]);

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
                  {monthLabels.length > 0 ? (
                    <div 
                      className="w-full font-mono text-[9px] text-brand-muted/70 pt-2 select-none relative h-4"
                      style={{ display: 'grid', gridTemplateColumns: 'repeat(53, minmax(0, 1fr))', gap: '0.375rem' }}
                    >
                      {monthLabels.map((lbl, idx) => (
                        <span 
                          key={idx} 
                          style={{ gridColumnStart: lbl.weekIndex + 1 }} 
                          className="col-span-4 text-left whitespace-nowrap"
                        >
                          {lbl.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-between font-mono text-[9px] text-brand-muted/70 px-1.5 pt-2 select-none">
                      <span>Jun 2025</span>
                      <span>Aug 2025 (Internship)</span>
                      <span>Oct 2025</span>
                      <span>Dec 2025</span>
                      <span>Feb 2026</span>
                      <span>Apr 2026</span>
                      <span>May 2026</span>
                    </div>
                  )}

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
                href={`https://github.com/karthikkaraka/${repo.name}`}
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
