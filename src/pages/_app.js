import Layout from '@/components/Layout'
import '@/styles/main.scss'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
