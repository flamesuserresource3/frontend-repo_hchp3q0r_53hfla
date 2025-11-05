import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    stack: ['React', 'Node', 'Socket.io', 'MongoDB'],
    desc: 'Group DMs, presence, and message threads with a sleek, responsive UI.',
    live: '#',
    repo: '#',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    title: 'E‑commerce Dashboard',
    stack: ['React', 'Express', 'MongoDB', 'Chart.js'],
    desc: 'Analytics, order management, and role‑based access with blazing performance.',
    live: '#',
    repo: '#',
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    title: 'SaaS Landing + API',
    stack: ['Vite', 'Node', 'Stripe', 'Framer Motion'],
    desc: 'Conversion‑focused landing with subscription billing and secure API.',
    live: '#',
    repo: '#',
    gradient: 'from-amber-500/20 to-rose-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className={`h-36 w-full bg-gradient-to-br ${p.gradient}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center gap-1 text-sm text-emerald-400 hover:underline">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-slate-300 hover:underline">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 20% 0%, rgba(16,185,129,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.18), transparent 40%)' }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
