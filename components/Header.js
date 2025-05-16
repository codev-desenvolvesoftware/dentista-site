'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaCalendarAlt } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="font-montserrat fixed top-0 left-0 w-full z-50 bg-white">
      <div className="w-full px-4 md:max-w-[1600px] md:mx-auto md:px-6 sm:px-2 pt-4 h-auto">

        {/* DESKTOP */}
        <div className="hidden md:flex items-stretch">
          <div className="flex w-full h-full gap-2 text-sm">

            {/* Coluna 1: Logo + Menu */}
            <div className="flex flex-col flex-1 h-full items-center  sm:h-[186px] justify-between">
              {/* Logo */}
              <div className="flex justify-center w-full pt-4">
                <Link href="/" className="block">
                  <div className="relative h-[100px] w-[160px]">
                    <Image
                      src="/logo.png"
                      href="/"
                      alt="Logo da Clínica"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>

              {/* Menu */}
              <nav className="flex flex-wrap justify-center xl:gap-x-12 lg:gap-x-6 md:gap-x-2 pt-4 max-w-full">
                {["Home", "A Clínica", "Tratamentos", "Equipe", "Contato"].map((label, i) => {
                  const href = ["/", "/sobre", "/tratamentos", "/equipe", "/contato"][i];
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="text-[#65739e] text-sm px-2 py-2 whitespace-nowrap rounded-md transition-all duration-300 hover:text-white hover:ring-2 hover:ring-[#43c3fe] hover:bg-[#43c3fe] hover:shadow-md"
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Coluna 2: Contato + CTA */}
            <div className="flex flex-col flex-1 h-full justify-between items-center text-center max-w-full sm:h-[188px]">
              <div className="flex flex-row flex-wrap items-center justify-center gap-6 text-[#BBBFC9] pt-12">

                {/* Endereço */}
                <div className="flex items-start text-left">
                  <Image
                    src="/localizacao.png"
                    alt="Localização"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  <div className="leading-snug">
                    Rua Exemplo de XYZ<br />
                    123, sala 02 - Bairro<br />
                    São Paulo - SP
                  </div>
                </div>

                {/* Telefones */}
                <div className="flex flex-col text-[#007d9e] text-xl font-bold text-left">
                  <div className="flex items-center mb-1">
                    <Image
                      src="/telefone.png"
                      alt="Telefone"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span>11 1234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span>11 98765-4321</span>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="https://wa.me/5511943665990?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-2 bg-[#44c7ff] text-white rounded-md shadow hover:bg-[#089fe0] transition"
                >
                  <FaCalendarAlt className="mr-2" />
                  Marcar consulta
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col space-y-4 items-center text-center">
          {/* Topo: Logo + Botão menu */}
          <div className="relative w-full flex flex-col items-center">
            <Link href="/" className="block">
            <div className="relative w-[100px] h-[90px]">
              <Image src="/logo.png" href="/" alt="Logo da Clínica" fill className="object-contain" priority />
            </div>
            </Link>
            <button
              onClick={toggleMenu}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-blue-600"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Informações de contato */}
          <div className="flex flex-col items-center w-full text-[#BBBFC9] space-y-3">
            <div className="flex flex-row flex-wrap justify-center gap-4 w-full px-2">
              {/* Endereço */}
              <div className="flex items-start text-left text-sm">
                <Image src="/localizacao.png" alt="Localização" width={20} height={20} className="mr-2 mt-1" />
                <p className="leading-snug">
                  Rua Exemplo XYZ, 123<br />
                  sala 02 - Bairro<br />
                  Cidade - Estado
                </p>
              </div>

              {/* Telefones */}
              <div className="flex flex-col text-[#007d9e] font-bold text-left">
                <div className="flex items-center mb-1 text-lg">
                  <Image src="/telefone.png" alt="Telefone" width={15} height={15} className="mr-2" />
                  11 1234-5678
                </div>
                <div className="flex items-center text-lg">
                  <Image src="/whatsapp.png" alt="WhatsApp" width={15} height={15} className="mr-2" />
                  11 98765-4321
                </div>
              </div>
            </div>

            {/* Botão CTA */}
            <div className="w-screen px-0">
              <a
                href="https://wa.me/5511943665990?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta.
"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 bg-[#44c7ff] text-white text-center font-semibold hover:bg-[#089fe0] transition rounded-none"
              >
                <div className="h-4 flex items-center justify-center gap-2">
                  <FaCalendarAlt />
                  Marcar consulta
                </div>
              </a>
            </div>
          </div>

          {/* Menu Mobile */}
          {menuOpen && (
            <nav className="flex flex-col space-y-3 pt-4 border-gray-200 w-full">
              <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
              <Link href="/sobre" className="text-gray-800 hover:text-blue-600">A Clínica</Link>
              <Link href="/tratamentos" className="text-gray-800 hover:text-blue-600">Tratamentos</Link>
              <Link href="/equipe" className="text-gray-800 hover:text-blue-600">Equipe</Link>
              <Link href="/contato" className="text-gray-800 hover:text-blue-600">Contato</Link>
            </nav>
          )}
        </div>


      </div>
    </header>
  );
}
