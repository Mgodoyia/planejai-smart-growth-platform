
import { Button } from "@/components/ui/button";
import { Calendar, Download } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Transforme sua Operação com IA
          </h2>
          <p className="text-xl text-blue-100 mb-4">
            Leve sua loja de móveis planejados para o próximo nível
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            Descubra como nossa plataforma pode revolucionar seu negócio. 
            Implementação em 30 dias com 90 dias de acompanhamento semanal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Calendar className="mr-2 w-5 h-5" />
              Agendar Sessão de Estudo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-10 py-4 text-lg rounded-lg backdrop-blur-sm">
              <Download className="mr-2 w-5 h-5" />
              Baixar E-book Gratuito
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-100 mb-2">30 dias</div>
              <div className="text-blue-200">Implementação completa</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-100 mb-2">90 dias</div>
              <div className="text-blue-200">Acompanhamento semanal</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-100 mb-2">24/7</div>
              <div className="text-blue-200">Suporte especializado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
