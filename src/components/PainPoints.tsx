
import { AlertTriangle, Clock, TrendingDown, Users, Target, Zap } from "lucide-react";
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Gradient orbs for enhanced branding */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-100 via-orange-50 to-red-100 border border-red-200/60 text-red-700 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-red-100/50">
            <AlertTriangle className="w-4 h-4" />
            Problemas Críticos Identificados
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Desafios que{" "}
            <span className="text-gray-900">
              Limitam
            </span>{" "}
            seu{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text">
                Potencial
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full shadow-lg"></div>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
            Identifique os obstáculos que impedem seu crescimento e descubra como nossa{" "}
            <span className="font-semibold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text">
              IA revoluciona
            </span>{" "}
            cada processo com tecnologia de ponta
          </p>
          
          {/* Enhanced stats with branding colors - showing only 78% */}
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-3 text-red-600">
              <div className="p-2 bg-gradient-to-br from-red-100 to-red-50 rounded-xl shadow-md border border-red-200/50">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">78%</span>
                <span className="text-sm text-gray-600 ml-2 font-medium">das lojas enfrentam</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grid de problemas - Enhanced with branding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br ${point.bgColor} backdrop-blur-sm ring-1 ring-white/20`}
            >
              {/* Enhanced header with gradient effects */}
              <div className="flex justify-between items-start p-6 pb-4">
                <div className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold rounded-full shadow-sm border border-gray-200/50">
                  {point.tag}
                </div>
                <div className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg">
                  <AlertTriangle className="w-3 h-3" />
                  {point.impact}
                </div>
              </div>
              
              <CardContent className="px-6 pb-6">
                <div className="flex items-start gap-4 mb-6">
                  {/* Enhanced icon with gradient background */}
                  <div className={`p-3.5 ${point.iconBg} rounded-2xl transition-all duration-300 flex-shrink-0 shadow-md ring-1 ring-white/30`}>
                    <point.icon className={`w-6 h-6 ${point.iconColor} transition-all duration-300`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {point.problem}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
                
                {/* Enhanced solution card with branding */}
                <div className={`p-6 bg-gradient-to-br ${point.color} rounded-xl shadow-xl relative overflow-hidden ring-1 ring-white/20`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-white/30 backdrop-blur-sm rounded-xl border border-white/20 shadow-md">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-bold text-sm tracking-wide">Solução com IA</span>
                    </div>
                    
                    <p className="text-white/95 text-sm mb-5 leading-relaxed font-medium">
                      {point.solution}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="px-4 py-2 bg-white/25 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                        <span className="text-white text-sm font-bold">
                          {point.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
