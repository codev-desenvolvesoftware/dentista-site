import Link from 'next/link';

export default function Faixa({ titulo, breadcrumb, linkText = "Clínica Odontológica" }) {
  return (
    <section className="mt-56 sm:mt-48 relative w-full h-40 flex items-center">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-[url('/sobre/bg-sobre.jpg')] bg-[length:100%_160%] bg-center brightness-25 opacity-30"
      />

      {/* Overlay azul translúcido */}
      <div className="absolute inset-0 bg-[#03708d]/90 mix-blend-multiply" />

      {/* Conteúdo acima da imagem */}
      <div className="relative z-10 text-center px-8 sm:px-16 md:px-16 lg:px-40 xl:px-48 text-white text-start pt-4">
        <h1 className="text-lg font-semibold">{titulo}</h1>
        <p className="text-sm tracking-wide font-extralight mt-4">
          <Link href="/" className="text-gray-300 hover:text-white mr-2">
            {linkText}
          </Link>
          <span className="text-xs font-bold px-2">&gt;</span>
          {breadcrumb}
        </p>
      </div>
    </section>
  );
}
