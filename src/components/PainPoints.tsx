
import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PainPoints = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      problem: "Baixa conversão de leads",
      description: "Leads não acompanhados geram perda de 60% das oportunidades",
      solution: "CRM inteligente com automação de follow-up personalizado"
    },
    {
      icon: Clock,
      problem: "Pressão logística constante",
      description: "Atrasos na produção e montagem afetam a satisfação do cliente",
      solution: "Cronograma automatizado com alertas inteligentes e previsibilidade"
    },
    {
      icon: AlertTriangle,
      problem: "Falta de previsibilidade",
      description: "Dificuldade para prever demanda e otimizar recursos",
      solution: "Analytics preditivos com IA para planejamento estratégico"
    },
    {
      icon: Users,
      problem: "Gestão manual de equipes",
      description: "Coordenação ineficiente entre vendas, produção e montagem",
      solution: "Plataforma integrada com visão 360° de todos os processos"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Desafios que Impedem o Crescimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identifique problemas comuns que limitam o potencial da sua loja e descubra como nossa IA resolve cada um deles
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500 hover:border-l-blue-500">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-100 group-hover:bg-blue-100 rounded-lg transition-colors">
                    <point.icon className="w-6 h-6 text-red-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {point.problem}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {point.description}
                    </p>
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500">
                      <p className="text-blue-800 font-medium">
                        ✓ Solução: {point.solution}
                      </p>
                    </div>
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
