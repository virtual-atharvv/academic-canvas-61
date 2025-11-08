import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Postdoctoral Researcher",
      institution: "Leading Research Institution",
      icon: Briefcase,
      description: "Advancing multi-agent reinforcement learning and optimization techniques"
    },
    {
      year: "2020 - 2024",
      title: "Ph.D. in Computer Science",
      institution: "Premier University",
      icon: GraduationCap,
      description: "Dissertation on cooperative game theory and machine learning"
    },
    {
      year: "2018 - 2020",
      title: "M.Sc. in Artificial Intelligence",
      institution: "Top-tier University",
      icon: Award,
      description: "Focus on reinforcement learning and optimization"
    },
    {
      year: "2014 - 2018",
      title: "B.Sc. in Computer Engineering",
      institution: "Renowned Institute",
      icon: GraduationCap,
      description: "Foundation in computer systems and algorithms"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">About Me</h2>
            <p className="section-subheading">
              Passionate researcher dedicated to advancing the field of machine learning through rigorous scientific inquiry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Biography */}
            <div className="animate-fade-in-up">
              <div className="card-elegant">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Research Focus</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My research bridges the gap between theoretical foundations and practical applications 
                    in multi-agent systems, with a particular emphasis on reinforcement learning and 
                    cooperative game theory.
                  </p>
                  <p>
                    I specialize in developing novel optimization algorithms for non-Euclidean spaces and 
                    exploring how machine learning can enhance our understanding of complex strategic 
                    interactions in distributed systems.
                  </p>
                  <p>
                    Through collaborative research and rigorous experimentation, I strive to push the 
                    boundaries of what's possible in artificial intelligence while maintaining strong 
                    theoretical foundations.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Academic Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 border-l-2 border-primary/30 pb-6 last:pb-0 group hover:border-primary transition-colors duration-300"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex items-start gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm text-primary font-medium mb-1">{item.year}</div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
