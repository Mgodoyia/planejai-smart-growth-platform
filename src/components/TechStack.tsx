
import { Server, Brain, Smartphone, BarChart3, Shield, Zap, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techCategories = [
    {
      icon: Server,
      category: "Backend Robusto",
      technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
      description: "Infraestrutura escalável e segura",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Brain,
      category: "Inteligência Artificial",
      technologies: ["OpenAI GPT", "Machine Learning", "Visão Computacional", "NLP"],
      description: "IA avançada para automação inteligente",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Smartphone,
      category: "Integrações",
      technologies: ["WhatsApp API", "Facebook", "Google Ads", "CRM's", "ERP's"],
      description: "Conecta com suas ferramentas atuais",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart3,
      category: "Analytics & BI",
      technologies: ["Power BI", "Tableau", "Google Analytics", "Metabase"],
      description: "Dashboards e relatórios avançados",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Shield,
      category: "Segurança",
      technologies: ["SSL", "Criptografia", "LGPD", "ISO 27001", "Backup"],
      description: "Máxima proteção dos seus dados",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Zap,
      category: "Performance",
      technologies: ["CDN", "Cache", "Load Balancing", "99.9% Uptime"],
      description: "Velocidade e disponibilidade garantidas",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-800 font-semibold text-sm">Stack Tecnológico Avançado</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tecnologia de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ponta
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stack tecnológico robusto e moderno que garante{" "}
            <span className="font-semibold text-blue-600">performance</span>,{" "}
            <span className="font-semibold text-purple-600">segurança</span> e{" "}
            <span className="font-semibold text-green-600">escalabilidade</span>{" "}
            para seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((tech, index) => (
            <div 
              key={index} 
              className="group relative animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
              
              <div className={`relative p-8 border border-gray-200 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:border-transparent h-full ${tech.bgColor} group-hover:bg-white backdrop-blur-sm`}>
                <div className="mb-6">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <tech.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {tech.category}
                  </h3>
                  
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((technology, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 font-medium px-3 py-1"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Trust Banner */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-green-800 font-bold text-lg">99.9% de Uptime</span>
                <span className="block text-green-600 text-sm">Disponibilidade Garantida</span>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-green-300"></div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-blue-800 font-bold text-lg">Conformidade LGPD</span>
                <span className="block text-blue-600 text-sm">Proteção Total de Dados</span>
              </div>
            </div>
            
            <div className="hidden lg:block w-px h-12 bg-green-300"></div>
            
            <div className="hidden lg:flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Badge className="w-6 h-6 text-white bg-transparent border-none p-0 text-lg font-bold">
                  ✓
                </Badge>
              </div>
              <div className="text-left">
                <span className="block text-purple-800 font-bold text-lg">ISO 27001</span>
                <span className="block text-purple-600 text-sm">Certificação Internacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
