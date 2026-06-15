import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import GithubStats from './sections/GithubStats';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-bg text-white min-h-screen selection:bg-brand-primary/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Experience />
        <GithubStats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
