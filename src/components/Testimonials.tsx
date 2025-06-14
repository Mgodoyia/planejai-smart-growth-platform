
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresários que já transformaram seus negócios e alcançaram resultados extraordinários
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {metric}
                    </span>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
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
