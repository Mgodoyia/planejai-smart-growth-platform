import { TrendingUp, Clock, DollarSign, Truck, Heart, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      metric: "+45%",
      title: "Taxa de Conversão",
      description: "Aumento médio na conversão de leads em vendas"
    },
    {
      icon: Clock,
      metric: "-30%",
      title: "Ciclo de Vendas",
      description: "Redução no tempo médio de fechamento"
    },
    {
      icon: DollarSign,
      metric: "-25%",
      title: "Custo de Aquisição",
      description: "Redução no CAC com automação inteligente"
    },
    {
      icon: Truck,
      metric: "+35%",
      title: "Velocidade de Entrega",
      description: "Aceleração na produção e montagem"
    },
    {
      icon: Heart,
      metric: "95%",
      title: "Satisfação do Cliente",
      description: "NPS médio dos clientes que usam a plataforma"
    },
    {
      icon: Zap,
      metric: "10x",
      title: "Produtividade",
      description: "Aumento na eficiência operacional"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Resultados Comprovados
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Métricas reais de empresas que já transformaram seus negócios com a Planej.AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 mx-auto w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <benefit.icon className="w-10 h-10 text-blue-300" />
              </div>
              <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text mb-2">
                {benefit.metric}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
