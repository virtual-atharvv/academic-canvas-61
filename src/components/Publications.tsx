import { ExternalLink, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Noise Robust Core-Stable Coalitions of Hedonic Games",
      venue: "Conference Publication",
      year: "2023",
      type: "Conference",
      abstract: "This work addresses the challenge of forming stable coalitions in hedonic games under noisy preferences, developing robust algorithms that maintain core-stability properties even with preference uncertainty.",
      link: "https://scholar.google.com/citations?user=YOUR_ID",
      featured: true
    },
    {
      title: "Interpretable Feature Subset Selection: A Shapley Value Based Approach",
      venue: "Research Publication",
      year: "2021",
      type: "Conference",
      abstract: "We introduce a novel feature selection framework leveraging Shapley values to identify interpretable feature subsets, providing both theoretical guarantees and practical applications in explainable AI.",
      link: "https://scholar.google.com/citations?user=YOUR_ID",
      featured: true
    },
    {
      title: "Multi-Agent Natural Actor-Critic Reinforcement Learning Algorithms",
      venue: "Conference Publication",
      year: "2022",
      type: "Conference",
      abstract: "This paper presents convergence analysis and sample complexity bounds for multi-agent natural actor-critic algorithms in cooperative multi-agent systems with function approximation.",
      link: "https://scholar.google.com/citations?user=YOUR_ID",
      featured: true
    },
    {
      title: "Multi-Agent Congestion Cost Minimization with Linear Function Approximations",
      venue: "Research Publication",
      year: "2022",
      type: "Conference",
      abstract: "We develop efficient algorithms for multi-agent congestion cost minimization using linear function approximations, with applications to traffic routing and resource allocation.",
      link: "https://scholar.google.com/citations?user=YOUR_ID",
      featured: false
    },
    {
      title: "Federated Learning and Data Valuation in Decentralized Systems",
      venue: "Journal Publication",
      year: "2023",
      type: "Journal",
      abstract: "Exploring privacy-preserving mechanisms for federated learning with fair data valuation across distributed agents in collaborative learning environments.",
      link: "https://scholar.google.com/citations?user=YOUR_ID",
      featured: false
    },
    {
      title: "Optimization Techniques for Non-Euclidean Spaces in Deep Learning",
      venue: "Conference Publication",
      year: "2021",
      type: "Conference",
      abstract: "Novel optimization algorithms on Riemannian manifolds with applications to neural network training under geometric constraints and structured parameter spaces.",
      link: "https://scholar.google.com/citations?user=YOUR_ID",
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
