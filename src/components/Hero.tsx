
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-8 bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-colors">
            <Sparkles className="w-4 h-4 mr-2" />
            Inteligência Artificial para Móveis Planejados
          </Badge>
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            Gestão Inteligente
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Plataforma completa com IA para aumentar vendas, otimizar tempo e encantar clientes no mercado de móveis planejados
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Solicitar Demo Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-800/30 px-8 py-4 text-lg rounded-lg backdrop-blur-sm">
              Fale com Especialista
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-blue-200 text-sm">
            <p className="mb-4">Já transformou mais de 500+ lojas no Brasil</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="font-semibold">✓ Sem fidelidade</span>
              <span className="font-semibold">✓ Implementação em 7 dias</span>
              <span className="font-semibold">✓ Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Dashboard Preview */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="w-80 h-48 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="text-xs text-blue-200">Dashboard Planej.AI</div>
          </div>
          <div className="space-y-3">
            <div className="w-full h-2 bg-blue-500/30 rounded"></div>
            <div className="w-2/3 h-2 bg-green-500/30 rounded"></div>
            <div className="w-3/4 h-2 bg-purple-500/30 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
