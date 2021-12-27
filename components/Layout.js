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
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
        ></link>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="sametkoyuncu"
          data-description="Support me on Buy me a coffee!"
          data-message="Ziyaret ettiğin için teşekkürler. Bana destek olmak istersen, bir kahve ısmarlayabilirsin."
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-zinc-700 dark:text-white">
        <div className="w-full h-full">
          <div className="fixed left-0 right-0 z-50 bg-primary-light dark:bg-zinc-700 shadow-sm">
            <Header />
          </div>
          <div className="pt-16">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Layout
