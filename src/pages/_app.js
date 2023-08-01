import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { StateContextProvider } from '@/context/StateContext'
import '@/styles/globals.css'
import "../components/Dashboard/Reservaciones/styles/sweet-alert-custom.css"

export default function App({ Component, pageProps }) {
  return(<StateContextProvider>
    <Navbar/>
    <Component {...pageProps} />
   <Footer/>
    </StateContextProvider>
  ) 
}
