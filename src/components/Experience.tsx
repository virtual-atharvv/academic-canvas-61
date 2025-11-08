import { Briefcase, FlaskConical, Code, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Postdoctoral Researcher",
      organization: "Advanced AI Research Lab",
      icon: FlaskConical,
      responsibilities: [
        "Leading research in multi-agent reinforcement learning systems",
        "Developing novel optimization algorithms for non-Euclidean manifolds",
        "Mentoring PhD students and coordinating collaborative projects",
        "Publishing high-impact research in top-tier conferences"
      ]
    },
    {
      year: "2023 - 2024",
      role: "Machine Learning Research Scientist",
      organization: "Technology Research Institute",
      icon: Code,
      responsibilities: [
        "Designed and implemented federated learning frameworks",
        "Conducted theoretical analysis of convergence properties",
        "Collaborated with industry partners on real-world applications",
        "Presented research findings at international conferences"
      ]
    },
    {
      year: "2020 - 2023",
      role: "PhD Research Scholar",
      organization: "University Research Center",
      icon: Users,
      responsibilities: [
        "Investigated hedonic games and coalition formation",
        "Developed computational methods for valuation in cooperative settings",
        "Published research in peer-reviewed journals",
        "Taught undergraduate courses in machine learning"
      ]
    },
    {
      year: "2019",
      role: "Research Intern",
      organization: "Corporate AI Lab",
      icon: Briefcase,
      responsibilities: [
        "Implemented deep reinforcement learning agents",
        "Optimized neural network architectures for efficiency",
        "Contributed to open-source machine learning libraries",
        "Collaborated with cross-functional research teams"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">Professional Experience</h2>
            <p className="section-subheading">
              A progression through research positions and academic milestones
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card-elegant animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Year */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <exp.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="mt-3 text-sm font-medium text-primary">{exp.year}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">{exp.organization}</p>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
