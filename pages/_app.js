import '../styles/globals.css'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import AlertState from '../context/Alertstate'
import Alert from '../layouts/Alert'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='m-0 p-0 overflow-x-hidden'>
        <AlertState>
          <Navbar />
          <Alert />
          <Component { ...pageProps } />
          <Footer />
        </AlertState>
      </div>
    </>
  )
}

export default MyApp
