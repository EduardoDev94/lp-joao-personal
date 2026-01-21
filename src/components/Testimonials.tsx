import { Check } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      time: '15:42',
      messages: [
        'Gente, não to acreditando ainda!! 😱',
        'Perdi 18kg em 6 meses com o João! Tava achando que nunca ia conseguir pq ja tentei de tudo...',
        'Mas ele personalizou TD pra mim, me acompanhou toda semana e agora to aqui renovada! 💪✨',
      ],
    },
    {
      name: 'João Santos',
      time: '09:23',
      messages: [
        'Cara, preciso compartilhar isso com vcs',
        'Em 4 meses ganhei 8kg de massa magra!! Nem eu acredito quando olho no espelho',
        'O treino é pesado mas vale MUITO a pena. Finalmente consegui sair do shape de vareta 😅💪',
      ],
    },
    {
      name: 'Ana Costa',
      time: '18:15',
      messages: [
        'Melhor investimento que fiz esse ano! 🙌',
        'Tava sem disposição nenhuma, cansada direto...',
        'Comecei o treino online e mudou TUDO! Super prático pra quem tem rotina corrida igual eu',
        'Recomendo demais! ❤️',
      ],
    },
    {
      name: 'Pedro Oliveira',
      time: '14:38',
      messages: [
        'Mano, que profissional foda!!',
        'A atenção que ele tem com cada detalhe dos movimentos é absurda',
        'Meu treino rendeu 300% mais depois que ele corrigiu minha postura. Resultados aparecendo rápido demais 💪🔥',
      ],
    },
    {
      name: 'Carla Mendes',
      time: '11:50',
      messages: [
        'Meninas... to emocionada aqui 🥺',
        'Eliminei 12kg e a autoestima voltou FORTE!',
        'O acompanhamento nutricional + treino foi a combinação perfeita. Ele não deixa a gente desistir sabe?',
        'Só gratidão mesmo 🙏💛',
      ],
    },
    {
      name: 'Ricardo Alves',
      time: '16:27',
      messages: [
        'Performance outro nível brother! 🚀',
        'Treino focado, objetivo claro e os resultados? Simplesmente impressionantes',
        'Cada treino é diferente e desafiador. Vale cada gota de suor! 😤💯',
      ],
    },
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-green-400 font-semibold text-lg mb-4 tracking-wider">AVALIAÇÕES</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que meus alunos{' '}
            <span className="bg-gradient-to-r from-green-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              dizem
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Depoimentos reais de quem está transformando suas vidas 💪
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* WhatsApp-style card */}
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-400/10">
                {/* Header with name and time */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">Online</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">{testimonial.time}</span>
                </div>

                {/* Messages */}
                <div className="space-y-2">
                  {testimonial.messages.map((message, msgIndex) => (
                    <div
                      key={msgIndex}
                      className="bg-gradient-to-br from-green-900/40 to-green-800/30 border border-green-700/30 rounded-lg rounded-br-sm p-3 relative"
                    >
                      <p className="text-gray-200 text-sm leading-relaxed">{message}</p>
                      {/* WhatsApp check marks on last message */}
                      {msgIndex === testimonial.messages.length - 1 && (
                        <div className="flex items-center justify-end mt-1 space-x-0.5">
                          <Check size={14} className="text-blue-400" />
                          <Check size={14} className="text-blue-400 -ml-2" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
