import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import teachoraProject from '@/assets/teachora-project.png';
import hervoiceProject from '@/assets/hervoice-project.png';
import elysianProject from '@/assets/elysian-project.png';

const Projects = () => {
  const projects = [
    {
      title: 'Teachora™',
      description: 'A paperless school communication app designed to improve engagement between teachers and parents. The app provides a central hub for announcements, notices, and private communication.',
      tags: ['React Native', 'Firebase', 'UI/UX', 'Mobile'],
      image: teachoraProject,
      github: '#',
      live: '#',
    },
    {
      title: 'Her Voice™',
      description: 'Women first, women strong, women safe. A safety and empowerment app featuring panic alerts, live location sharing, and daily affirmations for women.',
      tags: ['React Native', 'Geolocation', 'Real-time', 'Safety'],
      image: hervoiceProject,
      github: '#',
      live: '#',
    },
    {
      title: 'Elysian Lab',
      description: 'Where beauty meets ease. A comprehensive salon booking app with service scheduling, team management, and seamless appointment booking experience.',
      tags: ['React Native', 'Booking System', 'UI/UX', 'Mobile'],
      image: elysianProject,
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border-border"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
