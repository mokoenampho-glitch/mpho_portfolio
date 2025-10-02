import { ExternalLink, Github } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
            A selection of my recent work showcasing diverse skills and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 text-xs font-medium rounded-full glass-card"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
