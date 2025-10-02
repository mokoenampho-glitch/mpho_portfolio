import { Code2, Palette, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Development',
      description: 'Building robust and scalable applications with modern technologies',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating intuitive and visually stunning user experiences',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Always exploring new ideas and pushing creative boundaries',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate developer and designer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Hello There!</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm Mpho Mokoena, a creative professional with a passion for transforming ideas into
              reality. With expertise in both development and design, I bring a unique perspective
              to every project I work on.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to solve real-world
              problems through elegant solutions. I believe in the power of good design and clean
              code to make a positive impact.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding or designing, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the community.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <div className="text-9xl font-bold gradient-text">MM</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border"
            >
              <div className="mb-4 text-primary">
                <item.icon size={40} />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
