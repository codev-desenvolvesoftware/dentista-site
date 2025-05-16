import '../styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});


export default function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.variable}>
      <Component {...pageProps} />
    </main>
  );
}
