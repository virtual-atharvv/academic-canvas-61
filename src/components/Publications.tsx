import { ExternalLink, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Convergence Analysis of Multi-Agent Reinforcement Learning in Non-Cooperative Games",
      venue: "International Conference on Machine Learning (ICML)",
      year: "2024",
      type: "Conference",
      abstract: "We present a comprehensive theoretical analysis of convergence properties in multi-agent reinforcement learning systems under non-cooperative settings, providing novel insights into equilibrium strategies.",
      link: "#",
      featured: true
    },
    {
      title: "Federated Valuation Mechanisms for Cooperative Machine Learning",
      venue: "Neural Information Processing Systems (NeurIPS)",
      year: "2023",
      type: "Conference",
      abstract: "This work introduces innovative valuation mechanisms for federated learning environments, addressing fairness and incentive compatibility in distributed model training scenarios.",
      link: "#",
      featured: true
    },
    {
      title: "Optimization on Riemannian Manifolds for Deep Learning",
      venue: "Journal of Machine Learning Research (JMLR)",
      year: "2023",
      type: "Journal",
      abstract: "We develop novel optimization algorithms specifically designed for non-Euclidean spaces, demonstrating superior performance in deep learning applications with geometric constraints.",
      link: "#",
      featured: false
    },
    {
      title: "Hedonic Games with Dynamic Coalition Formation in Multi-Agent Systems",
      venue: "International Joint Conference on Artificial Intelligence (IJCAI)",
      year: "2022",
      type: "Conference",
      abstract: "An exploration of dynamic coalition formation mechanisms in hedonic games, with applications to autonomous agent coordination and resource allocation problems.",
      link: "#",
      featured: false
    },
    {
      title: "Sample Complexity Bounds for Multi-Agent Reinforcement Learning",
      venue: "Conference on Learning Theory (COLT)",
      year: "2022",
      type: "Conference",
      abstract: "We establish theoretical sample complexity bounds for various multi-agent learning algorithms, providing guidance for practical algorithm selection and design.",
      link: "#",
      featured: false
    },
    {
      title: "Cooperative Learning in Decentralized Networks: A Game-Theoretic Approach",
      venue: "IEEE Transactions on Neural Networks and Learning Systems",
      year: "2021",
      type: "Journal",
      abstract: "This paper presents a game-theoretic framework for understanding cooperative learning dynamics in decentralized networks, with applications to distributed optimization.",
      link: "#",
      featured: false
    }
  ];

  return (
    <section id="publications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-heading">Publications</h2>
            <p className="section-subheading">
              Peer-reviewed research contributions to the field of machine learning and artificial intelligence
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className={`card-elegant animate-fade-in-up ${pub.featured ? 'border-2 border-primary/20' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        pub.featured ? 'bg-primary/20' : 'bg-secondary'
                      }`}>
                        {pub.featured ? (
                          <Award className="w-5 h-5 text-primary" />
                        ) : (
                          <FileText className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                          {pub.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="font-medium text-primary">{pub.venue}</span>
                          <span>•</span>
                          <span>{pub.year}</span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-secondary rounded text-xs font-medium">
                            {pub.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Abstract */}
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group"
                      onClick={() => window.open(pub.link, '_blank')}
                    >
                      View Publication
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Links to profiles */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">View complete publication list on:</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="group">
                Google Scholar
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="group">
                ResearchGate
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
