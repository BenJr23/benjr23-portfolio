"use client";
import { motion } from "framer-motion";
import { User, Lightbulb, Target, Zap, BookOpen } from "lucide-react";
import { mockAboutMe, AboutMeCategory } from "../lib/mock";
import type { AboutMe } from "../lib/mock";
import type { AboutMeCategory as PrismaAboutMeCategory } from "../generated/prisma/enums";

type AboutMeEntry = Omit<AboutMe, "category"> & {
  category: AboutMeCategory | PrismaAboutMeCategory;
};

interface AboutProps {
  aboutMeEntries?: AboutMeEntry[];
}

export function About({ aboutMeEntries }: AboutProps) {
  const narrativeCategories: Array<AboutMeCategory | PrismaAboutMeCategory> = [
    AboutMeCategory.PERSONAL_BACKGROUND,
    AboutMeCategory.WORK_PHILOSOPHY,
    AboutMeCategory.TECHNICAL_EXPERTISE,
    AboutMeCategory.CAREER_HIGHLIGHTS,
    AboutMeCategory.CONTINUOUS_LEARNING,
  ];

  const narrativeEntries = (aboutMeEntries ?? mockAboutMe).filter((entry) =>
    narrativeCategories.includes(entry.category as AboutMeCategory | PrismaAboutMeCategory),
  );

  const getCategoryIcon = (category: AboutMeCategory | PrismaAboutMeCategory) => {
    switch (category) {
      case AboutMeCategory.PERSONAL_BACKGROUND:
        return <User className="w-6 h-6" />;
      case AboutMeCategory.WORK_PHILOSOPHY:
        return <Lightbulb className="w-6 h-6" />;
      case AboutMeCategory.TECHNICAL_EXPERTISE:
        return <Zap className="w-6 h-6" />;
      case AboutMeCategory.CAREER_HIGHLIGHTS:
        return <Target className="w-6 h-6" />;
      case AboutMeCategory.CONTINUOUS_LEARNING:
        return <BookOpen className="w-6 h-6" />;
      default:
        return <User className="w-6 h-6" />;
    }
  };

  const formatCategoryName = (cat: string) => {
    return cat.split("_").map((w) => w.charAt(0) + w.slice(1).toLowerCase()).join(" ");
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100">About Me</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Who I am, how I work, and what drives me as an engineer.
        </p>
      </header>

      <div className="grid gap-8">
        {narrativeEntries.map((entry, idx) => (
          <motion.article
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  {getCategoryIcon(entry.category)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-100">{entry.title}</h2>
                  <span className="text-sm font-medium text-zinc-500">
                    {formatCategoryName(entry.category)}
                  </span>
                </div>
              </div>

              <div className="max-w-none">
                <p className="text-zinc-300 leading-relaxed text-lg">{entry.description}</p>
              </div>
            </div>
          </motion.article>
        ))}

        {narrativeEntries.length === 0 && (
          <div className="glass-card p-12 rounded-3xl text-center text-zinc-500">
            More about me coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
