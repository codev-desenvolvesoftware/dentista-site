import { useState } from 'react';

const depoimentos = [
  {
    name: 'João Meireles',
    text: 'Excelente atendimento e profissionais qualificados. Recomendo a todos!',
    image: '/depoimentos/p3.jpg',
  },
  {
    name: 'Julia Oliveira',
    text: 'Ambiente agradável e serviço de primeira. Sou cliente há muito tempo!',
    image: '/depoimentos/p1.jpg',
  },
  {
    name: 'Carlos Souza',
    text: 'Equipe atenciosa e resultados incríveis. Devolveu minha auto estima. Voltarei com certeza!',
    image: '/depoimentos/p2.jpg',
  },
  {
    name: 'Antonia Telles',
    text: 'Agora posso sorrir como os artistas rsrs, feliciadades mil... Obrigada!',
    image: '/depoimentos/p4.jpg',
  },
  // Adicione mais depoimentos conforme necessário
];

export default function DepoimentosCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="font-montserrat text-[#65739e] py-12 px-4 sm:px-24 md:mx-32 md:my-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold mb-8">Depoimentos</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {depoimentos.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4 flex flex-col items-center"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <p className="text-lg italic mb-2">"{testimonial.text}"</p>
                  <p className="text-sm">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Navegação */}
          <div className="flex justify-center mt-6 space-x-2">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
          {/* Botões de navegação (opcional) */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
