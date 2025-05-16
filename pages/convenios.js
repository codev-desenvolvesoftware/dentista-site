import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsApp from '../components/WhatsApp';
import Faixa from '../components/Faixa';

export default function Convenios() {
  return (
    <>
      <Header />

      <Faixa titulo="Convênios" breadcrumb="Convênios atendidos" />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="max-w-5xl mx-auto text-start mb-12 px-6 sm:px-16">
          <p className="text-gray-600 text-sm font-extralight text-between">
            Você sabia que a <strong>Clínica Odontológica</strong> aceita diversos convênios odontológicos?
            <br></br>
            Aqui, seu atendimento é facilitado com diversas operadoras. Assim você pode cuidar do seu sorriso com qualidade e conforto, sem se preocupar com o custo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
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
              className="p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105 flex flex-col items-center"
            >
              <img
                src={convenio.img}
                alt={`Convênio ${convenio.nome}`}
                className="h-32 mx-auto object-contain mb-2"
              />
              <p className="text-[13px] text-[#65739e] text-center leading-tight min-h-[2.5rem] flex items-center justify-center">
                {convenio.nome}
              </p>
            </div>
          ))}
        </div>

        <WhatsApp
          mensagem="Olá! Gostaria de marcar uma consulta."
        />
      </main>

      <Footer />
    </>
  );
}
