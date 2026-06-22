"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Monitor, Smartphone, Layout as LayoutIcon } from "lucide-react";
import { mockProjects, mockFrameworks, ProjectType } from "../lib/mock";

interface ProjectsProps {
  projects?: any[];
  frameworks?: any[];
}

export function Projects({ projects, frameworks }: ProjectsProps) {
  const [filter, setFilter] = useState<ProjectType | "ALL">("ALL");
  const data = projects ?? mockProjects;
  const frameworksList = frameworks ?? mockFrameworks;
  const filteredProjects = data.filter((p: any) => filter === "ALL" || p.type === filter);

  const getTypeIcon = (type: string | ProjectType) => {
    switch (type) {
      case ProjectType.WEB_APPLICATION:
        return <Monitor className="w-4 h-4" />;
      case ProjectType.MOBILE_APPLICATION:
        return <Smartphone className="w-4 h-4" />;
      case ProjectType.DESKTOP_APPLICATION:
        return <LayoutIcon className="w-4 h-4" />;
    }
  };

  const formatTypeLabel = (type: string | ProjectType) => {
    return String(type).split("_").map((w) => w.charAt(0) + w.slice(1).toLowerCase()).join(" ");
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100">Projects</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          A selection of my recent work, ranging from web applications to mobile experiences.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("ALL")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "ALL"
              ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
              : "glass-card text-zinc-400 hover:text-zinc-200"
          }`}
        >
          All Projects
        </button>
        {Object.values(ProjectType).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              filter === type
                ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                : "glass-card text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {getTypeIcon(type)}
            {formatTypeLabel(type)}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: any) => {
            const framework = frameworksList.find((f: any) => f.id === project.frameworkId) || project.framework;
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col"
              >
                {project.imageUrl && (
                  <div className="relative h-48 overflow-hidden border-b border-luxe-800">
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-luxe-950/80 backdrop-blur-md border border-luxe-800 text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                        {getTypeIcon(project.type)}
                        {formatTypeLabel(project.type)}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-zinc-100">{project.name}</h3>
                    <div className="flex items-center gap-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full hover:bg-luxe-800 text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.previewLink && (
                        <a
                          href={project.previewLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full hover:bg-luxe-800 text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                  <div className="space-y-4 mt-auto">
                    {(project.roles ?? []).length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {(project.roles ?? []).map((role: string) => (
                          <span key={role} className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">
                            {role}
                          </span>
                        ))}
                      </div>
                    )}

                    {framework && (
                      <div className="space-y-3 pt-4 border-t border-luxe-800">
                        {/* Framework Section */}
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/10">
                          {framework.image && (
                            <img src={framework.image} alt={framework.name} className="w-5 h-5" />
                          )}
                          <span className="text-xs text-zinc-400 font-medium">Framework</span>
                          <span className="text-sm font-semibold text-zinc-200">{framework.name}</span>
                        </div>

                        {/* Tech Stack Section */}
                        {framework.tools && framework.tools.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tech Stack</span>
                            <div className="flex flex-wrap gap-2">
                              {framework.tools.map((tool: any) => (
                                <motion.div
                                  key={tool.id}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  className="group/tool cursor-pointer"
                                >
                                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 hover:border-indigo-500/50 transition-all duration-200 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)]">
                                    {tool.picture && (
                                      <img 
                                        src={tool.picture} 
                                        alt={tool.name} 
                                        className="w-4 h-4 object-contain group-hover/tool:brightness-125 transition-all"
                                      />
                                    )}
                                    <span className="text-xs font-medium text-zinc-300 group-hover/tool:text-indigo-300 transition-colors">{tool.name}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
