import { Mail, Linkedin, GraduationCap, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Research Portfolio</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Advancing the frontiers of machine learning through innovative research in 
                multi-agent systems, optimization, and distributed learning.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Quick Links</h3>
              <ul className="space-y-2">
                {["About", "Publications", "Experience", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Connect</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label="Google Scholar"
                >
                  <GraduationCap className="w-5 h-5 text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Academic Research Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
