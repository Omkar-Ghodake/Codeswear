import '../styles/globals.css'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component { ...pageProps } />
      <Footer />
    </>
  )
}

export default MyApp
