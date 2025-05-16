import Image from 'next/image';

const Footer = () => {
  return (
<footer className="font-montserrat font-extralight text-[#fcfcfc] bg-[linear-gradient(90deg,_rgba(67,195,254,1)_0%,_rgba(37,164,211,1)_53%,_rgba(3,128,159,1)_100%)]">
  {/* Primeira div: grid responsivo com margem lateral no mobile */}
  <div className="h-[200px] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0 md:mx-32 py-6 text-center place-items-center">
    {/* Bloco 1 */}
    <div className="flex items-center space-x-3 max-w-xs w-full">
      <Image src="/footer/localizacao.png" alt="Ícone 1" width={30} height={30} className="shrink-0" />
      <p className="text-sm leading-snug text-left">
        Rua Exemplo XYZ, 123<br />
        sala 02 - Bairro<br />
        Cidade - Estado
      </p>
    </div>

    {/* Bloco 2 */}
    <div className="flex items-center space-x-3 max-w-xs w-full">
      <Image src="/footer/whatsapp.png" alt="Ícone 2" width={25} height={25} className="shrink-0" />
      <p className="text-sm leading-snug text-left">        
      Fale por WhatsApp
    <br />
    <a
          href="https://wa.me/5511943665990?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
          target="_blank"
          rel="noopener noreferrer"
          className='text-[#fcfcfc] hover:text-[#fcfcfc] font-bold'      
        > 11 98765-4321</a>    
      </p>
    </div>

    {/* Bloco 3 */}
    <div className="flex items-center space-x-3 max-w-xs w-full">
      <Image src="/footer/relogio.png" alt="Ícone 3" width={25} height={25} className="shrink-0" />
      <p className="text-sm leading-snug text-left">
        Atendimento<br />
        Segunda a Sexta<br />
        das 9h às 18h
      </p>
    </div>

    {/* Bloco 4 */}
    <div className="flex items-center space-x-3 max-w-xs w-full">
      <Image src="/footer/agenda.png" alt="Ícone 4" width={25} height={25} className="shrink-0" />
      <p className="text-sm leading-snug text-left">
        Marque uma Consulta<br />
        <a
          href="https://wa.me/5511943665990?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta.
"
          target="_blank"
          rel="noopener noreferrer"    
          className='text-[#fcfcfc] hover:text-[#fcfcfc] font-bold'         
        >  
        Agendar Agora</a>       
      </p>
    </div>
  </div>

  {/* Segunda div */}
  <div className="h-[95px] bg-[#262d33] text-[#c0c1c4] text-xs text-center flex items-center justify-center px-4">
    <p>Copyright 2025 Clínica Odontológica. Todos os direitos reservados.</p>
  </div>
</footer>

  )
}

export default Footer;
