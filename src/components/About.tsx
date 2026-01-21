import { Award, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-yellow-400 font-semibold text-lg mb-4">SOBRE MIM</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seu personal trainer dedicado à sua
              <span className="text-purple-400"> transformação</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Sou especialista em treinamento personalizado com mais de 8 anos de experiência
              ajudando pessoas a alcançarem seus objetivos de forma saudável e sustentável.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Minha metodologia combina treinos funcionais, musculação e orientação nutricional
              para resultados reais e duradouros. Cada aluno recebe um plano exclusivo,
              desenvolvido especialmente para suas necessidades e objetivos.
            </p>

            <div className="space-y-4">
              {[
                { icon: Award, text: 'CREF certificado e pós-graduado em Treinamento Funcional' },
                { icon: Target, text: 'Especialista em emagrecimento e hipertrofia' },
                { icon: Heart, text: 'Metodologia focada em resultados sustentáveis' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg flex-shrink-0">
                    <item.icon size={24} className="text-black" />
                  </div>
                  <p className="text-gray-300 text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-purple-600 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="../../dist/assets/images/imagemjoao.jpeg"
                alt="Personal Trainer SenseFitness"
                className="w-full h-full object-cover animate-image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
