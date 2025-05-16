'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const slides = [
  { src: '/hero/slide1.jpg', alt: 'Sorriso 1' },
  { src: '/hero/slide2.jpg', alt: 'Sorriso 2' },
  { src: '/hero/slide3.jpg', alt: 'Sorriso 3' },
];

const cards = [
  {
    image: '/hero/h1.png',
    title: 'Convênios Odontológicos',
    description: 'Aceitamos diversos convênios odontológicos para sua conveniência.',
    description2: 'Veja a lista completa.',
    linkTo: '/convenios',
  },
  {
    image: '/hero/h2.png',
    title: 'Pacotes de Tratamentos',
    description: 'Nós sabemos como é importante o valor do tratamento, em nossos orçamentos você encontrará preços que cabem no seu bolso.',
    linkTo: '/tratamentos',
  },
  {
    image: '/hero/h3.png',
    title: 'Equipe Especializada',
    description: 'Dentistas com experiência para realizar o seu tratamento de uma forma rápida e segura.',
    linkTo: '/equipe',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="font-montserrat relative w-full overflow-hidden mt-[180px]">
      {/* Slide show */}
      <div className="relative h-[450px] md:h-[500px] w-full">
        {/* Slides */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover brightness-90"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center sm:items-start justify-end sm:justify-center text-center text-white bg-black/30 pl-6 md:pl-8 lg:pl-8">
          <h1 className="mb-4 mt-32 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Transforme seu sorriso hoje
          </h1>
          <p className="max-w-xl mb-4">
            Atendimento humanizado, tecnologia moderna e especialistas para cuidar do seu sorriso.
          </p>
          <a
            href="https://wa.me/5511943665990?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 px-6 py-3 bg-[#44c7ff] text-white rounded-full hover:bg-[#089fe0] transition"
          >
            Agendar avaliação
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* Cards */}
      <div
        className="
          relative
          z-30
          mb-14
          py-0 
          sm:py-10
          px-4
          sm:px-6
          md:px-12
          lg:px-24
          xl:px-32
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-6
          text-center
          mt-10 sm:-mt-20
        "
      >
        {cards.map(({ image, title, description, description2, linkTo }, index) => (
          <div
            key={index}
            className="bg-white py-4 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition hover:bg-blue-50 hover:border-[#42c2fe] flex flex-col justify-between items-center text-center"
          >
            {/* Imagem */}
            <div className="h-[80px] flex items-center justify-center">
              <Image
                src={image}
                alt={title}
                width={60}
                height={60}
                className="mx-auto mb-12"
              />
            </div>

            {/* Título */}
            <div className="h-[60px] flex items-center">
              <Link href={linkTo} className="font-bold pt-2">
                <h3 className="text-md font-semibold text-[#007d9e] hover:text-[#29a9da] hover:font-bold">{title}</h3>
              </Link>
            </div>

            {/* Descrição */}
            <div className="text-sm h-[110px] flex flex-col justify-start px-6 sm:px-0 text-[#7B7D85]">
              <p>{description}</p>
              {description2 && (
                <Link href={linkTo} className="font-bold pt-2 text-[#007d9e] hover:text-[#29a9da]">
                  {description2}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
