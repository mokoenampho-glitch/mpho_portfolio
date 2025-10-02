import { Card } from '@/components/ui/card';
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
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      icon: Palette,
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Design Systems', 'Responsive Design'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'GitHub Actions'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps', 'Responsive'],
    },
    {
      icon: GitBranch,
      title: 'Tools & Others',
      skills: ['Git', 'VS Code', 'Postman', 'Agile', 'Testing', 'Documentation'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border"
            >
              <div className="mb-6 text-primary">
                <category.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-secondary text-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <p className="text-lg mb-4">
              <span className="font-bold gradient-text text-2xl">5+</span> Years of Experience
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold gradient-text text-2xl">50+</span> Projects Completed
            </p>
            <p className="text-lg">
              <span className="font-bold gradient-text text-2xl">30+</span> Happy Clients
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
