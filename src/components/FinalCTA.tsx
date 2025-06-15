
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5548996495426?text=Olá! Gostaria de agendar uma sessão de estudo sobre a Planej.AI', '_blank');
  };

  return (
    <section id="final-cta" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30"></div>
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-6 sm:top-10 left-4 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 w-32 h-32 sm:w-56 sm:h-56 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Headline */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-300" />
              <span className="text-blue-200 font-medium text-xs sm:text-sm">Transformação Digital Completa</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Transforme sua Operação com IA
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-4 sm:mb-6 font-light">
            Leve sua loja de móveis planejados para o <span className="text-blue-300 font-semibold">próximo nível</span>
          </p>
          
          <p className="text-lg sm:text-xl text-blue-200 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
            Descubra como nossa plataforma pode revolucionar seu negócio com implementação em 30 dias e 90 dias de acompanhamento semanal especializado.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group border-0 w-full sm:w-auto"
              onClick={openWhatsApp}
            >
              <Calendar className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Agendar Sessão de Estudo</span>
              <span className="sm:hidden">Sessão de Estudo</span>
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Link to="/ebook-ia">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
              >
                <BookOpen className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Aprender Tudo Sobre IA</span>
                <span className="sm:hidden">Aprender Sobre IA</span>
              </Button>
            </Link>
          </div>
          
          {/* Enhanced Statistics - Cards com mesmo tamanho */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
            {[
              { number: "30 dias", label: "Implementação completa", icon: CheckCircle },
              { number: "90 dias", label: "Acompanhamento semanal", icon: Calendar },
              { number: "Suporte Premium", label: "Atendimento especializado", icon: Sparkles }
            ].map((stat, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-center items-center min-h-[180px] sm:min-h-[200px]">
                  <div className="mb-3 sm:mb-4">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300 mx-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text mb-2 sm:mb-3 text-center">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium text-base sm:text-lg text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
