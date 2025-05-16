import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import DepoimentosCarousel from '../components/Depoimentos';
import Tratamentos from '../components/Tratamentos';
import WhatsApp from '../components/WhatsApp';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sua Clínica Odontológica</title>
        <meta name="description" content="Consultório odontológico especializado em estética e saúde bucal, transformando sorrisos com tecnologia e cuidado personalizado." />
      </Head>

      

      <main className="font-montserrat bg-white text-gray-800">
        
        <Header />

        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Tratamentos Section */}
        <section id="depoimentos">
          <Tratamentos />
        </section>

        {/* Depoimentos Section */}
        <section id="depoimentos">
          <DepoimentosCarousel />
        </section>   

        {/* WhatsApp Section */}
        <WhatsApp
          mensagem="Olá! Gostaria de marcar uma consulta."
        />
      </main>

      <Footer />
    </>
  );
}
