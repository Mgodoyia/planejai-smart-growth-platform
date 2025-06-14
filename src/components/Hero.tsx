
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Sparkles, Menu, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Logo from "./Logo";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Funcionalidades", href: "#features" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Tecnologia", href: "#tech-stack" }
  ];

  const scrollToFinalCTA = () => {
    const finalCTA = document.getElementById('final-cta');
    if (finalCTA) {
      finalCTA.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5548996495426?text=Olá! Gostaria de agendar uma sessão de estudo sobre a Planej.AI', '_blank');
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 md:right-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
      
      {/* Header with Navigation */}
      <header className="container mx-auto px-4 sm:px-6 pt-6 md:pt-8 relative z-10">
        <nav className="flex items-center justify-between">
          <Logo className="scale-110 sm:scale-125 md:scale-150 hover:scale-125 sm:hover:scale-150 md:hover:scale-160 transition-transform duration-300" />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-blue-100 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-blue-100 hover:text-white transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
              onClick={openWhatsApp}
            >
              <Sparkles className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Sessão de Estudo</span>
              <span className="sm:hidden">Estudo</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl animate-slideUp">
            <div className="p-4 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-blue-100 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
      
      <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="lg:pr-12 text-center lg:text-left">
            {/* Enhanced Badge */}
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-400/30 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500 backdrop-blur-sm px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium">
              <div className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">Inteligência Artificial para Móveis Planejados</span>
              <span className="sm:hidden">IA para Móveis Planejados</span>
            </Badge>
            
            {/* Enhanced Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight animate-fadeIn">
              Gestão <span className="relative text-white">
                Completa
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-200 mb-6 sm:mb-8 animate-slideUp">
              para lojas de móveis planejados
            </h2>
            
            {/* Enhanced Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 leading-relaxed animate-slideUp delay-200 max-w-2xl mx-auto lg:mx-0">
              Plataforma completa com <span className="text-blue-300 font-semibold">IA avançada</span> para aumentar vendas, otimizar tempo e encantar clientes no mercado de móveis planejados
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 animate-slideUp delay-300 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
                onClick={scrollToFinalCTA}
              >
                <Play className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Ver Demonstração
                <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="text-blue-200 text-sm animate-slideUp delay-400">
              <p className="mb-4 sm:mb-6 text-base sm:text-lg font-medium text-blue-100">Revolucionando a gestão de móveis planejados no Brasil</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="font-semibold text-green-300 text-xs sm:text-sm">Implementação em 30 dias</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200 flex-shrink-0"></div>
                  <span className="font-semibold text-blue-300 text-xs sm:text-sm">90 dias de acompanhamento</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10 sm:col-span-2 lg:col-span-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400 flex-shrink-0"></div>
                  <span className="font-semibold text-purple-300 text-xs sm:text-sm">Suporte especializado</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Login Screen Preview */}
          <div className="relative animate-slideUp delay-500 mt-8 lg:mt-0">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl animate-pulse"></div>
            <Card className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-3 sm:p-6 border-b border-white/20 bg-gradient-to-r from-white/5 to-transparent">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full shadow-lg"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full shadow-lg"></div>
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200 font-medium bg-white/10 px-2 sm:px-3 py-1 rounded-full">
                    <span className="hidden sm:inline">Tela de Login Planej.AI</span>
                    <span className="sm:hidden">Planej.AI</span>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/469cab76-aac0-490c-adbe-7ba31efadedb.png" 
                    alt="Planej.AI Login Screen"
                    className="w-full h-auto hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
