import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
