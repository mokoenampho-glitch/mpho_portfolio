const Footer = () => {
  return (
    <footer className="py-16 glass-card mt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold gradient-text mb-6">MM</div>
          <p className="text-muted-foreground/80">
            &copy; {new Date().getFullYear()} Mpho Mokoena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
