
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      company: "MóveisPlus Design",
      author: "Carlos Silva",
      role: "Diretor Comercial",
      content: "Em 3 meses, nossa conversão aumentou 28% e reduzimos o tempo de produção em 20%. A IA da Planej.AI realmente revolucionou nossa operação.",
      metrics: ["+28% conversão", "-20% tempo produção"],
      rating: 5
    },
    {
      company: "Ambientes Premium",
      author: "Maria Santos",
      role: "CEO",
      content: "O sistema de automação de leads é impressionante. Não perdemos mais nenhuma oportunidade e nossa equipe foca no que realmente importa: vender.",
      metrics: ["+45% leads qualificados", "95% satisfação cliente"],
      rating: 5
    },
    {
      company: "Design Interiores Brasil",
      author: "Roberto Lima",
      role: "Sócio-Fundador",
      content: "A integração com WhatsApp e os insights preditivos nos deram uma vantagem competitiva absurda. ROI de 300% em 6 meses.",
      metrics: ["300% ROI", "-35% CAC"],
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Empresários que já transformaram seus negócios e alcançaram resultados extraordinários
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg h-full">
              <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {testimonial.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold">
                      {metric}
                    </span>
                  ))}
                </div>
                
                <div className="border-t pt-3 sm:pt-4 mt-auto">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs sm:text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
