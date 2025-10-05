import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import WorkExperience from '@/components/WorkExperience';
import Knowledge from '@/components/Knowledge';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <WorkExperience />
        <Knowledge />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
