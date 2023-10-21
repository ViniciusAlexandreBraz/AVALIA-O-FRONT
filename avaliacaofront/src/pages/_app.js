import '@/styles/globals.css'
import Cabecalho from '@/components/cabecalho'
import Rodape from '@/components/rodape'

export default function App({ Component, pageProps }) {
 

  return (
    <>
   <Cabecalho/>
   <Component {...pageProps} />
   <Rodape/>
  </>
  )
  
  
 
  
}
