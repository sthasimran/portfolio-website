'use client';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Works from './components/Work';

export default function Page() {
  return (
    <div className="relative">
      <Sidebar />

      <main className="md:ml-40">
        <Home />
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  );
}
