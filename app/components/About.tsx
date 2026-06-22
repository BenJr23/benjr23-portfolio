"use client";
import { motion } from "framer-motion";
import { User, Lightbulb, Target, Zap, BookOpen, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { mockAboutMe, AboutMeCategory, mockUser } from "../lib/mock";
import type { AboutMe, User as AppUser } from "../lib/mock";
import type { AboutMeCategory as PrismaAboutMeCategory } from "../generated/prisma/enums";

type AboutMeEntry = Omit<AboutMe, "category"> & {
  category: AboutMeCategory | PrismaAboutMeCategory;
};

interface AboutProps {
  aboutMeEntries?: AboutMeEntry[];
  user?: AppUser | null;
}

export function About({ aboutMeEntries, user }: AboutProps) {
  const aboutUser = user ?? mockUser;
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

      <div className="grid gap-8 md:grid-cols-[minmax(340px,420px)_minmax(520px,1fr)]">
        <aside className="p-8 rounded-3xl space-y-8 bg-transparent border border-transparent">
          <div className="space-y-6">
            <div className="relative h-[360px] md:h-[380px]">
              <div className="absolute -left-6 top-6 h-[260px] w-[85%] rounded-[36px] bg-zinc-900/80 shadow-[0_22px_50px_rgba(15,23,42,0.55)] -rotate-2" />
              <div className="absolute -right-6 top-16 h-[260px] w-[85%] rounded-[36px] bg-slate-900/90 shadow-[0_22px_50px_rgba(15,23,42,0.65)] rotate-2" />
              <div className="relative h-full overflow-hidden rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                <img
                  src={aboutUser.image ?? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800"}
                  alt={aboutUser.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-100">{aboutUser.name}</h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-zinc-400">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>{aboutUser.address ?? "Location unavailable"}</span>
            </div>
            {aboutUser.email && (
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-indigo-400" />
                <a href={`mailto:${aboutUser.email}`} className="text-zinc-200 hover:text-indigo-200 transition-colors">
                  {aboutUser.email}
                </a>
              </div>
            )}
            {aboutUser.phoneNumber && (
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-indigo-400" />
                <a href={`tel:${aboutUser.phoneNumber}`} className="text-zinc-200 hover:text-indigo-200 transition-colors">
                  {aboutUser.phoneNumber}
                </a>
              </div>
            )}
          </div>

          <div className="grid gap-4">
            {aboutUser.linkedinLink && (
              <Link
                href={aboutUser.linkedinLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-transparent border border-zinc-800/40 text-zinc-200 hover:bg-zinc-900 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-zinc-400" />
                LinkedIn Profile
              </Link>
            )}
            {aboutUser.githubLink && (
              <Link
                href={aboutUser.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-transparent border border-zinc-800/40 text-zinc-200 hover:bg-zinc-900 transition-colors"
              >
                <Github className="w-5 h-5 text-zinc-400" />
                GitHub Profile
              </Link>
            )}
          </div>
        </aside>

        <section className="grid gap-8">
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
        </section>
      </div>
    </div>
  );
}
