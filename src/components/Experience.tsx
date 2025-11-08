import { Briefcase, FlaskConical, GraduationCap, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "June 2024 - Present",
      role: "Postdoctoral Researcher",
      organization: "University of Central Florida",
      icon: Building2,
      responsibilities: [
        "Conducting advanced research on multi-agent reinforcement learning under Dr. Amrit Singh Bedi",
        "Developing novel MARL algorithms for decentralized decision-making systems",
        "Exploring optimization techniques for non-Euclidean spaces and manifold learning",
        "Publishing research in top-tier ML conferences and journals"
      ]
    },
    {
      year: "May 2023 - June 2024",
      role: "Machine Learning Scientist",
      organization: "One Network Enterprises",
      icon: Briefcase,
      responsibilities: [
        "Designed and deployed ML models for supply chain optimization",
        "Developed data-driven decision systems for enterprise-scale applications",
        "Applied reinforcement learning and optimization techniques to real-world problems",
        "Collaborated with cross-functional teams to deliver production ML solutions"
      ]
    },
    {
      year: "July 2018 - June 2023",
      role: "Ph.D. Research Scholar",
      organization: "Indian Institute of Technology Bombay",
      icon: GraduationCap,
      responsibilities: [
        "Dissertation: Multi-Agent Reinforcement Learning and Decision Making",
        "Published multiple papers on MARL, hedonic games, and optimization",
        "Developed theoretical frameworks for coalition formation in multi-agent systems",
        "Advanced research in federated learning and data valuation mechanisms"
      ]
    },
    {
      year: "May 2020 - Aug 2020",
      role: "Summer Research Intern",
      organization: "IBM Research",
      icon: FlaskConical,
      responsibilities: [
        "Developed interpretable feature selection using Shapley value-based approaches",
        "Contributed to research on explainable AI and model interpretability",
        "Implemented machine learning algorithms for real-world applications",
        "Co-authored research paper on feature subset selection"
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
