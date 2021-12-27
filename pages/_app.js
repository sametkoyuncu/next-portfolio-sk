import { ThemeProvider } from 'next-themes'
import { sky } from 'tailwindcss/colors'
import NextNProgress from 'nextjs-progressbar'
import { BlogProvider } from '../context/BlogContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <BlogProvider>
        <NextNProgress color={sky[400]} height={4} />
        <Component {...pageProps} />
      </BlogProvider>
    </ThemeProvider>
  )
}

export default MyApp
