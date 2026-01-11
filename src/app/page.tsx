'use client';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import SkillsSection from './components/Skills';
import WorkSection from './components/Work';

export default function Page() {
  return (
    <div className="relative">
      <Sidebar />

      <main className="md:ml-40">
        <Home />
        <About />
        <WorkSection />
        <Projects />
        <SkillsSection />
        <Contact />
      </main>
    </div>
  );
}
