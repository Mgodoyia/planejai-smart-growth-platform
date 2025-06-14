
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Header Section - Mais compacto e eficiente */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 border border-red-200/50 text-red-700 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Problemas Críticos Identificados
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Desafios que{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text">
                Limitam
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>
            </span>
            <br />
            seu{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Potencial
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Identifique os obstáculos que impedem seu crescimento e descubra como nossa{" "}
            <span className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              IA revoluciona
            </span>{" "}
            cada processo
          </p>
          
          {/* Stats compactos */}
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-red-600">
              <div className="p-1.5 bg-red-100 rounded-lg">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <span className="text-2xl font-bold">78%</span>
                <span className="text-sm text-gray-600 ml-1">das lojas enfrentam</span>
              </div>
            </div>
            
            <div className="w-px h-8 bg-gray-300"></div>
            
            <div className="flex items-center gap-2 text-green-600">
              <div className="p-1.5 bg-green-100 rounded-lg">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-2xl font-bold">+60%</span>
                <span className="text-sm text-gray-600 ml-1">melhoria com IA</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grid de problemas - Reorganizado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${point.bgColor} backdrop-blur-sm`}
            >
              {/* Header com tags e métricas */}
              <div className="flex justify-between items-start p-6 pb-4">
                <div className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full">
                  {point.tag}
                </div>
                <div className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  {point.impact}
                </div>
              </div>
              
              <CardContent className="px-6 pb-6">
                <div className="flex items-start gap-4 mb-6">
                  {/* Ícone */}
                  <div className={`p-3 ${point.iconBg} rounded-2xl transition-all duration-300 flex-shrink-0`}>
                    <point.icon className={`w-6 h-6 ${point.iconColor} transition-all duration-300`} />
                  </div>
                  
                  <div className="flex-1">
                    {/* Título do problema */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {point.problem}
                    </h3>
                    
                    {/* Descrição */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
                
                {/* Solução - Design mais limpo */}
                <div className={`p-5 bg-gradient-to-br ${point.color} rounded-xl shadow-md relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-1.5 bg-white/25 backdrop-blur-sm rounded-lg">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm">Solução IA</span>
                    </div>
                    
                    <p className="text-white/95 text-sm mb-4 leading-relaxed">
                      {point.solution}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20">
                        <span className="text-white text-sm font-semibold">
                          {point.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background pattern sutil */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>
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
