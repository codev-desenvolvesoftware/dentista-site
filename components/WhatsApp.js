'use client';
import Image from 'next/image';

export default function WhatsAppButton({ mensagem }) {
  const numeroFixo = '5511943665990';
  const link = `https://wa.me/${numeroFixo}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 animate-whatsapp-ping"
      aria-label="Converse conosco no WhatsApp"
    >
      <Image
        src="/index/whatsapp.png"
        alt="WhatsApp"
        width={60}
        height={60}
        className="hover:scale-110 transition-transform duration-300 ease-in-out"
      />
    </a>
  );
}
