import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Page() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex justify-center items-center bg-gray-100">
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen bg-white p-12">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gray-50 p-12">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white p-12">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen bg-gray-50 p-12">
        <Experience />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white p-12">
        <Contact />
      </section>
    </>
  );
}
