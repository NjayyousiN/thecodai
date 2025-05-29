const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-2xl font-bold text-title mb-4">
          THECOD
          <span className="inline-block mx-0.5 px-2 py-0.5 bg-caption text-foreground tracking-widest rounded text-center">
            {"{"}AI{"}"}
          </span>
        </div>
        <p className="text-subtitle mb-6">
          © 2024 THECODAI. All rights reserved. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-subtitle hover:text-caption transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-subtitle hover:text-caption transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-subtitle hover:text-caption transition-colors duration-300"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
