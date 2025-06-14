
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, CheckCircle, ArrowLeft, BookOpen, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface EbookDownloadProps {
  leadData: {
    fullName: string;
    companyName: string;
    email: string;
    whatsapp: string;
  };
}

const EbookDownload = ({ leadData }: EbookDownloadProps) => {
  const handleDownload = () => {
    // In a real implementation, this would trigger the actual download
    // For now, we'll simulate it
    const link = document.createElement('a');
    link.href = '#'; // This would be the actual PDF URL
    link.download = 'como-ia-pode-revolucionar-moveis-planejados.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openWhatsApp = () => {
    const message = `Olá! Acabei de baixar o ebook sobre IA para móveis planejados. Gostaria de saber mais sobre como implementar essas soluções na ${leadData.companyName}.`;
    window.open(`https://wa.me/5548996495426?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30"></div>
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
            <span className="text-green-200 font-medium">Cadastro Realizado com Sucesso!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Obrigado, {leadData.fullName.split(' ')[0]}!
          </h1>
          <p className="text-xl text-blue-100 mb-2">
            Seu ebook está pronto para download
          </p>
          <p className="text-blue-200">
            Transforme sua {leadData.companyName} com o poder da Inteligência Artificial
          </p>
        </div>

        {/* Download Card */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-8">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Ebook: IA para Móveis Planejados</CardTitle>
            <CardDescription className="text-blue-200">
              Guia completo com estratégias práticas para implementar IA em sua loja
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="text-center mb-6">
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-6 text-lg rounded-xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-3 w-6 h-6" />
                Baixar Ebook Agora (PDF)
              </Button>
            </div>
            
            {/* Ebook Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Principais Tópicos:
                </h3>
                <div className="space-y-2">
                  {[
                    "Automação de Processos de Vendas",
                    "IA na Experiência do Cliente",
                    "Otimização de Estoque",
                    "Personalização de Projetos",
                    "Análise Preditiva de Vendas"
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center text-blue-200">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                  Benefícios Práticos:
                </h3>
                <div className="space-y-2">
                  {[
                    "Aumento de 40% nas vendas",
                    "Redução de 60% no tempo de atendimento",
                    "Melhoria na satisfação do cliente",
                    "Otimização dos custos operacionais",
                    "Vantagem competitiva no mercado"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-blue-200">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-400/30 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-white">Próximos Passos</CardTitle>
            <CardDescription className="text-blue-200">
              Pronto para implementar essas estratégias em sua empresa?
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.894 3.488"/>
                </svg>
                Falar com Especialista
              </Button>
              
              <Link to="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EbookDownload;
