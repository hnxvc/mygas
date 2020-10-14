import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomThemeProvider from '../contexts/CustomThemeProvider'
import styled from 'styled-components'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as gtag from '../lib/gtag'
import Router from 'next/router'
// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

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
