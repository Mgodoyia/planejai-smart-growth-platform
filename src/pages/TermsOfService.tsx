
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-8 hover:bg-blue-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao início
        </Button>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Última atualização:</strong> Janeiro de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Ao acessar e usar a plataforma Planej.AI, você concorda em cumprir e estar vinculado a estes 
              Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-700 leading-relaxed">
              A Planej.AI é uma plataforma de inteligência artificial especializada na gestão de lojas de 
              móveis planejados, oferecendo automação de processos, atendimento inteligente, gestão de leads 
              e ferramentas de análise para otimizar operações comerciais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cadastro e Conta</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Elegibilidade</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você deve ter pelo menos 18 anos e capacidade legal para celebrar contratos para usar nossos serviços.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">3.2 Responsabilidades da Conta</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Manter a confidencialidade de suas credenciais</li>
              <li>Notificar imediatamente sobre uso não autorizado</li>
              <li>Ser responsável por todas as atividades em sua conta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso Aceitável</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">4.1 Usos Permitidos</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você pode usar nossa plataforma apenas para fins comerciais legítimos relacionados à 
              gestão de negócios de móveis planejados.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">4.2 Usos Proibidos</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Atividades ilegais ou fraudulentas</li>
              <li>Spam ou comunicações não solicitadas em massa</li>
              <li>Tentativas de acesso não autorizado</li>
              <li>Uso de dados para treinamento de IA concorrente</li>
              <li>Revenda ou redistribuição não autorizada</li>
              <li>Interferência com o funcionamento da plataforma</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propriedade Intelectual</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">5.1 Nossa Propriedade</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todos os direitos sobre a plataforma, incluindo software, algoritmos de IA, design e 
              conteúdo, são de propriedade da Planej.AI e estão protegidos por leis de propriedade intelectual.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">5.2 Seus Dados</h3>
            <p className="text-gray-700 leading-relaxed">
              Você mantém a propriedade de seus dados de negócio. Concedemos licença limitada para 
              processar esses dados conforme necessário para fornecer nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Pagamentos e Assinaturas</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">6.1 Planos e Preços</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os preços dos planos estão sujeitos a alterações com aviso prévio de 30 dias. 
              Mudanças não afetam assinaturas já pagas.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">6.2 Cobrança</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Cobrança automática recorrente conforme plano escolhido</li>
              <li>Falha no pagamento pode resultar em suspensão do serviço</li>
              <li>Reembolsos conforme política específica</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">6.3 Cancelamento</h3>
            <p className="text-gray-700 leading-relaxed">
              Você pode cancelar sua assinatura a qualquer momento. O acesso continuará até o final 
              do período pago, sem renovação automática.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Planej.AI não será responsável por:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Decisões comerciais baseadas em análises da IA</li>
              <li>Interrupções temporárias do serviço</li>
              <li>Perda de dados devido a falhas técnicas</li>
              <li>Danos indiretos ou consequenciais</li>
              <li>Uso inadequado da plataforma por terceiros</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Nossa responsabilidade máxima é limitada ao valor pago nos últimos 12 meses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Garantias e Disponibilidade</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">8.1 SLA</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comprometemo-nos com 99.9% de uptime mensal, excluindo manutenções programadas.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">8.2 Suporte</h3>
            <p className="text-gray-700 leading-relaxed">
              Oferecemos suporte técnico durante horário comercial via WhatsApp, e-mail e chat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modificações dos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos modificar estes termos ocasionalmente. Mudanças significativas serão comunicadas 
              com pelo menos 30 dias de antecedência. Uso continuado após mudanças constitui aceitação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Rescisão</h2>
            <p className="text-gray-700 leading-relaxed">
              Qualquer parte pode encerrar este acordo a qualquer momento. Podemos suspender ou 
              encerrar contas por violação destes termos. Backup de dados é responsabilidade do usuário.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Lei Aplicável</h2>
            <p className="text-gray-700 leading-relaxed">
              Estes termos são regidos pelas leis brasileiras. Disputas serão resolvidas no foro 
              da comarca de Florianópolis, Santa Catarina.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Para questões sobre estes termos, entre em contato:
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700"><strong>E-mail:</strong> legal@planej.ai</p>
              <p className="text-gray-700"><strong>WhatsApp:</strong> (48) 99649-5426</p>
              <p className="text-gray-700"><strong>Endereço:</strong> Florianópolis, SC - Brasil</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
