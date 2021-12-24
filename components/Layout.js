import Head from 'next/head'
import Header from './Header'

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Samet Koyuncu Portfolyo" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-zinc-700 dark:text-white">
        <div className="w-full h-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
