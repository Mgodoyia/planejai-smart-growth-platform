
import { AlertTriangle, Clock, TrendingDown, Users, ArrowRight, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PainPoints = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      problem: "Baixa conversão de leads",
      description: "Leads não acompanhados geram perda de 60% das oportunidades",
      solution: "CRM inteligente com automação de follow-up personalizado",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
      iconBg: "bg-red-100 group-hover:bg-red-500",
      iconColor: "text-red-600 group-hover:text-white",
      impact: "60% de perda",
      metric: "+45% conversão"
    },
    {
      icon: Clock,
      problem: "Pressão logística constante",
      description: "Atrasos na produção e montagem afetam a satisfação do cliente",
      solution: "Cronograma automatizado com alertas inteligentes e previsibilidade",
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50",
      iconBg: "bg-amber-100 group-hover:bg-amber-500",
      iconColor: "text-amber-600 group-hover:text-white",
      impact: "Atrasos frequentes",
      metric: "-30% tempo"
    },
    {
      icon: AlertTriangle,
      problem: "Falta de previsibilidade",
      description: "Dificuldade para prever demanda e otimizar recursos",
      solution: "Analytics preditivos com IA para planejamento estratégico",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      iconBg: "bg-purple-100 group-hover:bg-purple-500",
      iconColor: "text-purple-600 group-hover:text-white",
      impact: "Recursos desperdiçados",
      metric: "+85% precisão"
    },
    {
      icon: Users,
      problem: "Gestão manual de equipes",
      description: "Coordenação ineficiente entre vendas, produção e montagem",
      solution: "Plataforma integrada com visão 360° de todos os processos",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100 group-hover:bg-blue-500",
      iconColor: "text-blue-600 group-hover:text-white",
      impact: "Descoordenação",
      metric: "+70% eficiência"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-6 animate-fadeIn">
            <AlertTriangle className="w-4 h-4" />
            Problemas Críticos
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 animate-slideUp leading-tight">
            Desafios que{" "}
            <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text">
                Impedem
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-full opacity-30"></div>
            </span>
            {" "}o Crescimento
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slideUp delay-200 px-4">
            Identifique os obstáculos que limitam o potencial da sua loja e descubra como nossa{" "}
            <span className="font-semibold text-blue-600">IA revoluciona</span> cada processo
          </p>
          
          {/* Stats Preview */}
          <div className="flex justify-center items-center mt-8 animate-slideUp delay-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-200/50">
              <p className="text-sm text-gray-600">
                <span className="font-bold text-red-600">78%</span> das lojas enfrentam estes desafios diariamente
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Pain Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${point.bgColor} animate-slideUp`}
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-100 transition-all duration-500 p-[2px] rounded-xl`}>
                <div className="bg-white rounded-lg h-full w-full"></div>
              </div>
              
              {/* Impact Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-md group-hover:bg-red-600 transition-colors">
                  {point.impact}
                </div>
              </div>
              
              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  {/* Enhanced Icon */}
                  <div className="relative">
                    <div className={`p-4 ${point.iconBg} rounded-2xl transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110`}>
                      <point.icon className={`w-7 h-7 ${point.iconColor} transition-all duration-300`} />
                    </div>
                    
                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 ${point.iconBg} rounded-2xl opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500`}></div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Problem Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors leading-tight">
                      {point.problem}
                    </h3>
                    
                    {/* Problem Description */}
                    <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                      {point.description}
                    </p>
                    
                    {/* Enhanced Solution Box */}
                    <div className={`relative p-5 bg-gradient-to-r ${point.color} rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-1 bg-white/20 rounded-lg flex-shrink-0">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                            {point.solution}
                          </p>
                        </div>
                        
                        {/* Metrics */}
                        <div className="flex items-center justify-between">
                          <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                            <span className="text-white text-xs font-bold">{point.metric}</span>
                          </div>
                          
                          <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                            <span className="text-sm font-medium mr-2">Ver solução</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative Elements */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${point.color} rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl`}></div>
              <div className={`absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br ${point.color} rounded-full opacity-0 group-hover:opacity-5 transition-all duration-700 blur-xl`}></div>
            </Card>
          ))}
        </div>
        
        {/* Enhanced Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 animate-slideUp delay-500">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Pronto para resolver estes desafios?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Nossa IA transforma cada problema em uma oportunidade de crescimento
            </p>
            
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Descobrir as Soluções</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
