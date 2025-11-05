import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu } from 'lucide-react';

const App = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Top Navigation */}
      <header className="fixed inset-x-0 top-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <a href="#home" className="text-sm font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">MERN</span> Portfolio
            </a>
            <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <button aria-label="Open Menu" className="md:hidden" onClick={() => setOpen(v => !v)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
          {open && (
            <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur md:hidden">
              <a onClick={() => setOpen(false)} href="#about" className="text-slate-200">About</a>
              <a onClick={() => setOpen(false)} href="#projects" className="text-slate-200">Projects</a>
              <a onClick={() => setOpen(false)} href="#contact" className="text-slate-200">Contact</a>
            </div>
          )}
        </div>
      </header>

      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
