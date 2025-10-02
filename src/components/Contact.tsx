import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      content: 'mpho@example.com',
      href: 'mailto:mpho@example.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      content: '+27 123 456 7890',
      href: 'tel:+27123456789',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      content: 'Johannesburg, South Africa',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="glass-card flex items-start gap-5 p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">{info.title}</div>
                      <div className="text-muted-foreground/80">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8">Follow Me</h3>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-5 py-4 rounded-xl glass-card border-0 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-xl glass-card border-0 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="subject" className="text-sm font-semibold">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full px-5 py-4 rounded-xl glass-card border-0 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl glass-card border-0 focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
