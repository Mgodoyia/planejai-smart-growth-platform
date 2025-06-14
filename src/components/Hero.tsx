
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Header */}
      <header className="container mx-auto px-6 pt-8 relative z-10">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800/30 backdrop-blur-sm">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Demo Gratuita
            </Button>
          </div>
        </nav>
      </header>
      
      <div className="container mx-auto px-6 pt-20 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <Badge className="mb-8 bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              Inteligência Artificial para Móveis Planejados
            </Badge>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Gestão Inteligente
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Plataforma completa com IA para aumentar vendas, otimizar tempo e encantar clientes no mercado de móveis planejados
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Solicitar Demo Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-800/30 px-8 py-4 text-lg rounded-lg backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="text-blue-200 text-sm">
              <p className="mb-4">Já transformou mais de 500+ lojas no Brasil</p>
              <div className="flex flex-wrap gap-6 opacity-60">
                <span className="font-semibold">✓ Sem fidelidade</span>
                <span className="font-semibold">✓ Implementação em 7 dias</span>
                <span className="font-semibold">✓ Suporte 24/7</span>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-4 border-b border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-blue-200">Dashboard Planej.AI</div>
                </div>
                <img 
                  src="/lovable-uploads/469cab76-aac0-490c-adbe-7ba31efadedb.png" 
                  alt="Planej.AI Login Screen"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
