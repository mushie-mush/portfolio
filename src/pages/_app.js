import Layout from '@/components/Layout'
import Head from 'next/head'
import { Raleway } from '@next/font/google'
import '@/styles/main.scss'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Made by Cello</title>
        <meta
          name="description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <link rel="icon" type="image/x-icon" href="./images/favicon.ico"></link>

        <meta property="og:url" content="https://madebycello.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Made by Cello" />
        <meta
          property="og:description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <meta
          property="og:image"
          content="https://madebycello.netlify.app/og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="madebycello.netlify.app" />
        <meta
          property="twitter:url"
          content="https://madebycello.netlify.app/"
        />
        <meta name="twitter:title" content="Made by Cello" />
        <meta
          name="twitter:description"
          content="Hi, my name is Marcello Sebastian, a javascript developer who focuses on modern front end web development."
        />
        <meta
          name="twitter:image"
          content="https://madebycello.netlify.app/og.png"
        />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${raleway.style.fontFamily};
        }
      `}</style>
      <Layout className>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
