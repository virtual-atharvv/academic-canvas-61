import { ArrowRight, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Professional Headshot */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
              <img
                src={profileImage}
                alt="Professional headshot of Postdoctoral Researcher specializing in Multi-Agent Reinforcement Learning"
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl object-cover border-4 border-background shadow-elegant group-hover:scale-105 transition-transform duration-500"
                width="224"
                height="224"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Postdoctoral Researcher
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Research Portfolio
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light">
            Specializing in <span className="text-primary font-medium">Multi-Agent Reinforcement Learning</span>
          </p>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Advancing the frontiers of Machine Learning through innovative research in optimization, game theory, and distributed systems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="btn-primary-academic group"
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Research
              <BookOpen className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="btn-secondary-academic group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
