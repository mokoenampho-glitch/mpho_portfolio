import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Mpho Mokoena. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-primary fill-primary" />
            <span>and creativity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
