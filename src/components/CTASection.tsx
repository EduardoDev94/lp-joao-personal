import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-black via-purple-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto para começar sua
            <span className="text-yellow-400"> transformação</span>?
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            Dê o primeiro passo hoje e comece a trilhar o caminho para a melhor versão de você mesmo.
            Agende sua avaliação gratuita agora!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <MessageCircle size={48} className="text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-green-100">Fale comigo agora</p>
          </a>

          <a
            href="mailto:contato@sensefitness.com"
            className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Mail size={48} className="text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">E-mail</h3>
            <p className="text-purple-100">contato@sensefitness.com</p>
          </a>

          <a
            href="tel:+5511999999999"
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Phone size={48} className="text-black mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-black mb-2">Telefone</h3>
            <p className="text-gray-900">(11) 99999-9999</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            📍 Atendimento em São Paulo e online para todo Brasil
          </p>
        </div>
      </div>
    </section>
  );
}
