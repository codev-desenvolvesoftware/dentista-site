// pages/sobre.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Faixa from '../components/Faixa';
import WhatsApp from '../components/WhatsApp';

export default function Sobre() {
  return (
    <div className="font-montserrat flex flex-col min-h-screen">
      <Header />

      <Faixa titulo="A Clínica" breadcrumb="A Clínica" />

      <main className="flex-grow container mx-auto px-8 md:px-16 lg:px-48 py-2 my-8 text-sm text-gray-600 font-light">
        <p className="text-sm mb-6 text-justify">
          A <strong>Clínica Odontológica</strong> foi idealizada com o propósito de transformar sorrisos e elevar a autoestima dos nossos pacientes. Localizada em XYZ, nossa estrutura é moderna, confortável e equipada com tecnologia de ponta para garantir um atendimento seguro, eficiente e humanizado.
          <br /><br />
          Contamos com uma equipe multidisciplinar formada por dentistas especializados em diversas áreas da odontologia, como <strong>Prótese Dentária, Implantes, Ortodontia, Alinhadores Invisíveis, Endodontia (canal), Estética Dental</strong> e muito mais. Todos os profissionais estão em constante atualização para oferecer tratamentos de alta qualidade e resultados duradouros.
          <br /><br />
          Aqui, seu sorriso é levado a sério. Venha nos visitar e descubra por que cada vez mais pessoas escolhem a <strong>Clínica Odontológica</strong> como sua clínica de confiança!
        </p>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 mt-10">
          {/* Imagem da clínica */}
          <div className="w-full md:w-1/2">
            <div className="h-full">
              <Image
                src="/sobre/clinica.jpeg"
                alt="Imagem da Clínica"
                width={550}
                height={400}
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
            </div>
          </div>

          {/* Localização e contato */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#edf2f5] h-full p-6 rounded-lg shadow-md text-center space-y-4">

              {/* Container para horário e endereço lado a lado */}
              <div className="flex flex-col md:flex-row justify-between gap-6 text-left text-sm">

                {/* Horário de Atendimento */}
                <div className="md:w-1/2">
                  <h2 className="font-semibold text-[#007d9e] mb-2">Horário de Atendimento</h2>
                  <p>
                    Segunda a Sexta<br />
                    das 9h às 18h
                  </p>
                </div>

                {/* Endereço */}
                <div className="md:w-1/2">
                  <h2 className="font-semibold text-[#007d9e] mb-2">Endereço</h2>
                  <p>
                    Rua Exemplo XYZ, 123<br />
                    sala 02 - Bairro<br />
                    Cidade - Estado
                  </p>
                </div>
              </div>

              {/* Mapa Google */}
              <div className="w-full h-64 rounded-md overflow-hidden mt-4">
                <iframe
                  title="Mapa da clínica"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3901076358456!2d-46.65657232467098!3d-23.588115378780576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c57965e315%3A0x5e5e3f3e56ad7b2!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1715870100000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <WhatsApp
          mensagem="Olá! Gostaria de marcar uma consulta."
        />
      </main>

      <Footer />
    </div>
  );
}
