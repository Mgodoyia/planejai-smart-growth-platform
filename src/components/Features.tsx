import { 
  MessageSquare, 
  Calendar, 
  Users, 
  BarChart3, 
  Bell, 
  Cog 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "CRM e Automação de Leads",
      description: "Capture, qualifique e converta leads automaticamente com IA que personaliza cada interação",
      image: "/lovable-uploads/5074b9a8-ffd9-4a10-8bca-f65b466e8ff8.png"
    },
    {
      icon: MessageSquare,
      title: "Chat Integrado com IA",
      description: "WhatsApp Business integrado com sugestões inteligentes de resposta e automação de atendimento",
      image: "/lovable-uploads/c5bc9ee7-3c10-42a6-ba7c-11567b997b8f.png"
    },
    {
      icon: Calendar,
      title: "Gestão de Cronograma",
      description: "Cronogramas automatizados com alertas inteligentes para cada etapa do projeto",
      image: "/lovable-uploads/ff7cf315-a0cf-4e86-be03-1c07eeda443b.png"
    },
    {
      icon: Cog,
      title: "Kanban Visual de Projetos",
      description: "Acompanhe todos os projetos em tempo real com interface visual intuitiva",
      image: "/lovable-uploads/309cfa6e-dd96-426b-9064-cf6fad478b10.png"
    },
    {
      icon: BarChart3,
      title: "Analytics e Relatórios IA",
      description: "Dashboards inteligentes com insights preditivos e análises de performance",
      image: "/lovable-uploads/ec09b314-caf3-426e-bf68-94732eb57378.png"
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description: "Sistema proativo de alertas que antecipa problemas e oportunidades",
      image: "/lovable-uploads/4bcbda1d-52b2-49f7-ae90-b926514ce09b.png"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades Inteligentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma completa que revoluciona cada aspecto da sua operação com inteligência artificial
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
