"use client";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Briefcase, GraduationCap, Star, BookOpen } from "lucide-react";
import { mockAboutMe, AboutMeCategory } from "../lib/mock";

interface ExperienceProps {
  aboutEntries?: any[];
}

export function Experience({ aboutEntries }: ExperienceProps) {
  const timelineEntries = (aboutEntries ?? mockAboutMe).filter(
    (entry) =>
      String(entry.category) === AboutMeCategory.WORK_EXPERIENCE ||
      String(entry.category) === AboutMeCategory.EDUCATIONAL_BACKGROUND,
  );

  const sortedEntries = [...timelineEntries].sort((a, b) => {
    const dateA = a.startDate ? new Date(a.startDate) : new Date(a.createdAt);
    const dateB = b.startDate ? new Date(b.startDate) : new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case AboutMeCategory.WORK_EXPERIENCE:
        return <Briefcase className="w-5 h-5" />;
      case AboutMeCategory.EDUCATIONAL_BACKGROUND:
        return <GraduationCap className="w-5 h-5" />;
      case AboutMeCategory.CAREER_HIGHLIGHTS:
        return <Star className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const formatDateRange = (start: Date | null, end: Date | null, isPresent: boolean) => {
    if (!start) return "";
    const startStr = format(start, "MMM yyyy");
    if (isPresent) return `${startStr} — Present`;
    if (end) return `${startStr} — ${format(end, "MMM yyyy")}`;
    return startStr;
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100">Experience & Journey</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          My professional background, education, and key milestones along the way.
        </p>
      </header>

      <div className="relative max-w-3xl">
        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-luxe-800" />
        <div className="space-y-12">
          {sortedEntries.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-20"
            >
              <div className="absolute left-0 top-1 w-14 h-14 rounded-full glass-card flex items-center justify-center text-indigo-400 z-10 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                {getCategoryIcon(entry.category)}
              </div>
              <div className="glass-card p-6 rounded-2xl group hover:border-indigo-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-1">{entry.title}</h3>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-luxe-800 text-xs font-medium text-zinc-400">
                      {String(entry.category)
                        .split("_")
                        .map((w: string) => w.charAt(0) + w.slice(1).toLowerCase())
                        .join(" ")}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-indigo-400 whitespace-nowrap bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">
                    {formatDateRange(entry.startDate, entry.endDate, entry.isPresent)}
                  </div>
                </div>
                {entry.description && <p className="text-zinc-400 leading-relaxed">{entry.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
