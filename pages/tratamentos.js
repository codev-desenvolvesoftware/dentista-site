import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaTeeth, FaTooth, FaSmile, FaXRay, FaTeethOpen } from 'react-icons/fa';
import { GiFrontTeeth } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { CgDanger } from "react-icons/cg";
import WhatsApp from '../components/WhatsApp';
import Faixa from '../components/Faixa';

// Componente reutilizável de Card
const ServicoCard = ({ Icon, titulo, descricao }) => (
  <div className="mx-2 bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center text-center">
    <Icon className="text-blue-500 text-4xl mb-4" />
    <h2 className="text-sm font-semibold mb-2 text-[#65739e]">{titulo}</h2>
    <p className="text-[13px] text-gray-600 font-extralight">{descricao}</p>
  </div>
);

// Lista de serviços
const servicos = [
  {
    Icon: FaTeeth,
    titulo: 'Clareamento Dental',
    descricao: 'Devolva o brilho ao seu sorriso com nosso clareamento profissional.'
  },
  {
    Icon: FaTooth,
    titulo: 'Implantes Dentários',
    descricao: 'Recupere a funcionalidade e estética com implantes de alta qualidade.'
  },
  {
    Icon: FaXRay,
    titulo: 'Radiologia',
    descricao: 'Exames digitais de alta precisão para diagnóstico eficiente e seguro.',
  },
  {
    Icon: GiFrontTeeth,
    titulo: 'Facetas de Resina',
    descricao: 'Se você pensa em corrigir o seu sorriso de forma rápida e prática as facetas é uma das melhores alternativas.',
  },
  {
    Icon: FaTeethOpen,
    titulo: 'Limpeza e Prevenção',
    descricao: 'Manutenção da saúde bucal com procedimentos simples e eficazes.',
  },
  {
    Icon: FaSmile,
    titulo: 'Periodontia',
    descricao: 'Tratamento de doenças gengivais para manter sua saúde bucal em dia.',
  },
  {
    Icon: FaSmile,
    titulo: 'Bichectomia',
    descricao: 'Remova as bolsas de gordura das bochechas para um rosto mais definido.',
  },
  {
    Icon: CgDanger,
    titulo: 'Tratamento de Canal',
    descricao: 'Cuide da saúde dos seus dentes com nosso tratamento de canal eficaz.',
  },
  {
    Icon: FaTeeth,
    titulo: 'Prótese Dentária',
    descricao: 'Recupere a função e estética do seu sorriso com nossas próteses personalizadas.',
  },
  {
    Icon: FaTeeth,
    titulo: 'Ortodontia',
    descricao: 'Alinhe seus dentes com nossos tratamentos ortodônticos personalizados.',
  },
  {
    Icon: FaTeeth,
    titulo: 'Alinhadores Invisíveis',
    descricao: 'Corrija o alinhamento dos seus dentes de forma discreta e eficaz.',
  },
  {
    Icon: TbMoodKid,
    titulo: 'Odontopediatria',
    descricao: 'Cuidados especiais para os sorrisos mais jovens.',
  },

];

export default function Servicos() {
  return (
    <>
      <Header />

      <Faixa titulo="Tratamentos" breadcrumb="Tratamentos e Convênios Odontológicos" />

      <main className="container px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12">
        <div className="grid mx-8 gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, index) => (
            <ServicoCard
              key={index}
              Icon={servico.Icon}
              titulo={servico.titulo}
              descricao={servico.descricao}
            />
          ))}
        </div>


        {/* Convênios */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-lg font-bold text-[#65739e] mt-8">
              Convênios que Atendemos
            </h3>
            <p className="text-gray-600 text-sm my-8 max-w-lg mx-auto">
              Facilitamos seu atendimento com diversas operadoras. Veja abaixo a lista dos convênios aceitos pela nossa clínica:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
              {[
                { nome: "Amil", img: "/convenios/amil.png" },
                { nome: "Bradesco Saúde", img: "/convenios/bradesco.png" },
                { nome: "Dentalpar", img: "/convenios/dentalpar.png" },
                { nome: "SulAmérica", img: "/convenios/sulamerica.png" },
                { nome: "Omint", img: "/convenios/omint.png" },
                { nome: "Unimed", img: "/convenios/unimed.png" },
                { nome: "Porto Saúde", img: "/convenios/porto.png" },
                { nome: "Inpao Dental", img: "/convenios/inpao.jpg" },
                { nome: "Interodonto", img: "/convenios/interodonto.png" },
                { nome: "OdontoPrev", img: "/convenios/odontoprev.png" }, 
                { nome: "BB Dental", img: "/convenios/bb.png" },
                { nome: "Uniodonto", img: "/convenios/uniodonto.jpg" },  
              ].map((convenio, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105"
                >
                  <img
                    src={convenio.img}
                    alt={`Convênio ${convenio.nome}`}
                    className="h-16 mx-auto object-contain mb-2"
                  />
                  <p className="text-sm text-gray-700 font-medium">{convenio.nome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <WhatsApp
          mensagem="Olá! Gostaria de marcar uma consulta."
        />
      </main>

      <Footer />
    </>
  );
}
