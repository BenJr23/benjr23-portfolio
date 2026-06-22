"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  FolderGit2,
  Wrench,
  Briefcase,
  Award,
  User as UserIcon,
  Github,
  Linkedin,
} from "lucide-react";
import { mockUser } from "../lib/mock";
import type { User } from "../lib/mock";

const navItems = [
  { path: "/", label: "Home", icon: HomeIcon },
  { path: "/about", label: "About", icon: UserIcon },
  { path: "/projects", label: "Projects", icon: FolderGit2 },
  { path: "/experience", label: "Experience", icon: Briefcase },
  { path: "/skills", label: "Skills", icon: Wrench },
  { path: "/certifications", label: "Certifications", icon: Award },
];

export function MainLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: User | null;
}) {
  const displayUser = user ?? mockUser;
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
        <div className="mx-auto w-full max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-luxe-800">
              {displayUser.image ? (
                <img
                  src={displayUser.image}
                  alt={displayUser.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                  {displayUser.name.charAt(0)}
                </div>
              )}
            </div>
            <span className="font-medium text-zinc-100 tracking-tight">{displayUser.name}</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative inline-flex items-center rounded-full"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-y-1 left-0 right-0 mx-0 rounded-full bg-indigo-500/10 border border-indigo-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <span
                    className={`relative z-10 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-indigo-300"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-luxe-800/50"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {displayUser.githubLink && (
              <a
                href={displayUser.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {displayUser.linkedinLink && (
              <a
                href={displayUser.linkedinLink}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel">
        <div className="flex items-center justify-around px-3 py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${
                isActive(item.path) ? "text-indigo-400 bg-indigo-500/10" : "text-zinc-400"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <main className="flex-1 pt-24 pb-24 md:pb-12 w-full px-6">
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>

      <footer className="border-t border-luxe-800 py-8 text-center text-zinc-500 text-sm">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p>© {new Date().getFullYear()} {displayUser.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
