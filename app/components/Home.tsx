"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, ArrowRight } from "lucide-react";
import { mockUser } from "../lib/mock";
import type { User } from "../lib/mock";

export function Home({ user }: { user?: User | null }) {
  const displayUser = user ?? mockUser;
  return (
    <div className="space-y-20">
      <section className="pt-10 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tight mb-6 leading-tight">
                Hi, I&apos;m {displayUser.name.split(" ")[0]} {displayUser.name.split(" ")[1]} <br className="hidden md:block" />
                <span className="text-zinc-500">I build digital experiences.</span>
              </h1>
            </div>

            <div>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
                {displayUser.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-sm">
                {displayUser.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {displayUser.address}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {displayUser.email}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {displayUser.photos.length > 0 && (
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4 grid-cols-1 md:grid-cols-[minmax(300px,420px)_1fr]"
          >
            {/* Featured Image */}
            <div className="relative h-[280px] md:h-[400px] overflow-hidden rounded-2xl glass-card">
              <img
                src={displayUser.photos[0]}
                alt="Featured"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Remaining Images */}
            <div className="grid h-[280px] md:h-[400px] grid-cols-2 auto-rows-fr gap-4 overflow-auto pr-1">
              {displayUser.photos.slice(1).map((photo, idx) => (
                <div
                  key={idx}
                  className="relative h-full overflow-hidden rounded-2xl glass-card"
                >
                  <img
                    src={photo}
                    alt={`Photo ${idx + 2}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      <section className="grid md:grid-cols-2 gap-6">
        <Link href="/projects" className="group block">
          <div className="glass-card p-8 rounded-2xl h-full transition-colors hover:border-indigo-500/30 hover:bg-luxe-800/50">
            <h3 className="text-xl font-semibold text-zinc-100 mb-2 flex items-center justify-between">
              View Projects
              <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-zinc-400">
              Explore my recent work, side projects, and open-source contributions.
            </p>
          </div>
        </Link>
        <Link href="/experience" className="group block">
          <div className="glass-card p-8 rounded-2xl h-full transition-colors hover:border-indigo-500/30 hover:bg-luxe-800/50">
            <h3 className="text-xl font-semibold text-zinc-100 mb-2 flex items-center justify-between">
              My Experience
              <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-zinc-400">
              Read about my career journey, education, and professional background.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}
