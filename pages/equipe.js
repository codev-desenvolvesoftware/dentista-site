import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsApp from '../components/WhatsApp';
import Faixa from '../components/Faixa';

export default function Equipe() {
  return (
    <>
      <Header />

      <Faixa titulo="Equipe" breadcrumb="Nossa equipe" />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto text-start mb-12 px-6 sm:px-16">
          <p className="text-gray-600 text-sm text-between">
            Acreditamos em um atendimento humanizado, personalizado e com foco total no seu bem-estar!<br></br>
            <br></br> 
            Conheça mais do profissionalismo e dedicação da nossa equipe, que está sempre atualizada com as melhores práticas e tecnologias do mercado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 h-auto md:h-[28rem]">
          {/* Foto da profissional */}
          <div className="h-full">
            <img
              src="/equipe/profissional1.jpeg"
              alt="Dra. Ana Souza"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Informações */}
          <div className="h-full flex flex-col justify-between text-start px-4 sm:px-8 py-8 md:py-10 items-center md:items-start text-center md:text-start">
            <div>
              <h2 className="text-lg font-semibold text-[#65739e] mb-2">Dra. Ana Souza</h2>
              <p className="text-blue-500 font-medium mb-4">Ortodontista | CRO-SP 123456</p>

              <p className="text-gray-600 font-extralight text-sm mb-4">
                Especialista em alinhamento dental com mais de 10 anos de experiência. Formada pela Universidade de São Paulo (USP) e com atualizações constantes em técnicas modernas de ortodontia.
              </p>

              <ul className="text-sm text-gray-600 font-extralight list-disc list-inside mb-4">
                <li>Ortodontia convencional e estética</li>
                <li>Invisalign e alinhadores transparentes</li>
                <li>Tratamentos personalizados para adultos e crianças</li>
                <li>Foco em conforto, estética e resultado funcional</li>
              </ul>
            </div>

            <p className="text-[#65739e] italic text-xs mt-4">
              &quot;Sorrir é um gesto simples que transforma vidas. Meu objetivo é tornar esse gesto mais confiante e natural para cada paciente.&quot;
            </p>
          </div>
        </div>

        <WhatsApp
          mensagem="Olá! Gostaria de marcar uma consulta."
        />
      </main>

      <Footer />
    </>
  );
}
