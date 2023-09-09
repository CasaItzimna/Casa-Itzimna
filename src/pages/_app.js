import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { StateContextProvider } from '@/context/StateContext'
import '@/styles/globals.css'
import "../components/Dashboard/Reservaciones/styles/sweet-alert-custom.css"
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (<StateContextProvider>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Descubre la magia de Mérida en nuestra elegante Casa Boutique, donde la historia se fusiona con el encanto contemporáneo. Sumérgete en una experiencia única de lujo y bienestar, cautivado por nuestra excepcional hospitalidad y la gastronomía local. Bienvenido a Casa Itzimná Boutique, tu hogar en esta mágica ciudad." />
      <meta name="author" content="Casa Itzimná Boutique" />
      <meta property="og:title" content="Casa Itzimná Boutique" />
      <meta property="og:description" content="Descubre la magia de Mérida en nuestra elegante Casa Boutique, donde la historia se fusiona con el encanto contemporáneo. Sumérgete en una experiencia única de lujo y bienestar, cautivado por nuestra excepcional hospitalidad y la gastronomía local. Bienvenido a Casa Itzimná Boutique, tu hogar en esta mágica ciudad." />
      <meta property="og:image" content="/og_image.jpg" />
      <meta property="og:url" content="https://casaitzimnaboutique.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="Casa Itzimná Boutique" />
      <meta name="twitter:description" content="Descubre la magia de Mérida en nuestra elegante Casa Boutique, donde la historia se fusiona con el encanto contemporáneo. Sumérgete en una experiencia única de lujo y bienestar, cautivado por nuestra excepcional hospitalidad y la gastronomía local. Bienvenido a Casa Itzimná Boutique, tu hogar en esta mágica ciudad." />
      <meta name="twitter:image" content="/twitter_image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Casa Itzimná Boutique" />

      <meta name="google" content="notranslate"/>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet" />
      <link rel="icon" href="/icon-itzimna.jpg" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"  />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </StateContextProvider>
  )
}
