import '../styles/globals.css'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='m-0 p-0 overflow-x-hidden'>
        <Navbar />
        <Component { ...pageProps } />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
