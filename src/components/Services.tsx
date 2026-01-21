import { Video, FileText, User, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Consultoria Online',
      description:
        'Acompanhamento completo à distância com treinos personalizados, orientação nutricional e suporte diário via WhatsApp.',
      features: ['Treinos em vídeo', 'Ajustes semanais', 'Suporte 24/7'],
    },
    {
      icon: FileText,
      title: 'Montagem de Ficha de Treino',
      description:
        'Planilha de treino personalizada desenvolvida especialmente para seus objetivos, nível de condicionamento e disponibilidade.',
      features: ['Treino personalizado', 'Progressão planejada', 'Orientações detalhadas'],
    },
    {
      icon: User,
      title: 'Personal Trainer Presencial',
      description:
        'Acompanhamento presencial individual com correção de postura, motivação constante e resultados acelerados.',
      features: ['Treino individual', 'Correção em tempo real', 'Máxima eficiência'],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-green-400 font-semibold text-lg mb-4">SERVIÇOS</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções personalizadas para
            <span className="text-purple-400"> você</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Escolha o formato que melhor se adapta à sua rotina e objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-green-400 to-purple-600 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-black" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center group-hover:scale-105"
              >
                Saiba mais
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
