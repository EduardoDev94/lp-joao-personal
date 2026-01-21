import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-wider">
              <span className="text-yellow-400">SENSE</span>
              <span className="text-white">FITNESS</span>
            </h3>
            <p className="text-gray-400">
              Transformando vidas através do treinamento personalizado e dedicação.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Avaliações', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (11) 99999-9999</li>
              <li>📧 contato@sensefitness.com</li>
              <li>�� São Paulo, SP</li>
              <li>🕐 Seg - Sáb: 6h às 22h</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg hover:scale-110 transition-transform"
              >
                <Instagram size={24} className="text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-lg hover:scale-110 transition-transform"
              >
                <Facebook size={24} className="text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-lg hover:scale-110 transition-transform"
              >
                <Youtube size={24} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 p-3 rounded-lg hover:scale-110 transition-transform"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} <span className="text-yellow-400">SenseFitness</span>. Todos os direitos
            reservados. | CREF 123456-G/SP
          </p>
        </div>
      </div>
    </footer>
  );
}
