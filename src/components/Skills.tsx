import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Design Systems', 'Responsive Design'],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'GitHub Actions'],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps', 'Responsive'],
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Tools & Others',
      skills: ['Git', 'VS Code', 'Postman', 'Agile', 'Testing', 'Documentation'],
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 hover:scale-105 transition-transform duration-300">
              <CardHeader className="p-0 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shadow-glow">
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 text-sm font-medium rounded-full glass-card"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="p-12 shadow-elevated bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-3">
              <div className="text-6xl font-bold gradient-text">3+</div>
              <div className="text-lg text-muted-foreground/80">Years Experience</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-6xl font-bold gradient-text">50+</div>
              <div className="text-lg text-muted-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-6xl font-bold gradient-text">25+</div>
              <div className="text-lg text-muted-foreground/80">Happy Clients</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
