import { Code2, Palette, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Development',
      description: 'Building robust and scalable applications with modern technologies and best practices',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design',
      description: 'Creating intuitive and visually stunning user experiences that delight users',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Always exploring new ideas and pushing creative boundaries to deliver excellence',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">About Me</h2>
            <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences
            </p>
          </div>
          
          <div className="glass-card rounded-3xl p-8 md:p-12 space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
              I'm a creative developer and designer with a passion for building beautiful, functional applications
              that solve real-world problems. With expertise in modern web technologies and a keen eye for design,
              I bridge the gap between technical excellence and user experience.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed">
              My journey in tech has been driven by curiosity and a constant desire to learn and improve.
              I believe in writing clean, maintainable code and creating intuitive interfaces that users love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                <CardHeader className="p-0 pb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-glow">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-2xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground/80 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
