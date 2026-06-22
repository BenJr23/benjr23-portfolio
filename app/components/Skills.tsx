"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  Cloud,
  Shield,
  Activity,
} from "lucide-react";
import { mockTools, mockFrameworks, ToolCategory } from "../lib/mock";

interface SkillsProps {
  tools?: any[];
  frameworks?: any[];
}

export function Skills({ tools, frameworks }: SkillsProps) {
  const toolsList = tools ?? mockTools;
  const frameworksList = frameworks ?? mockFrameworks;

  const toolsByCategory = toolsList.reduce((acc: Record<string, any[]>, tool: any) => {
    const key = String(tool.category);
    if (!acc[key]) acc[key] = [];
    acc[key].push(tool);
    return acc;
  }, {} as Record<string, any[]>);

  const getCategoryIcon = (category: string | ToolCategory) => {
    switch (category) {
      case ToolCategory.FRONTEND:
      case ToolCategory.UI_TOOLKIT:
        return <Layout className="w-5 h-5" />;
      case ToolCategory.BACKEND:
      case ToolCategory.API:
        return <Server className="w-5 h-5" />;
      case ToolCategory.DATABASE:
      case ToolCategory.ORM:
        return <Database className="w-5 h-5" />;
      case ToolCategory.CLOUD:
      case ToolCategory.DEVOPS:
        return <Cloud className="w-5 h-5" />;
      case ToolCategory.SECURITY:
        return <Shield className="w-5 h-5" />;
      case ToolCategory.MONITORING:
        return <Activity className="w-5 h-5" />;
      case ToolCategory.LANGUAGE:
        return <Code2 className="w-5 h-5" />;
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  const formatCategoryName = (cat: string) => {
    return cat.split("_").map((w) => w.charAt(0) + w.slice(1).toLowerCase()).join(" ");
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100">Skills & Tools</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          The technologies, frameworks, and tools I use to bring ideas to life.
        </p>
      </header>

      <div className="space-y-16">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-6 flex items-center gap-2 border-b border-luxe-800 pb-4">
            <Layout className="w-5 h-5 text-indigo-400" />
            Core Frameworks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frameworksList.map((fw, idx) => (
              <motion.div
                key={fw.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-4 rounded-xl flex items-center gap-3 hover:border-indigo-500/30 transition-colors"
              >
                {fw.image ? (
                  <img src={fw.image} alt={fw.name} className="w-8 h-8" />
                ) : (
                  <div className="w-8 h-8 rounded bg-luxe-800 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-zinc-400" />
                  </div>
                )}
                <span className="font-medium text-zinc-200">{fw.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(toolsByCategory).map(([category, tools], idx) => (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-zinc-100 mb-4 flex items-center gap-2">
                <span className="text-indigo-400">{getCategoryIcon(category as ToolCategory)}</span>
                {formatCategoryName(category)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-luxe-950 border border-luxe-800 text-sm text-zinc-300"
                  >
                    {tool.picture && <img src={tool.picture} alt={tool.name} className="w-4 h-4" />}
                    {tool.name}
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
