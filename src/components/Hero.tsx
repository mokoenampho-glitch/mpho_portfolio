import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-illustration.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-sm p-2 border border-white/10">
              <img 
                src={profilePhoto} 
                alt="Mpho Mokoena" 
                className="w-full h-full object-cover rounded-[2rem] mix-blend-luminosity opacity-90"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
              Hi, I'm <span className="gradient-text">Mpho Mokoena</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-muted-foreground font-light tracking-wide">
              Creative Developer & Designer
            </h2>
          </div>
          <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional digital experiences that make a difference.
            Specializing in modern web and mobile applications with a focus on user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" onClick={() => scrollToSection('#projects')} className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('#contact')} className="text-lg px-8 py-6">
              Contact Me
            </Button>
          </div>
          
          <div className="flex gap-8 justify-center pt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:mokoena_mpho@icloud.com"
              className="text-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 glass-card p-4 rounded-full text-foreground/50 hover:text-primary transition-all duration-300 animate-bounce hover:shadow-glow"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
