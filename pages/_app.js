import '../styles/globals.css'
import ThemeContextProvider from '../components/context/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
