
import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand - Logo centralizado em mobile */}
          <div className="lg:col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-6 md:mb-8">
              <Logo className="w-24 h-24 md:w-32 md:h-32" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-base leading-relaxed">
              A plataforma de inteligência artificial que revoluciona a gestão de lojas de móveis planejados no Brasil.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://wa.me/5548996495426" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors p-2 hover:bg-green-500/10 rounded-full"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.894 3.488"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/planej.aitec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors p-2 hover:bg-pink-500/10 rounded-full"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@PlanejAiautomações" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-full"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Links - Centralizado em mobile */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-white transition-colors w-full py-1 px-2 rounded hover:bg-white/5 text-left"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')} 
                  className="hover:text-white transition-colors w-full py-1 px-2 rounded hover:bg-white/5 text-left"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="hover:text-white transition-colors w-full py-1 px-2 rounded hover:bg-white/5 text-left"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tech-stack')} 
                  className="hover:text-white transition-colors w-full py-1 px-2 rounded hover:bg-white/5 text-left"
                >
                  Tecnologia
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contato - Centralizado em mobile */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1 px-2 rounded hover:bg-white/5 text-left">
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/planej.aitec" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block py-1 px-2 rounded hover:bg-white/5 text-left"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@PlanejAiautomações" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block py-1 px-2 rounded hover:bg-white/5 text-left"
                >
                  YouTube
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="hover:text-white transition-colors w-full py-1 px-2 rounded hover:bg-white/5 text-left"
                >
                  Casos de Sucesso
                </button>
              </li>
              <li>
                <a 
                  href="https://wa.me/5548996495426" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block py-1 px-2 rounded hover:bg-white/5 text-left"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright - Sempre centralizado */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-4">
            &copy; 2025 Planej.AI. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors underline">
              Política de Privacidade
            </Link>
            <span className="hidden sm:inline text-gray-600">|</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors underline">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
