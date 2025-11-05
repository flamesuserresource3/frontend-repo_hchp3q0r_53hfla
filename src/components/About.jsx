import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, User } from 'lucide-react';

const item = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 + i * 0.1 } }),
};

const About = () => {
  return (
    <section id="about" className="relative bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-slate-400"
        >
          I build end‑to‑end products with MongoDB, Express, React, and Node.js. I care deeply about accessibility, performance, and developer experience.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            Icon: User,
            title: 'Product Minded',
            desc: 'I translate ideas into elegant, user‑centric solutions that align with business goals.',
          },{
            Icon: Code,
            title: 'Clean Architecture',
            desc: 'Modular code, type‑safe APIs, and maintainable patterns for long‑term velocity.',
          },{
            Icon: Rocket,
            title: 'Performance Focused',
            desc: 'Ship fast, feel fast — from Core Web Vitals to backend throughput.',
          }].map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              custom={i}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex rounded-lg bg-emerald-400/10 p-3 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
