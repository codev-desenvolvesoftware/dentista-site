import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Faixa from '../components/Faixa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const contatos = [
  {
    icon: <FaPhoneAlt className="text-blue-500 mt-1" />,
    texto: '(11) 1234-5678',
    ligar: 'tel:+551112345678',
  },
  {
    icon: <FaWhatsapp className="text-green-500 mt-1" />,
    texto: '(11) 91234-5678',
    whatsapp: 'https://wa.me/5511912345678?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
  },
  {
    icon: <FaEnvelope className="text-blue-500 mt-1" />,
    texto: 'contato@suaclinica.com',
  },
  {
    icon: <FaMapMarkerAlt className="text-red-500 mt-1" />,
    texto: 'Rua Exemplo de XYZ, 123 sala 02 - Bairro, São Paulo - SP',
  },
];

export default function Contato() {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const validarTelefone = (value) => {
  const apenasNumeros = value.replace(/\D/g, '');
  if (!/^\d+$/.test(apenasNumeros)) {
    return 'Digite apenas números.';
  }
  if (apenasNumeros.length < 10 || apenasNumeros.length > 11) {
    return 'O telefone deve conter 10 ou 11 dígitos numéricos.';
  }
  return true;
};

  const onSubmit = () => {
    const serviceID = 'default_service';
    const templateID = 'template_trj7bgg';
    const publicKey = 'K3AITkZDmdb8W1Z6E';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        reset(); // limpa o formulário
      })
      .catch((err) => {
        console.error('Erro ao enviar:', err);
        alert('Erro ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
    <>
      <Header />
      <Faixa titulo="Contato" breadcrumb="Fale conosco" />

      <main className="container mx-auto py-12">
        <div className="xl:mx-64 lg:mx-32 grid md:grid-cols-2 items-start gap-10 px-4 md:px-8 text-sm text-gray-600 font-light">
          {/* Informações de contato */}
          <div className="space-y-2">
            <p className="sm:my-4 mb-8 sm:mb-16">
              Estamos prontos para transformar seu sorriso! <br />
              Agende uma consulta ou tire dúvidas com a nossa equipe.
            </p>

            {contatos.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                {item.icon} <p className="text-gray-700 mb-2">{item.texto}</p>
                {item.ligar && (
                  <a href={item.ligar} className="text-blue-500 text-[13px] font-semibold hover:font-bold">
                    Ligar
                  </a>
                )}
                {item.whatsapp && (
                  <a href={item.whatsapp} className="text-green-500 text-[13px] font-semibold hover:font-bold">
                    WhatsApp
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Formulário de contato */}
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-2xl shadow-md space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-[#65739e]">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                {...register('nome', { required: 'O nome é obrigatório' })}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#65739e]">Telefone</label>
              <input
                type="tel"
                placeholder="(11) 91234-5678"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                {...register('telefone', {
                  required: 'O telefone é obrigatório',
                  validate: validarTelefone,
                })}
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#65739e]">Mensagem</label>
              <textarea
                placeholder="Como podemos ajudar?"
                rows="4"
                className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                {...register('mensagem', { required: 'A mensagem é obrigatória' })}
              />
              {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
            </div>

            {/* Botão centralizado */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#29a9da] text-white text-[12px] px-4 py-2 rounded-md transition hover:bg-[#007d9e]"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
