"use client";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Award, Calendar } from "lucide-react";
import { mockCertifications } from "../lib/mock";

interface CertificationsProps {
  certifications?: any[];
}

export function Certifications({ certifications }: CertificationsProps) {
  const items = certifications ?? mockCertifications;

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100">Certifications</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Professional credentials and continuous learning achievements.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((cert, idx) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative rounded-2xl overflow-hidden flex flex-col h-full group"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <div className="absolute inset-0.5 bg-zinc-900 rounded-2xl -z-10" />
            
            {/* Content */}
            <div className="p-6 flex flex-col h-full">
              {/* Image showcase with glow effect */}
              <div className="relative mb-6 -mx-6 -mt-6 mb-0 overflow-hidden rounded-t-2xl">
                <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent flex items-center justify-center relative group/image">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-full h-full object-contain p-4 group-hover/image:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Award className="w-16 h-16 text-indigo-400/50 group-hover/image:text-indigo-400 transition-colors" />
                  )}
                  {/* Glow overlay on hover */}
                  <div className="absolute inset-0 bg-indigo-500/0 group-hover/image:bg-indigo-500/10 transition-all duration-300" />
                </div>
              </div>

              {/* Badge and title */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-zinc-100 leading-tight">{cert.name}</h3>
                </div>
                <motion.div 
                  className="px-2.5 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-lg text-xs font-semibold text-indigo-300 whitespace-nowrap"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Certified
                </motion.div>
              </div>

              {/* Date and description */}
              <div className="flex items-center gap-1.5 text-sm text-zinc-400 mb-3">
                <Calendar className="w-4 h-4 text-indigo-400/60" />
                <span>{format(new Date(cert.dateIssued), "MMM yyyy")}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mt-auto">{cert.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
