import Layout from '@/components/Layout'
import '@/styles/main.scss'
import { Raleway } from '@next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
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
