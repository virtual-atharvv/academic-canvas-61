const ResearchInterests = () => {
  const interests = [
    "Multi-Agent Reinforcement Learning",
    "Cooperative Game Theory",
    "Hedonic Games",
    "Coalition Formation",
    "Federated Learning",
    "Federated Valuation",
    "Non-Euclidean Optimization",
    "Riemannian Manifolds",
    "Deep Learning Theory",
    "Convergence Analysis",
    "Sample Complexity",
    "Distributed Systems",
    "Nash Equilibrium",
    "Mechanism Design",
    "Gradient Optimization",
    "Neural Architecture Search",
    "Transfer Learning",
    "Meta-Learning"
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">Research Interests</h2>
            <p className="section-subheading">
              Core areas of expertise and ongoing research directions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up">
            {interests.map((interest, index) => (
              <span 
                key={index}
                className="tag-research"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {interest}
              </span>
            ))}
          </div>

          {/* Research areas breakdown */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="card-elegant text-center animate-fade-in-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Multi-Agent Systems</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exploring reinforcement learning, game theory, and coordination mechanisms in systems with multiple intelligent agents
              </p>
            </div>

            <div className="card-elegant text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Optimization Theory</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Developing novel algorithms for optimization on non-Euclidean spaces with applications to deep learning
              </p>
            </div>

            <div className="card-elegant text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Distributed Learning</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Investigating federated learning, valuation mechanisms, and fairness in decentralized machine learning systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
