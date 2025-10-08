import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      period: '2024 - Currently',
      title: 'UX/UI Engineer',
      description: 'Versatile and collaborative professional with a unique hybrid background in UI/UX design and AWS DevOps engineering. Leverages a user-centered design approach to create intuitive, accessible, and high-fidelity prototypes, while simultaneously architecting secure, scalable, and automated cloud infrastructure to deploy them. Excels at bridging the gap between design and development to drive the end-to-end delivery of data-driven, reliable, and engaging applications.',
    },
    {
      period: '2020 - 2021',
      title: 'Paralegal',
      points: [
        'Provided comprehensive support to Senior Labour Relations Officers by conducting legal research and managing documentation in preparation for civil and criminal hearings.',
        'Scheduled and conducted interviews with clients, witnesses, and officers to gather information for depositions, disciplinary hearings, and arbitrations.',
        'Assisted in administrative tasks, including database and file management, answering phone calls, and performing general office duties to ensure smooth daily operations',
      ],
    },
    {
      period: '2017',
      title: 'Legal Secretary',
      points: [
        'Prepared and managed legal documents, ensuring accuracy and compliance with relevant laws and regulations.',
        'Provided administrative support to partners, including scheduling appointments, meetings, and coordinating daily operations.',
        'Facilitated communication between attorneys, clients, and prospective clients by organizing and coordinating conferences, meetings, and correspondence.',
        'Maintained the firm\'s master calendar, ensuring all appointments, deadlines, and events were accurately scheduled and tracked.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Work Experience</h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 md:p-12 paint-overlay hover:scale-[1.01] transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-accent mt-2 shadow-glow" style={{ boxShadow: '0 0 20px hsl(var(--accent))' }} />
                    <div className="min-w-[140px]">
                      <div className="text-accent font-semibold text-lg">{exp.period}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <CardHeader className="p-0">
                    <CardTitle className="text-3xl flex items-center gap-3">
                      <Briefcase className="w-7 h-7 text-accent" />
                      {exp.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {exp.description ? (
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    ) : (
                      <ul className="space-y-3">
                        {exp.points?.map((point, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed flex gap-3">
                            <span className="text-accent mt-1.5">•</span>
                            <span className="flex-1">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
