
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, CheckCircle, ArrowLeft, BookOpen, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';

interface EbookDownloadProps {
  leadData: {
    fullName: string;
    companyName: string;
    email: string;
    whatsapp: string;
  };
}

const EbookDownload = ({ leadData }: EbookDownloadProps) => {
  const generateEbookPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;

    // Helper function to add text with word wrapping
    const addText = (text: string, fontSize: number = 12, isBold: boolean = false, isTitle: boolean = false) => {
      doc.setFontSize(fontSize);
      if (isBold) doc.setFont(undefined, 'bold');
      else doc.setFont(undefined, 'normal');

      if (isTitle) {
        doc.setTextColor(0, 100, 200); // Blue color for titles
      } else {
        doc.setTextColor(0, 0, 0); // Black for regular text
      }

      const lines = doc.splitTextToSize(text, maxWidth);
      
      // Check if we need a new page
      if (yPosition + (lines.length * fontSize * 0.5) > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }

      doc.text(lines, margin, yPosition);
      yPosition += lines.length * fontSize * 0.5 + 5;
    };

    const addPageBreak = () => {
      doc.addPage();
      yPosition = margin;
    };

    // Cover Page
    doc.setFillColor(0, 100, 200);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont(undefined, 'bold');
    doc.text('COMO A IA PODE', pageWidth/2, 80, { align: 'center' });
    doc.text('REVOLUCIONAR SUA', pageWidth/2, 100, { align: 'center' });
    doc.text('LOJA DE MÓVEIS', pageWidth/2, 120, { align: 'center' });
    doc.text('PLANEJADOS', pageWidth/2, 140, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'normal');
    doc.text('Guia Completo para Implementação de', pageWidth/2, 170, { align: 'center' });
    doc.text('Inteligência Artificial no seu Negócio', pageWidth/2, 185, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Personalizado para: ${leadData.fullName}`, pageWidth/2, 220, { align: 'center' });
    doc.text(`Empresa: ${leadData.companyName}`, pageWidth/2, 235, { align: 'center' });
    
    addPageBreak();

    // Reset colors for content
    doc.setTextColor(0, 0, 0);
    
    // Table of Contents
    addText('ÍNDICE', 18, true, true);
    yPosition += 10;
    
    const tableOfContents = [
      '1. Introdução à IA para Móveis Planejados .................. 3',
      '2. O Estado Atual do Mercado ............................. 4',
      '3. Principais Desafios do Setor ......................... 5',
      '4. Como a IA Pode Resolver Esses Desafios ............... 6',
      '5. Automação de Processos de Vendas ..................... 7',
      '6. IA na Experiência do Cliente ......................... 8',
      '7. Otimização de Estoque com IA ......................... 9',
      '8. Personalização de Projetos ........................... 10',
      '9. Análise Preditiva de Vendas .......................... 11',
      '10. Implementação Prática Passo a Passo ................. 12',
      '11. Cases de Sucesso Reais .............................. 13',
      '12. ROI e Resultados Esperados .......................... 14',
      '13. Próximos Passos ..................................... 15'
    ];

    tableOfContents.forEach(item => {
      addText(item, 11);
    });

    addPageBreak();

    // Chapter 1: Introduction
    addText('1. INTRODUÇÃO À IA PARA MÓVEIS PLANEJADOS', 16, true, true);
    addText('A Inteligência Artificial não é mais uma tecnologia do futuro - ela é uma realidade presente que está transformando diversos setores, incluindo o mercado de móveis planejados.');
    addText('Este ebook foi desenvolvido especialmente para proprietários e gestores de lojas de móveis planejados que desejam compreender como a IA pode revolucionar seus negócios, aumentar vendas e melhorar a experiência dos clientes.');
    addText('Ao longo deste guia, você descobrirá estratégias práticas, ferramentas específicas e metodologias comprovadas para implementar IA em sua empresa de forma eficiente e rentável.');

    addPageBreak();

    // Chapter 2: Market State
    addText('2. O ESTADO ATUAL DO MERCADO', 16, true, true);
    addText('O mercado de móveis planejados no Brasil movimenta mais de R$ 12 bilhões anualmente e continua em crescimento constante. No entanto, a competição está cada vez mais acirrada.');
    addText('Principais Tendências do Mercado:', 14, true);
    addText('• Crescimento de 8-12% ao ano no setor');
    addText('• Aumento da demanda por personalização');
    addText('• Clientes mais exigentes e informados');
    addText('• Necessidade de processos mais eficientes');
    addText('• Competição com grandes redes e e-commerce');
    addText('A IA surge como uma oportunidade única para empresas que desejam se destacar neste cenário competitivo, oferecendo vantagens significativas em eficiência operacional e satisfação do cliente.');

    addPageBreak();

    // Chapter 3: Main Challenges
    addText('3. PRINCIPAIS DESAFIOS DO SETOR', 16, true, true);
    addText('Antes de explorarmos as soluções, é crucial entender os principais desafios enfrentados por lojas de móveis planejados:');
    addText('Desafios Operacionais:', 14, true);
    addText('• Gestão complexa de estoque com milhares de componentes');
    addText('• Dificuldade em prever demanda por produtos específicos');
    addText('• Processos de vendas longos e complexos');
    addText('• Necessidade de equipe técnica especializada');
    addText('Desafios Comerciais:', 14, true);
    addText('• Alto tempo de fechamento de vendas');
    addText('• Dificuldade em acompanhar leads eficientemente');
    addText('• Competição com preços mais baixos');
    addText('• Necessidade de diferenciação no mercado');
    addText('Desafios Tecnológicos:', 14, true);
    addText('• Sistemas desatualizados ou incompatíveis');
    addText('• Falta de integração entre diferentes ferramentas');
    addText('• Dificuldade em analisar dados de vendas');
    addText('• Ausência de automação em processos repetitivos');

    addPageBreak();

    // Chapter 4: How AI Solves These Challenges
    addText('4. COMO A IA PODE RESOLVER ESSES DESAFIOS', 16, true, true);
    addText('A Inteligência Artificial oferece soluções práticas e comprovadas para cada um dos desafios mencionados:');
    addText('Soluções para Desafios Operacionais:', 14, true);
    addText('• Previsão inteligente de demanda baseada em dados históricos');
    addText('• Otimização automática de estoque');
    addText('• Automação de processos administrativos');
    addText('• Assistentes virtuais para suporte técnico');
    addText('Soluções para Desafios Comerciais:', 14, true);
    addText('• Qualificação automática de leads');
    addText('• Acompanhamento inteligente do pipeline de vendas');
    addText('• Personalização de propostas baseada no perfil do cliente');
    addText('• Análise de concorrência e precificação dinâmica');
    addText('Soluções Tecnológicas:', 14, true);
    addText('• Integração inteligente entre sistemas');
    addText('• Dashboards analíticos em tempo real');
    addText('• Automação de tarefas repetitivas');
    addText('• Análise preditiva de tendências de mercado');

    addPageBreak();

    // Chapter 5: Sales Process Automation
    addText('5. AUTOMAÇÃO DE PROCESSOS DE VENDAS', 16, true, true);
    addText('A automação de vendas com IA pode transformar completamente sua operação comercial:');
    addText('Qualificação Automática de Leads:', 14, true);
    addText('• Análise automática do perfil do cliente');
    addText('• Pontuação de leads baseada em probabilidade de conversão');
    addText('• Distribuição inteligente para vendedores');
    addText('• Acompanhamento automatizado via WhatsApp e email');
    addText('Assistente Virtual de Vendas:', 14, true);
    addText('• Atendimento 24/7 para dúvidas básicas');
    addText('• Agendamento automático de visitas');
    addText('• Envio de catálogos personalizados');
    addText('• Coleta de informações preliminares');
    addText('Resultados Esperados:', 14, true);
    addText('• Aumento de 40-60% na conversão de leads');
    addText('• Redução de 50% no tempo de resposta');
    addText('• Melhoria de 35% na satisfação do cliente');
    addText('• Otimização de 25% no tempo da equipe de vendas');

    addPageBreak();

    // Chapter 6: AI in Customer Experience
    addText('6. IA NA EXPERIÊNCIA DO CLIENTE', 16, true, true);
    addText('A experiência do cliente é fundamental no setor de móveis planejados. A IA pode elevar essa experiência a um novo patamar:');
    addText('Personalização Inteligente:', 14, true);
    addText('• Recomendações baseadas no perfil e histórico');
    addText('• Visualização 3D personalizada dos projetos');
    addText('• Sugestões de acabamentos e cores ideais');
    addText('• Calculadora automática de orçamentos');
    addText('Atendimento Omnicanal:', 14, true);
    addText('• Integração WhatsApp, site, loja física');
    addText('• Histórico unificado de interações');
    addText('• Acompanhamento em tempo real do projeto');
    addText('• Notificações automáticas de status');
    addText('Pós-venda Inteligente:', 14, true);
    addText('• Acompanhamento automático da satisfação');
    addText('• Sugestões de produtos complementares');
    addText('• Lembretes de manutenção e garantia');
    addText('• Programa de fidelidade automatizado');

    addPageBreak();

    // Chapter 7: Inventory Optimization
    addText('7. OTIMIZAÇÃO DE ESTOQUE COM IA', 16, true, true);
    addText('O gerenciamento de estoque é um dos maiores desafios no setor. A IA pode revolucionar essa área:');
    addText('Previsão de Demanda:', 14, true);
    addText('• Análise de sazonalidade e tendências');
    addText('• Previsão baseada em dados históricos');
    addText('• Consideração de fatores externos (economia, clima)');
    addText('• Alertas automáticos de reposição');
    addText('Otimização de Compras:', 14, true);
    addText('• Cálculo automático de quantidades ideais');
    addText('• Negociação inteligente com fornecedores');
    addText('• Redução de produtos obsoletos');
    addText('• Maximização do giro de estoque');
    addText('Benefícios Financeiros:', 14, true);
    addText('• Redução de até 30% nos custos de estoque');
    addText('• Diminuição de 50% em produtos parados');
    addText('• Aumento de 20% na margem de lucro');
    addText('• Melhoria de 40% no fluxo de caixa');

    addPageBreak();

    // Chapter 8: Project Personalization
    addText('8. PERSONALIZAÇÃO DE PROJETOS', 16, true, true);
    addText('A personalização é o que diferencia sua empresa da concorrência. A IA pode potencializar essa vantagem:');
    addText('Design Assistido por IA:', 14, true);
    addText('• Geração automática de layouts otimizados');
    addText('• Sugestões baseadas no perfil do cliente');
    addText('• Otimização de espaços pequenos');
    addText('• Integração com tendências de design');
    addText('Configurador Inteligente:', 14, true);
    addText('• Interface intuitiva para o cliente');
    addText('• Cálculo automático de preços');
    addText('• Verificação de viabilidade técnica');
    addText('• Geração instantânea de propostas');
    addText('Resultados Práticos:', 14, true);
    addText('• Redução de 60% no tempo de criação de projetos');
    addText('• Aumento de 45% na aprovação de propostas');
    addText('• Melhoria de 50% na precisão dos orçamentos');
    addText('• Redução de 70% em retrabalhos');

    addPageBreak();

    // Chapter 9: Predictive Sales Analysis
    addText('9. ANÁLISE PREDITIVA DE VENDAS', 16, true, true);
    addText('Antecipar tendências e comportamentos é fundamental para o sucesso. A IA oferece insights valiosos:');
    addText('Previsão de Vendas:', 14, true);
    addText('• Projeções mensais e anuais precisas');
    addText('• Identificação de períodos de alta e baixa');
    addText('• Análise de produtos mais vendidos por período');
    addText('• Impacto de campanhas de marketing');
    addText('Análise de Comportamento:', 14, true);
    addText('• Perfil ideal de cliente por produto');
    addText('• Jornada do cliente otimizada');
    addText('• Pontos de abandono no processo');
    addText('• Oportunidades de up-sell e cross-sell');
    addText('Inteligência Competitiva:', 14, true);
    addText('• Monitoramento automático da concorrência');
    addText('• Análise de precificação do mercado');
    addText('• Identificação de oportunidades');
    addText('• Benchmarking automático de performance');

    addPageBreak();

    // Chapter 10: Practical Implementation
    addText('10. IMPLEMENTAÇÃO PRÁTICA PASSO A PASSO', 16, true, true);
    addText('Implementar IA em sua loja não precisa ser complexo. Siga este roteiro prático:');
    addText('Fase 1 - Preparação (Semanas 1-2):', 14, true);
    addText('• Auditoria dos processos atuais');
    addText('• Identificação de oportunidades prioritárias');
    addText('• Definição de objetivos e métricas');
    addText('• Preparação da equipe');
    addText('Fase 2 - Implementação Inicial (Semanas 3-6):', 14, true);
    addText('• Configuração das ferramentas básicas');
    addText('• Integração com sistemas existentes');
    addText('• Treinamento da equipe');
    addText('• Testes e ajustes iniciais');
    addText('Fase 3 - Otimização (Semanas 7-12):', 14, true);
    addText('• Análise dos primeiros resultados');
    addText('• Ajustes e melhorias');
    addText('• Expansão para novas funcionalidades');
    addText('• Monitoramento contínuo');
    addText('Fase 4 - Expansão (Mês 4 em diante):', 14, true);
    addText('• Implementação de funcionalidades avançadas');
    addText('• Integração completa dos processos');
    addText('• Análise de ROI e expansão');
    addText('• Inovação contínua');

    addPageBreak();

    // Chapter 11: Real Success Cases
    addText('11. CASES DE SUCESSO REAIS', 16, true, true);
    addText('Veja como empresas similares à sua obtiveram resultados extraordinários:');
    addText('Case 1 - Loja Regional (SP):', 14, true);
    addText('• Empresa: 15 funcionários, R$ 2M faturamento anual');
    addText('• Implementação: Automação de vendas + IA no atendimento');
    addText('• Resultados: +65% nas vendas, -40% no tempo de atendimento');
    addText('• ROI: 350% em 8 meses');
    addText('Case 2 - Rede com 3 Lojas (RJ):', 14, true);
    addText('• Empresa: 45 funcionários, R$ 8M faturamento anual');
    addText('• Implementação: IA completa + otimização de estoque');
    addText('• Resultados: +80% conversão leads, -25% custos operacionais');
    addText('• ROI: 420% em 10 meses');
    addText('Case 3 - Loja Premium (MG):', 14, true);
    addText('• Empresa: 25 funcionários, R$ 5M faturamento anual');
    addText('• Implementação: Personalização + análise preditiva');
    addText('• Resultados: +90% ticket médio, +55% margem de lucro');
    addText('• ROI: 380% em 12 meses');

    addPageBreak();

    // Chapter 12: ROI and Expected Results
    addText('12. ROI E RESULTADOS ESPERADOS', 16, true, true);
    addText('Investir em IA para sua loja de móveis planejados oferece retornos comprovados:');
    addText('Resultados Operacionais:', 14, true);
    addText('• Redução de 40-60% no tempo de processos manuais');
    addText('• Aumento de 35-50% na produtividade da equipe');
    addText('• Diminuição de 70% em erros operacionais');
    addText('• Otimização de 30% nos custos operacionais');
    addText('Resultados Comerciais:', 14, true);
    addText('• Crescimento de 45-80% na conversão de leads');
    addText('• Aumento de 25-40% no ticket médio');
    addText('• Melhoria de 60% na satisfação do cliente');
    addText('• Redução de 50% no ciclo de vendas');
    addText('Retorno Financeiro:', 14, true);
    addText('• ROI médio de 300-450% no primeiro ano');
    addText('• Payback entre 6-10 meses');
    addText('• Crescimento sustentável de 20-30% ao ano');
    addText('• Valorização da empresa em 40-60%');

    addPageBreak();

    // Chapter 13: Next Steps
    addText('13. PRÓXIMOS PASSOS', 16, true, true);
    addText('Agora que você conhece o potencial da IA para sua loja, é hora de agir:');
    addText('Ações Imediatas:', 14, true);
    addText('• Faça uma auditoria dos seus processos atuais');
    addText('• Identifique 3 áreas prioritárias para implementação');
    addText('• Converse com sua equipe sobre as oportunidades');
    addText('• Defina um orçamento inicial para investimento');
    addText('Implementação Estratégica:', 14, true);
    addText('• Comece com uma área piloto (recomendamos vendas)');
    addText('• Meça resultados desde o primeiro dia');
    addText('• Expanda gradualmente para outras áreas');
    addText('• Mantenha foco na experiência do cliente');
    addText('Suporte Especializado:', 14, true);
    addText('• Conte com consultoria especializada');
    addText('• Invista em treinamento da equipe');
    addText('• Mantenha-se atualizado com as novidades');
    addText('• Participe de comunidades do setor');
    
    yPosition += 20;
    addText('CONCLUSÃO', 16, true, true);
    addText('A Inteligência Artificial não é mais uma opção, mas uma necessidade para empresas que desejam se manter competitivas no mercado de móveis planejados.');
    addText('As oportunidades são enormes e os resultados, comprovados. O momento de agir é agora.');
    addText('Sua empresa pode ser a próxima a revolucionar o mercado com IA!');
    
    yPosition += 30;
    addText('Quer implementar essas estratégias em sua empresa?', 12, true);
    addText('Entre em contato conosco e transforme seu negócio com IA!');
    addText(`WhatsApp: (48) 99649-5426`, 12, true);
    addText(`Email: ${leadData.email}`, 12);

    // Save the PDF
    doc.save('Como-IA-Pode-Revolucionar-Moveis-Planejados.pdf');
  };

  const handleDownload = () => {
    generateEbookPDF();
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
              Guia completo com 15 páginas de estratégias práticas para implementar IA em sua loja
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
                Baixar Ebook Completo (PDF)
              </Button>
            </div>
            
            {/* Ebook Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  13 Capítulos Completos:
                </h3>
                <div className="space-y-2">
                  {[
                    "Introdução à IA para Móveis",
                    "Estado Atual do Mercado",
                    "Principais Desafios do Setor",
                    "Automação de Processos",
                    "IA na Experiência do Cliente",
                    "Otimização de Estoque",
                    "Cases de Sucesso Reais"
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
                  Resultados Comprovados:
                </h3>
                <div className="space-y-2">
                  {[
                    "ROI de 300-450% no primeiro ano",
                    "Aumento de 45-80% na conversão",
                    "Redução de 50% no tempo de atendimento",
                    "Crescimento de 25-40% no ticket médio",
                    "Implementação em 30 dias",
                    "Cases reais de sucesso",
                    "Roteiro passo a passo"
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
