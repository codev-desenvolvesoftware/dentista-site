import Link from 'next/link';

const tratamentos = [
  {
    titulo: 'Clareamento Dental',
    descricao: 'Devolva o brilho ao seu sorriso com nosso clareamento profissional.'
  },
  {
    titulo: 'Implantes Dentários',
    descricao: 'Recupere a funcionalidade e estética com implantes de alta qualidade.'
  },
  {
    titulo: 'Ortodontia',
    descricao: 'Alinhe seus dentes com nossos tratamentos ortodônticos personalizados.'
  },
  {
    titulo: 'Facetas de Resina',
    descricao: 'Se você pensa em corrigir o seu sorriso de forma rápida e prática as facetas é uma das melhores alternativas.',
  },
  {
    titulo: 'Bichectomia',
    descricao: 'Remova as bolsas de gordura das bochechas para um rosto mais definido.',
  },
  {
    titulo: 'Periodontia',
    descricao: 'Tratamento de doenças gengivais para manter sua saúde bucal em dia.',
  },
  // Adicione mais tratamentos conforme necessário
];

export default function Tratamentos() {
  return (
    <section className="font-montserrat w-auto bg-[#edf2f5] sm:py-8 py-16 md:mp-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-[#65739e] text-xl font-semibold mb-8">Tratamentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tratamentos.map((tratamento, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >              
              <div className="p-6 h-auto px-8">
                <h3 className="mt-4 h-16 text-md text-[#007d9e] font-semibold mb-2">{tratamento.titulo}</h3>
                <p className="mb-4 text-sm text-[#7B7D85] justify-between">{tratamento.descricao}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
  href="/tratamentos"
  className="inline-block bg-[#29a9da] text-white px-6 py-3 rounded-full hover:bg-[#007d9e] transition-colors duration-300"
>
  Ver todos →
</Link>
        </div>
      </div>
    </section>
  );
}
