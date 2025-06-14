
import { 
  MessageSquare, 
  Calendar, 
  Users, 
  BarChart3, 
  Bell, 
  Cog,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "CRM e Automação de Leads",
      description: "Capture, qualifique e converta leads automaticamente com IA que personaliza cada interação",
      image: "/lovable-uploads/5074b9a8-ffd9-4a10-8bca-f65b466e8ff8.png",
      color: "from-blue-500 to-cyan-500",
      stats: "45% mais conversões"
    },
    {
      icon: MessageSquare,
      title: "Chat Integrado com IA",
      description: "WhatsApp Business integrado com sugestões inteligentes de resposta e automação de atendimento",
      image: "/lovable-uploads/c5bc9ee7-3c10-42a6-ba7c-11567b997b8f.png",
      color: "from-green-500 to-emerald-500",
      stats: "24/7 disponível"
    },
    {
      icon: Calendar,
      title: "Gestão de Cronograma",
      description: "Cronogramas automatizados com alertas inteligentes para cada etapa do projeto",
      image: "/lovable-uploads/ff7cf315-a0cf-4e86-be03-1c07eeda443b.png",
      color: "from-purple-500 to-pink-500",
      stats: "30% mais rápido"
    },
    {
      icon: Cog,
      title: "Kanban Visual de Projetos",
      description: "Acompanhe todos os projetos em tempo real com interface visual intuitiva",
      image: "/lovable-uploads/309cfa6e-dd96-426b-9064-cf6fad478b10.png",
      color: "from-orange-500 to-red-500",
      stats: "100% visibilidade"
    },
    {
      icon: BarChart3,
      title: "Analytics e Relatórios IA",
      description: "Dashboards inteligentes com insights preditivos e análises de performance",
      image: "/lovable-uploads/ec09b314-caf3-426e-bf68-94732eb57378.png",
      color: "from-indigo-500 to-blue-500",
      stats: "Insights em tempo real"
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description: "Sistema proativo de alertas que antecipa problemas e oportunidades",
      image: "/lovable-uploads/4bcbda1d-52b2-49f7-ae90-b926514ce09b.png",
      color: "from-teal-500 to-cyan-500",
      stats: "Zero problemas perdidos"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Powered by AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Funcionalidades{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Inteligentes
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Uma plataforma completa que revoluciona cada aspecto da sua operação com inteligência artificial
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-xl`}>
                <div className="bg-white rounded-lg h-full w-full"></div>
              </div>
              
              {/* Image Section */}
              <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden rounded-t-xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    {feature.stats}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="relative z-10">
                <CardHeader className="pb-3 sm:pb-4 px-5 sm:px-6 lg:px-7">
                  <CardTitle className="text-xl sm:text-2xl text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-5 sm:px-6 lg:px-7 pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
