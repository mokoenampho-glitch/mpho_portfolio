import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Knowledge = () => {
  const skills = [
    { name: 'Figma', level: 10 },
    { name: 'Adobe XD', level: 9 },
    { name: 'Canva', level: 8 },
  ];

  return (
    <section id="knowledge" className="py-32 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Knowledge</h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
            Design tools and technologies I work with
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8 md:p-12 paint-overlay">
          <CardContent className="p-0 space-y-10">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <CardTitle className="text-2xl">{skill.name}</CardTitle>
                <div className="flex gap-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-full transition-all duration-300 ${
                        i < skill.level
                          ? 'bg-accent shadow-glow scale-100'
                          : 'bg-muted/30 scale-90'
                      }`}
                      style={
                        i < skill.level
                          ? { boxShadow: '0 0 15px hsl(var(--accent) / 0.5)' }
                          : {}
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Knowledge;
