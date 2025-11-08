import { GraduationCap, Briefcase, Award } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const timeline = [
    {
      year: "June 2024 - Present",
      title: "Postdoctoral Researcher",
      institution: "University of Central Florida",
      icon: Briefcase,
      description: "Working under Dr. Amrit Singh Bedi on advanced MARL algorithms and optimization techniques"
    },
    {
      year: "May 2023 - June 2024",
      title: "Machine Learning Scientist",
      institution: "One Network Enterprises",
      icon: Briefcase,
      description: "Developed ML solutions for supply chain optimization and real-world decision systems"
    },
    {
      year: "July 2018 - June 2023",
      title: "Ph.D. in Computer Science",
      institution: "Indian Institute of Technology Bombay",
      icon: GraduationCap,
      description: "Dissertation: Multi-Agent Reinforcement Learning and Decision Making"
    },
    {
      year: "May 2020 - Aug 2020",
      title: "Summer Research Intern",
      institution: "IBM Research",
      icon: Award,
      description: "Contributed to research on interpretable feature selection and ML applications"
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
            {/* Biography with Photo */}
            <div className="animate-fade-in-up space-y-6">
              {/* Profile Photo Card */}
              <div className="card-elegant">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={profileImage}
                    alt="Researcher profile photograph"
                    className="w-48 h-48 rounded-xl object-cover border-2 border-border mb-4 shadow-card"
                    width="192"
                    height="192"
                    loading="lazy"
                    decoding="async"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">Dr. Prashant Trivedi</h3>
                  <p className="text-sm text-muted-foreground">Postdoctoral Researcher</p>
                  <p className="text-sm text-muted-foreground">University of Central Florida</p>
                </div>
              </div>
              
              <div className="card-elegant">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Research Focus</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Currently a Postdoctoral Researcher at the University of Central Florida, working under 
                    the guidance of Dr. Amrit Singh Bedi. My research focuses on advancing Multi-Agent 
                    Reinforcement Learning (MARL), optimization techniques, and data privacy in decentralized 
                    learning systems.
                  </p>
                  <p>
                    I completed my Ph.D. at the Indian Institute of Technology Bombay, where my dissertation 
                    explored Multi-Agent Reinforcement Learning and Decision Making. Previously, I served as 
                    a Machine Learning Scientist at One Network Enterprises, applying cutting-edge ML 
                    solutions to supply chain optimization and complex decision systems.
                  </p>
                  <p>
                    My research philosophy centers on bridging theoretical foundations with practical 
                    applications, developing novel algorithms for non-Euclidean optimization, federated 
                    learning, and cooperative game theory to solve real-world challenges in artificial 
                    intelligence and distributed systems.
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
