
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Download, CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import EbookDownload from "@/components/EbookDownload";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    whatsapp: ''
  });
  const [showEbook, setShowEbook] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowEbook(true);
      toast({
        title: "Dados enviados com sucesso!",
        description: "Agora você pode baixar seu ebook exclusivo.",
      });
    }, 1500);
  };

  const isFormValid = formData.fullName && formData.companyName && formData.email && formData.whatsapp;

  if (showEbook) {
    return <EbookDownload leadData={formData} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30"></div>
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 w-full">
        {/* Back Button */}
        <div className="absolute top-0 left-0">
          <Link to="/" className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Column - Header Info */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2 text-blue-300" />
              <span className="text-blue-200 font-medium">Conteúdo Exclusivo</span>
            </div>
            
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Ebook Gratuito
              </h1>
              <p className="text-xl text-blue-100 mb-2">
                Como a IA pode Revolucionar sua Loja de Móveis Planejados
              </p>
              <p className="text-blue-200">
                Preencha os dados ao lado para receber seu ebook exclusivo
              </p>
            </div>

            {/* Benefits */}
            <div className="text-left space-y-3">
              <h3 className="text-white font-semibold text-lg">O que você vai aprender:</h3>
              <div className="space-y-2">
                {[
                  "Como a IA pode automatizar processos de vendas",
                  "Estratégias para melhorar a experiência do cliente",
                  "Ferramentas de IA específicas para móveis planejados",
                  "Cases de sucesso reais do mercado",
                  "Implementação prática passo a passo"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-blue-200">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Baixe seu Ebook Gratuito</CardTitle>
                <CardDescription className="text-blue-200 text-sm">
                  Descubra estratégias práticas para implementar IA em sua loja
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="fullName" className="text-white text-sm">Nome Completo *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-10"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="companyName" className="text-white text-sm">Nome da Empresa *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Nome da sua empresa"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-white text-sm">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-10"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="whatsapp" className="text-white text-sm">WhatsApp *</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="(XX) XXXXX-XXXX"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 h-10"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-base rounded-xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processando...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 w-4 h-4" />
                        Baixar Ebook Gratuito
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;
