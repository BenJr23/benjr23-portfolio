"use client";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Award, Calendar } from "lucide-react";
import { mockCertifications } from "../lib/mock";

export function Certifications() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100">Certifications</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Professional credentials and continuous learning achievements.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {mockCertifications.map((cert, idx) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl p-6 flex flex-col h-full group hover:border-indigo-500/30 transition-colors"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
                {cert.image ? (
                  <img src={cert.image} alt={cert.name} className="w-8 h-8 object-contain" />
                ) : (
                  <Award className="w-6 h-6" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100 leading-tight mb-2">{cert.name}</h3>
                <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                  <Calendar className="w-4 h-4" />
                  Issued {format(cert.dateIssued, "MMMM yyyy")}
                </div>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mt-auto">{cert.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
