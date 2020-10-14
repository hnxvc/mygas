import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomThemeProvider from '../contexts/CustomThemeProvider'
import styled from 'styled-components'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Head>
        <title>MyGas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomThemeProvider>
        <StyledApp>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </StyledApp>
      </CustomThemeProvider>
    </>
  )
}

const StyledApp = styled.section`
  background-color: ${(props) => props.theme.color.bg};
  color: ${(props) => props.theme.color.text};
  min-height: 100vh;
  font-family: monospace;

  a {
    color: ${(props) => props.theme.color.hightLight};

    &:hover {
      color: ${(props) => props.theme.color.hightLight};
    }
  }
`

export default MyApp
