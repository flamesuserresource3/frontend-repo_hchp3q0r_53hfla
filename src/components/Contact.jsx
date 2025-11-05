import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-slate-400"
        >
          Whether it’s a full‑time role, freelance work, or a collaboration — I’d love to chat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <a
            href="mailto:youremail@example.com"
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            <Mail className="h-5 w-5" /> Email Me
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </motion.div>

        <p className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Your Name — MERN Stack Developer</p>
      </div>
    </section>
  );
};

export default Contact;
