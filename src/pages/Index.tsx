
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="max-h-screen bg-portfolio-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <hr className="border-0 h-px bg-portfolio-accent/40 mx-4 md:mx-10" />
        <Skills />
        <hr className="border-0 h-px bg-portfolio-accent/40 mx-4 md:mx-10" />
        <Projects />
        <hr className="border-0 h-px bg-portfolio-accent/40 mx-4 md:mx-10" />
        <About />
        <hr className="border-0 h-px bg-portfolio-accent/40 mx-4 md:mx-10" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
