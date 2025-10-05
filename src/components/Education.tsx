import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Education</h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
            Academic background and qualifications
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8 md:p-12 paint-overlay">
          <div className="flex items-start gap-6">
            <div className="w-3 h-3 rounded-full bg-accent mt-2 shadow-glow" style={{ boxShadow: '0 0 20px hsl(var(--accent))' }} />
            <div className="flex-1 space-y-4">
              <div className="text-accent font-semibold text-lg">2016-2020</div>
              <CardHeader className="p-0">
                <CardTitle className="text-3xl flex items-center gap-3">
                  <GraduationCap className="w-7 h-7 text-accent" />
                  <span className="text-accent">Paralegal</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground/80 italic text-lg">
                  University of Johannesburg
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
