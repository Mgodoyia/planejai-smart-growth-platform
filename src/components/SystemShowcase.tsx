
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SystemShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Veja o Sistema em Ação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interface intuitiva e poderosa que revoluciona a gestão de móveis planejados
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              Dashboard Principal
            </Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Visão 360° do seu negócio
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Acompanhe vendas, leads, projetos e performance em tempo real com nosso dashboard inteligente.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Métricas de vendas em tempo real
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Controle de leads e conversões
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Cronograma de projetos ativos
              </li>
            </ul>
          </div>
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/5074b9a8-ffd9-4a10-8bca-f65b466e8ff8.png" 
                alt="Dashboard Planej.AI - Visão geral do sistema"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Card className="shadow-2xl border-0 overflow-hidden order-2 lg:order-1">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/309cfa6e-dd96-426b-9064-cf6fad478b10.png" 
                alt="Kanban Planej.AI - Gestão visual de projetos"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          <div className="order-1 lg:order-2">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Kanban Visual
            </Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Gestão visual de projetos
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Organize clientes e projetos em quadros visuais intuitivos, desde novos leads até projetos concluídos.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Arrastar e soltar projetos entre etapas
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Tags de prioridade e status
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Valores e prazos sempre visíveis
              </li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              Chat com IA
            </Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              WhatsApp integrado com IA
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Chat inteligente que sugere respostas automáticas e mantém histórico completo de conversas.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Sugestões inteligentes de resposta
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Histórico completo de conversas
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Integração direta com WhatsApp
              </li>
            </ul>
          </div>
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/c5bc9ee7-3c10-42a6-ba7c-11567b997b8f.png" 
                alt="Chat Planej.AI - WhatsApp integrado com IA"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="shadow-2xl border-0 overflow-hidden order-2 lg:order-1">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/ec09b314-caf3-426e-bf68-94732eb57378.png" 
                alt="Analytics Planej.AI - Relatórios inteligentes"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
          <div className="order-1 lg:order-2">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              Analytics Inteligente
            </Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Relatórios que geram insights
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Análises detalhadas de performance com gráficos interativos e métricas que importam.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Gráficos interativos em tempo real
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Análise de origem de leads
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Previsões baseadas em IA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemShowcase;
