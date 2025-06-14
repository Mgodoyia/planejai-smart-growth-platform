
import { AlertTriangle, Clock, TrendingDown, Users, ArrowRight, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PainPoints = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      problem: "Baixa conversão de leads",
      description: "Leads não acompanhados geram perda de 60% das oportunidades de vendas",
      solution: "CRM inteligente com automação de follow-up personalizado e IA preditiva",
      color: "from-red-500 to-rose-600",
      bgColor: "from-red-50/80 to-rose-50/80",
      iconBg: "bg-red-100 group-hover:bg-red-500",
      iconColor: "text-red-600 group-hover:text-white",
      impact: "60% de perda",
      metric: "+45% conversão",
      tag: "Vendas"
    },
    {
      icon: Clock,
      problem: "Pressão logística constante",
      description: "Atrasos na produção e montagem afetam diretamente a satisfação do cliente",
      solution: "Cronograma automatizado com alertas inteligentes e previsibilidade total",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50/80 to-orange-50/80",
      iconBg: "bg-amber-100 group-hover:bg-amber-500",
      iconColor: "text-amber-600 group-hover:text-white",
      impact: "Atrasos frequentes",
      metric: "-30% tempo",
      tag: "Logística"
    },
    {
      icon: AlertTriangle,
      problem: "Falta de previsibilidade",
      description: "Dificuldade para prever demanda e otimizar recursos disponíveis",
      solution: "Analytics preditivos com IA para planejamento estratégico preciso",
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50/80 to-purple-50/80",
      iconBg: "bg-violet-100 group-hover:bg-violet-500",
      iconColor: "text-violet-600 group-hover:text-white",
      impact: "Recursos desperdiçados",
      metric: "+85% precisão",
      tag: "Estratégia"
    },
    {
      icon: Users,
      problem: "Gestão manual de equipes",
      description: "Coordenação ineficiente entre vendas, produção e montagem",
      solution: "Plataforma integrada com visão 360° de todos os processos",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50/80 to-indigo-50/80",
      iconBg: "bg-blue-100 group-hover:bg-blue-500",
      iconColor: "text-blue-600 group-hover:text-white",
      impact: "Descoordenação",
      metric: "+70% eficiência",
      tag: "Gestão"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-red-100 to-orange-100 border border-red-200/50 text-red-700 rounded-2xl text-sm font-bold mb-8 animate-fadeIn shadow-lg backdrop-blur-sm">
            <div className="p-1 bg-red-200/50 rounded-lg">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <span>Problemas Críticos Identificados</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-8 animate-slideUp leading-[0.9] tracking-tight">
            Desafios que{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text">
                Limitam
              </span>
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-red-600/30 via-orange-500/30 to-red-500/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-500 rounded-full"></div>
            </span>
            <br />
            seu{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Potencial
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-slideUp delay-200 font-light">
            Identifique os obstáculos que impedem seu crescimento e descubra como nossa{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              IA revoluciona
            </span>{" "}
            cada processo
          </p>
          
          {/* Enhanced Stats Preview */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 animate-slideUp delay-300">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-xl">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-red-600">78%</p>
                  <p className="text-sm text-gray-600">das lojas enfrentam estes desafios</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-xl">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-green-600">+60%</p>
                  <p className="text-sm text-gray-600">melhoria média com IA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Pain Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-gradient-to-br ${point.bgColor} backdrop-blur-sm animate-slideUp hover:scale-[1.02]`}
              style={{ animationDelay: `${index * 150 + 500}ms` }}
            >
              {/* Enhanced Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-100 transition-all duration-700 p-[3px] rounded-2xl`}>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl h-full w-full"></div>
              </div>
              
              {/* Category Tag */}
              <div className="absolute top-6 right-6 z-20">
                <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold rounded-full shadow-lg border border-gray-200/50">
                  {point.tag}
                </div>
              </div>
              
              {/* Impact Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg group-hover:bg-red-600 transition-colors flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  {point.impact}
                </div>
              </div>
              
              <CardContent className="p-8 sm:p-10 relative z-10 pt-20">
                <div className="flex items-start space-x-6">
                  {/* Enhanced Icon */}
                  <div className="relative flex-shrink-0">
                    <div className={`p-5 ${point.iconBg} rounded-3xl transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110`}>
                      <point.icon className={`w-8 h-8 ${point.iconColor} transition-all duration-500`} />
                    </div>
                    
                    {/* Multiple Pulse Effects */}
                    <div className={`absolute inset-0 ${point.iconBg} rounded-3xl opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`}></div>
                    <div className={`absolute inset-0 ${point.iconBg} rounded-3xl opacity-0 group-hover:opacity-10 group-hover:scale-200 transition-all duration-1000 delay-200`}></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Problem Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors leading-tight">
                      {point.problem}
                    </h3>
                    
                    {/* Problem Description */}
                    <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
                      {point.description}
                    </p>
                    
                    {/* Enhanced Solution Box */}
                    <div className={`relative p-6 bg-gradient-to-br ${point.color} rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3Ccircle cx='35' cy='35' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundSize: '40px 40px'
                        }}></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-5">
                          <div className="p-2 bg-white/25 backdrop-blur-sm rounded-xl flex-shrink-0 group-hover:bg-white/35 transition-colors">
                            <Zap className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-white font-bold text-base sm:text-lg leading-tight">
                            {point.solution}
                          </p>
                        </div>
                        
                        {/* Enhanced Metrics */}
                        <div className="flex items-center justify-between">
                          <div className="px-4 py-2 bg-white/25 backdrop-blur-sm rounded-2xl border border-white/20">
                            <span className="text-white text-sm font-bold flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              {point.metric}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-white/90 group-hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 cursor-pointer">
                            <span className="text-sm font-bold mr-2">Ver Solução</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Enhanced Decorative Elements */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${point.color} rounded-full opacity-0 group-hover:opacity-10 transition-all duration-700 blur-2xl`}></div>
              <div className={`absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br ${point.color} rounded-full opacity-0 group-hover:opacity-5 transition-all duration-1000 blur-2xl`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
