
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Última atualização:</strong> Janeiro de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
            <p className="text-gray-700 leading-relaxed">
              A Planej.AI está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
              quando você utiliza nossa plataforma de inteligência artificial para gestão de lojas de móveis planejados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Informações Fornecidas por Você</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Dados de cadastro (nome, e-mail, telefone, empresa)</li>
              <li>Informações de contato de clientes</li>
              <li>Dados de projetos e orçamentos</li>
              <li>Conversas e interações com nossos chatbots</li>
              <li>Informações de pagamento (processadas por terceiros seguros)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 Informações Coletadas Automaticamente</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Dados de uso da plataforma</li>
              <li>Informações do dispositivo e navegador</li>
              <li>Endereço IP e localização aproximada</li>
              <li>Cookies e tecnologias similares</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos Suas Informações</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fornecer e melhorar nossos serviços de IA</li>
              <li>Personalizar sua experiência na plataforma</li>
              <li>Processar transações e pagamentos</li>
              <li>Enviar comunicações importantes sobre o serviço</li>
              <li>Treinar e aprimorar nossos modelos de inteligência artificial</li>
              <li>Prevenir fraudes e garantir a segurança</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Com seu consentimento explícito</li>
              <li>Com prestadores de serviços essenciais (hospedagem, pagamentos, analytics)</li>
              <li>Para cumprir obrigações legais ou ordens judiciais</li>
              <li>Para proteger nossos direitos e segurança</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Segurança de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações, incluindo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li>Criptografia SSL/TLS para transmissão de dados</li>
              <li>Criptografia de dados em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups regulares e seguros</li>
              <li>Conformidade com ISO 27001 e LGPD</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seus Direitos (LGPD)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Confirmação da existência de tratamento de dados</li>
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados</li>
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados tratados com consentimento</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retenção de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Mantemos suas informações pelo tempo necessário para fornecer nossos serviços e cumprir 
              obrigações legais. Dados de projetos são mantidos enquanto sua conta estiver ativa. 
              Após o cancelamento, os dados são mantidos por até 5 anos para fins de conformidade legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos cookies essenciais para o funcionamento da plataforma e cookies analíticos 
              para melhorar nossos serviços. Você pode gerenciar suas preferências de cookies nas 
              configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Alterações nesta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
              mudanças significativas por e-mail ou através de avisos em nossa plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Para questões sobre privacidade ou para exercer seus direitos, entre em contato:
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700"><strong>E-mail:</strong> privacidade@planej.ai</p>
              <p className="text-gray-700"><strong>WhatsApp:</strong> (48) 99649-5426</p>
              <p className="text-gray-700"><strong>Encarregado de Dados (DPO):</strong> dpo@planej.ai</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
