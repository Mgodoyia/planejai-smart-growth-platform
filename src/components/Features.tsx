
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
      description: "Capture, qualifique e converta leads automaticamente com IA que personaliza cada interação"
    },
    {
      icon: MessageSquare,
      title: "Chat Integrado com IA",
      description: "WhatsApp Business integrado com sugestões inteligentes de resposta e automação de atendimento"
    },
    {
      icon: Calendar,
      title: "Gestão de Cronograma",
      description: "Cronogramas automatizados com alertas inteligentes para cada etapa do projeto"
    },
    {
      icon: Cog,
      title: "Kanban Visual de Projetos",
      description: "Acompanhe todos os projetos em tempo real com interface visual intuitiva"
    },
    {
      icon: BarChart3,
      title: "Analytics e Relatórios IA",
      description: "Dashboards inteligentes com insights preditivos e análises de performance"
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description: "Sistema proativo de alertas que antecipa problemas e oportunidades"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
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
