import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomThemeProvider from '../contexts/CustomThemeProvider'
import styled from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  min-height: 100vh;
  font-family: monospace;

  a {
    color: ${(props) => props.theme.textColor};

    &:hover {
      color: ${(props) => props.theme.hightLightColor};
    }
  }
`

export default MyApp
