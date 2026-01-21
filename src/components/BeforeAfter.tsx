import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfter() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const transformations = [
        {
            image: '/images/antes_depois1.png',
            alt: 'Transformação 1 - Antes e Depois'
        },
        {
            image: '/images/antes_depois2.png',
            alt: 'Transformação 2 - Antes e Depois'
        },
        {
            image: '/images/antes_depois3.png',
            alt: 'Transformação 3 - Antes e Depois'
        },
        {
            image: '/images/antes_depois4.jpeg',
            alt: 'Transformação 4 - Antes e Depois'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === transformations.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? transformations.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="resultados" className="py-24 bg-black relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-50"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className="text-yellow-400 font-semibold text-lg mb-4 tracking-wider">
                        RESULTADOS REAIS
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Transformações{' '}
                        <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
                            Incríveis
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        Veja as transformações reais de nossos alunos. Cada história é única,
                        mas todas compartilham determinação e resultados extraordinários.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Main Image Container */}
                    <div className="relative group">
                        {/* Gradient border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-purple-600 to-yellow-400 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>

                        {/* Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={transformations[currentIndex].image}
                                alt={transformations[currentIndex].alt}
                                className="w-full h-[400px] md:h-[500px] object-cover transition-all duration-500 ease-in-out"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 backdrop-blur-sm group/btn"
                            aria-label="Imagem anterior"
                        >
                            <ChevronLeft size={32} className="group-hover/btn:scale-110 transition-transform" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 backdrop-blur-sm group/btn"
                            aria-label="Próxima imagem"
                        >
                            <ChevronRight size={32} className="group-hover/btn:scale-110 transition-transform" />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {transformations.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                    ? 'w-12 h-3 bg-gradient-to-r from-yellow-400 to-purple-400'
                                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
                                    }`}
                                aria-label={`Ir para transformação ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="text-center mt-6">
                        <p className="text-gray-400 text-sm">
                            <span className="text-yellow-400 font-bold text-lg">{currentIndex + 1}</span>
                            {' '}/{' '}
                            <span className="text-white font-bold">{transformations.length}</span>
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-xl md:text-2xl text-white font-semibold mb-6">
                        Você também pode alcançar seus objetivos!
                    </p>
                    <a
                        href="#contato"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:scale-105"
                    >
                        Comece Sua Transformação
                    </a>
                </div>
            </div>
        </section>
    );
}
