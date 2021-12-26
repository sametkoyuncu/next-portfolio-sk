import { ThemeProvider } from 'next-themes'
import { sky } from 'tailwindcss/colors'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color={sky[400]} height={4} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
