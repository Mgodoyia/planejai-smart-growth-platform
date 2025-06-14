import { Server, Brain, Smartphone, BarChart3, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techCategories = [
    {
      icon: Server,
      category: "Backend Robusto",
      technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
      description: "Infraestrutura escalável e segura"
    },
    {
      icon: Brain,
      category: "Inteligência Artificial",
      technologies: ["OpenAI GPT", "Machine Learning", "Visão Computacional", "NLP"],
      description: "IA avançada para automação inteligente"
    },
    {
      icon: Smartphone,
      category: "Integrações",
      technologies: ["WhatsApp API", "Facebook", "Google Ads", "CRM's", "ERP's"],
      description: "Conecta com suas ferramentas atuais"
    },
    {
      icon: BarChart3,
      category: "Analytics & BI",
      technologies: ["Power BI", "Tableau", "Google Analytics", "Metabase"],
      description: "Dashboards e relatórios avançados"
    },
    {
      icon: Shield,
      category: "Segurança",
      technologies: ["SSL", "Criptografia", "LGPD", "ISO 27001", "Backup"],
      description: "Máxima proteção dos seus dados"
    },
    {
      icon: Zap,
      category: "Performance",
      technologies: ["CDN", "Cache", "Load Balancing", "99.9% Uptime"],
      description: "Velocidade e disponibilidade garantidas"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tecnologia de Ponta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stack tecnológico robusto e moderno que garante performance, segurança e escalabilidade para seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((tech, index) => (
            <div key={index} className="group">
              <div className="p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-blue-300 h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tech.category}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {tech.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-green-50 px-6 py-3 rounded-full">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="text-green-800 font-semibold">
              99.9% de Uptime Garantido • Conformidade LGPD • Certificação ISO 27001
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
