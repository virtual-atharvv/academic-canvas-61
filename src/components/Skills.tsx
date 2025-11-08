import { Code, Layers, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & Optimization",
      icon: Layers,
      skills: [
        { name: "Reinforcement Learning", level: 95 },
        { name: "Deep Learning", level: 90 },
        { name: "Optimization Theory", level: 92 },
        { name: "Game Theory", level: 88 },
        { name: "Statistical Learning", level: 85 }
      ]
    },
    {
      title: "Programming & Tools",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 92 },
        { name: "JAX", level: 88 },
        { name: "TensorFlow", level: 85 },
        { name: "NumPy/SciPy", level: 90 }
      ]
    },
    {
      title: "Research & Development",
      icon: Wrench,
      skills: [
        { name: "Algorithm Design", level: 93 },
        { name: "Theoretical Analysis", level: 90 },
        { name: "Experimental Design", level: 88 },
        { name: "Technical Writing", level: 87 },
        { name: "Collaborative Research", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">Skills & Expertise</h2>
            <p className="section-subheading">
              Technical proficiencies and research capabilities developed through years of academic work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="card-elegant animate-fade-in-up"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional tools and technologies */}
          <div className="mt-12 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6 text-foreground">Additional Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "Docker", "Linux", "CUDA", "Jupyter", "LaTeX", "Matplotlib", "Scikit-learn", "OpenAI Gym", "Ray RLlib", "Weights & Biases"].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-card rounded-lg text-sm font-medium text-foreground border border-border hover:border-primary transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
